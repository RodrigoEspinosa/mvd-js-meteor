var Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    'level/:num': 'level'
  },

  index: function () {
    Session.set('pageIs', 'index');
  },

  level: function (num) {
    Session.set('pageIs', 'level');
    Session.set('levelIs', num)
  }
});

window.App = new Router;

Meteor.startup(function () {
  Backbone.history.start({ pushState: true });
  $(document).on('click', 'a', function (event) {
    event.preventDefault();
    var href = $(this).attr('href');
    Backbone.history.navigate(href, {
      trigger: true
    });
  });
});