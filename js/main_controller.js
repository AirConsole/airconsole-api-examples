var airconsole = new AirConsole();

airconsole.onReady = function() {

};

$(".app-button").on("click", function() {
  var path = $(this).attr("data-dir");
  if (path) {
    console.log("Path", path);
    airconsole.navigateTo("./example-" + path);
  } else {
    console.error("Path does not exist!", path);
  }
});
