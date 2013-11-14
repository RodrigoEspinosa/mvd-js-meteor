var tests = [
  {i: 'doubleInt(2);', o: 4},
  {i: 'doubleInt(4);', o: 8},
  {i: 'doubleInt(1);', o: 2}
];

Meteor.methods({

  runTests: function (code, level) {
    check(code, String);
    check(level, Number);

    if (level > 5)
      throw new Meteor.Error(505, 'Level not found');

    var status = true;
    var response = [];
    for (var index = 0; index < tests.length; index++) {
      if (eval(code + '\n' + tests[index].i) === tests[index].o) {
        response.push([tests[index].i + ' passed!', 'ok']);
      } else {
        response.push([tests[index].i + ' failed!', 'err']);
        status = false;
        break;
      }
    }
    return {
      status: status,
      output: response
    };
  }

});