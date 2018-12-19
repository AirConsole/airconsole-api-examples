var airconsole = new AirConsole();

airconsole.onReady = function() {};

function setDeviceStateColor(color) {
  // Sets the device state (key - value)
  // This device has now a device state property "color" with the value of color.
  // Every other device (including the screen) gets notified about the change.
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
