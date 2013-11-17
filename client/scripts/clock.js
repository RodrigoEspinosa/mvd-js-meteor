window.clock = {
  inPlay: false,
  secs: 0,
  startTime: new Date().getTime(),

  start: function () {
    clock.startTime = new Date().getTime();
    clock.inPlay = true;
    Meteor.setTimeout(clock.tick, 100);
  },

  stop: function () {
    clock.secs += (new Date().getTime() - clock.startTime);
    clock.inPlay = false;
    clock.update();
  },

  update: function () {
    var s = clock.get();
    $('#clock').text(Math.floor(s / 60) + ':' + Math.floor(s % 60).toFixed(0).pad(2, '0'));
  },

  get: function () {
    return (clock.inPlay) ? (clock.secs + (new Date().getTime() - clock.startTime)) / 1000 : clock.secs / 1000;
  },

  tick: function () {
    if (clock.inPlay) {
      clock.update();
      Meteor.setTimeout(clock.tick, 100);
    }
  }
};

String.prototype.pad = function (l, s){
  return (l -= this.length) > 0
      ? (s = new Array(Math.ceil(l / s.length) + 1).join(s)).substr(0, s.length) + this + s.substr(0, l - s.length)
      : this;
};
window.startClock = clock.start;
window.stopClock = clock.stop;
/*var inPlay = false,
    secs = 0,
    startTime = new Date().getTime();

window.startClock = function () {
  Session.set('startTime', new Date().getTime());
  Session.set('secs', 0);
  Session.set('inPlay', true);
  Meteor.setTimeout(window.tick, 100);
}

window.stopClock = function () {
  secs += (new Date().getTime() - Session.get('startTime'));
  Session.set('inPlay', false);
  window.updateClock();
}

window.updateClock = function () {
  var s = window.getClock();
  $('#clock').text(Math.floor(s / 60) + ":" + Math.floor(s % 60).toFixed(0).pad(2, '0'));
}

window.getClock = function () {
  return (Session.get('inPlay')) ? (secs + (new Date().getTime() - Session.get('startTime'))) / 1000 : Session.get('secs') / 1000;
}

window.tick = function () {
  if (Session.equals('inPlay', true)) {
    window.updateClock();
    Meteor.setTimeout(window.tick, 100);
  }
}

String.prototype.pad = function (l, s){
  return (l -= this.length) > 0
      ? (s = new Array(Math.ceil(l / s.length) + 1).join(s)).substr(0, s.length) + this + s.substr(0, l - s.length)
      : this;
};*/