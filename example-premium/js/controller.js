// =======================================================================================
// SETUP
// =======================================================================================
var airconsole = new AirConsole();

airconsole.onReady = function() {
  // After AirConsole has been initialized,
  // let's check the premium state of this device
  setIsPremium(this.getDeviceId());
};

/*
 * Gets called when the device turns into premium
 * or a premium device connects
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

// Call getPremium() to initiate the purchase process
$("#btn-buy-hero").on("click", function() {
  airconsole.getPremium();
});

// =======================================================================================

// go back to main
$(".btn-go-back").on("click", function() {
  airconsole.navigateTo("..");
});
