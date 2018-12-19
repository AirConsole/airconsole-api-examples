var airconsole = new AirConsole();
//var uid = null;
var list = $("#list");

function renderPersistentData(persistent_data) {
  list.empty();

  for (var uid in persistent_data) {
    var data = JSON.stringify(persistent_data[uid]);
    list.append('<li><b>' + uid + '</b><ul class="code"><li>' + data + '</li></ul></li>');
  }
}

airconsole.onReady = function() {
  // Requests the previously stored persistent data of this device
  this.requestPersistentData();
};

// Called as soon as the requested data has been loaded (callback)
airconsole.onPersistentDataLoaded = function(persistent_data) {
  renderPersistentData(persistent_data);
};

// Called as soon as the data has been saved successfully
airconsole.onPersistentDataStored = function(uid) {
  // TODO: something
};

airconsole.onMessage = function(device_id, data) {
  if (data.action === "store_data") {
    // Stores a key-value pair persistently on the AirConsole servers. Storage is per game.
    // Total storage can not exceed 1 MB per game and uid.
    var key = "my_data";
    var value = { name: "AirConsolero", timestamp: +new Date() };
    this.storePersistentData(key, value);
    //
    var data = {};
    data[this.getUID()] = value;
    renderPersistentData(data);
  }

};
