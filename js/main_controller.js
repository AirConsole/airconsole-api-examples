var airconsole = new AirConsole();

airconsole.onReady = function() {

};

$(".app-button").on("click", function() {
  var path = $(this).attr("data-dir");
  console.log("Path", path);
  airconsole.navigateTo("./example-" + path);
});
