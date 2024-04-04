function TLocalStorage() {
  var self = this;
  var storage = window.localStorage;

  self.Reset = function () {
    storage.clear();
  };

  self.AddValue = function (key, value) {
    storage.setItem(key, JSON.stringify(value));
  };

  self.GetValue = function (key) {
    var value = storage.getItem(key);
    if (value !== null) {
      return JSON.parse(value);
    } else {
      alert("This review isn't found :(");
      return null;
    }
  };

  self.RemoveValue = function (key) {
    storage.removeItem(key);
  };

  self.GetKeys = function () {
    var keys = Object.keys(storage);
    var result = "";
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var value = self.GetValue(key);
      result += key + ": " + value + "\n";
    }
    return result;
  };
}

var Storage = new TLocalStorage();

function addInformation() {
  var key = prompt("Enter the review's name:");
  var value = prompt("Enter the review:");
  if (key == null || value == null) {
    console.log("Input data is empty. Try one more time.");
    return;
  }
  Storage.AddValue(key, value);
}

function deleteInformation() {
  var key = prompt("Enter the review's name:");
  Storage.RemoveValue(key);
}

function getInformation() {
  var key = prompt("Enter the review's name:");
  var info = Storage.GetValue(key);
  if (info) {
    console.log("Review of " + key + ": " + info);
  }
}

function listAllInformation() {
  var allInfo = Storage.GetKeys();
  if (allInfo === "") {
    console.log("No information available.");
  } else {
    console.log(allInfo);
  }
}