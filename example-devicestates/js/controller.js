var airconsole = new AirConsole();

airconsole.onReady = function() {};

function setDeviceStateColor(color) {
  // Sets the key - value: key, value
  airconsole.setCustomDeviceStateProperty("color", color);
  $("#data").html(color).css({ color: color });
}

// =======================================================================================
// BIND EVENTS
// =======================================================================================

$("#btn-change-color-green").on("click", function() {
  setDeviceStateColor("green");
});

$("#btn-change-color-blue").on("click", function() {
  setDeviceStateColor("blue");
});

// =======================================================================================

// go back to main
$(".btn-go-back").on("click", function() {
  airconsole.navigateTo("..");
});
