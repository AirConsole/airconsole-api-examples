var devices_list = $("#list-devices");
var airconsole = new AirConsole();

airconsole.onReady = function() {
  renderDevices();
};

// Listen for custom-device-state changes
// When a device sets it's color, then this method will get triggered
airconsole.onCustomDeviceStateChange = function(device_id, custom_data) {
  renderDevices();
};

// Returns the color property of a device if available
function getCustomColorProperty(device_id) {
  // Get the custom device state from the device
  var custom_data = airconsole.getCustomDeviceState(device_id);

  if (custom_data && custom_data.color) {
    return custom_data.color;
  }

  return "No color set";
}

// Render a list of all connected controllers and it's data
function renderDevices() {
  devices_list.empty();
  var device_ids = airconsole.getControllerDeviceIds();
  for (var i = 0; i < device_ids.length; i++) {
    var device_id = device_ids[i];
    var nickname = airconsole.getNickname(device_id);
    var profile_picture_url = airconsole.getProfilePicture(device_id);

    var item = $('<div class="row"></div>');
    item.append('<img src="' + profile_picture_url + '">');
    item.append(nickname);

    // Get the color property of the device
    var color = getCustomColorProperty(device_id);
    item.append(" color: " + color);

    devices_list.append(item);
  }
}
