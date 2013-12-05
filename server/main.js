Scores = new Meteor.Collection('scores');

Scores.allow({
  insert: function (userId, doc) {
    return check(doc.name, String) && check(doc.time, String);
  },
  update: function () {
    return false;
  },
  remove: function () {
    return false;
  }
});

Meteor.publish('scores', function () {
  return Scores.find();
});

Meteor.methods({

  startCode: function (level) {
    check(level, Number);
    if (level > 5)
      throw new Meteor.Error(505, 'Level not found');

    var text = '';
    switch (level) {
      case 1:
        text += 'function doubleInt (i) {\n';
        text += '\t// i will be an integer. Double it and return it.\n';
        text += '\treturn i;\n';
        text += '}';
      break;
      case 2:
        text += 'function isEvenNumber (i) {\n';
        text += '\t// i will be an integer. Return true if it\'s even, and false if it isn\'t.\n\t';
        text += '\n}';
      break;
      case 3:
        text += 'function endsWith (a, b) {\n';
        text += '\t// a will be String. Find out if a ends with b\n\t';
        text += '\n}';
      break;
      case 4:
        text += 'function sumArray (i) {\n';
        text += '\t// i will be an array. Every element can be a number or another array.\n';
        text += '\t// if it\'s an array, sum it as well.\n\t';
        text += '\n}';
      break;
      case 5:
        text += 'function isTwo (i) {\n';
        text += '\t// i will be Batman.\n\t';
        text += '\n}';
      break;
    };
    return text;
  },

  runTests: function (code, level) {
    var status = true,
        response = [];

    check(code, String);
    check(level, Number);
    if (level > 5)
      throw new Meteor.Error(505, 'Level not found');

    for (var index = 0; index < tests[level].length; index++) {
      if (eval(code + '\n' + tests[level][index].i) === tests[level][index].o) {
        response.push([tests[level][index].i + ' passed!', 'ok']);
      } else {
        response.push([tests[level][index].i + ' failed!', 'err']);
        status = false;
        break;
      }
    }
    return {
      status: status,
      output: response
    };
  },

  postScore: function (name, time) {
    check(name, String);
    check(time, String);

    Scores.insert({
      name: name,
      time: time,
      createdAt: new Date()
    });
  }

});
