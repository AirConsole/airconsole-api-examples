var airconsole = new AirConsole();

// Sets the nickame
function setNickname() {
  var nickname = airconsole.getNickname();
  $("#btn-get-nickname").find(".value").html(nickname);
}

// Sets the profile picture
function setProfilePicture() {
  var profile_picture_url = airconsole.getProfilePicture();
  $("#btn-get-image").find(".app-button-split-icon").css({
    "background-image": "url(" + profile_picture_url + ")"
  });
}

/*
 * Gets called when the device edits it's nickname
 * @param {Number} device_id
 */
airconsole.onDeviceProfileChange = function(device_id) {
  // We only want to update the nickname of this device_id
  if (device_id === this.getDeviceId()) {
    setNickname();
  }
};

// =======================================================================================
// BIND EVENTS
// =======================================================================================

// editProfile
$("#btn-change-profile").on("click", function() {
  airconsole.editProfile();
});

// getNickname
$("#btn-get-nickname").on("click", function() {
  setNickname();
});

// getProfilePicture
$("#btn-get-image").on("click", function() {
  setProfilePicture();
});

// =======================================================================================

// go back to main
$(".btn-go-back").on("click", function() {
  airconsole.navigateTo("..");
});
