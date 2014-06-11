console.log('\'Allo \'Allo!');

var app = app || {};
app.Post = [
  {
    title: "Today",
    body: "a really hot day"
  }, {
    title: "Tomorrow",
    body: "another heat-wave hot day"
  }
];

$(document).ready(function() {
  var router = new Router();
  router.addRoute('#!/posts/:id', function(req,next) {
    var id = req.params.id;
    post = app.Post[id];
    var template = _.template( $("#tpl-post").html() );
    var cnt = template({post: post});
    $("div.cnt").empty().html(cnt);
    document.location.href = req.href;
  });
  router.addRoute('#', function(req,next) {
    $("div.cnt").empty().html("<h2>home sweet home</h2>");
    document.location.href = req.href;
  });
  // router.map(function(match) {
  //   match("/posts/:id").to("showPost");
  // });

  // var myHandlers= {};
  // myHandlers.showPost = {
  //   model: function(params) {
  //     return app.Post[id];
  //   },
  //   setup: function(post) {
  //     var template = _.template( $("#tpl-post").html() );
  //     var cnt = template({post: post});
  //     $("div.cnt").html(cnt);
  //   }
  // }
  // router.getHandler = function(name) {
  //   return myHandlers[name];
  // }
  // router.updateURL = function(url) {
  //   window.location.hash = url;
  // }
});
