var devices_list = $("#list-devices");

var airconsole = new AirConsole();

airconsole.onReady = function() {
  renderDevices();
};

airconsole.onDeviceProfileChange = function(device_id) {
  renderDevices();
};

airconsole.onConnect = function(device_id) {
  renderDevices();
};

airconsole.onDisconnect = function(device_id) {
  renderDevices();
};

// Simply render a list of all connected controllers
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

    devices_list.append(item);
  }
}
