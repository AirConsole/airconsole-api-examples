// =======================================================================================
// SETUP
// =======================================================================================
var airconsole = new AirConsole();

airconsole.onReady = function() {
  setIsPremium();
};

/*
 * Gets called when the device turns into premium
 * @param {Number} device_id
 */
airconsole.onPremium = function(device_id) {
  // We only want to update this device_id
  if (device_id === this.getDeviceId()) {
    setIsPremium();
  }
};

function setIsPremium() {
  var is_premium = airconsole.isPremium();
  var label = is_premium ? "true" : "false";
  $(".is-hero").html(label);
}

// =======================================================================================
// BIND EVENTS
// =======================================================================================

// getPremium()
$("#btn-buy-hero").on("click", function() {
  airconsole.getPremium();
});

// =======================================================================================

// go back to main
$(".btn-go-back").on("click", function() {
  airconsole.navigateTo("..");
});
