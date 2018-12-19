var airconsole = new AirConsole();

airconsole.onReady = function() {

};

// Gets called when a device turns into premium, or a premium device connects
airconsole.onPremium = function(device_id) {
  $("#log").append("<li>DeviceID " + device_id + " is an <span class='complementary'>AirConsole Hero</span></li>");
};
