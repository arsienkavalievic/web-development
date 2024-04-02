class THashStorage {
  constructor() {
    this.hash = {};
  }

  Reset() {
    this.hash = {};
  }

  AddValue(key, value) {
    this.hash[key] = value;
  }

  GetValue(key) {
    return this.hash[key];
  }

  DeleteValue(key) {
    delete this.hash[key];
  }

  GetKeys() {
    return Object.keys(this.hash);
  }
}

// Пример использования класса THashStorage
const storage = new THashStorage();

function addInformation() {
  var key = prompt("Enter the text:");
  var value = prompt("Enter the text");
  if (key == null || value == null) {
    console.log("Input data is empty. Try one more time.");
    return;
  }
  storage.AddValue(key, value);
}

function deleteInformation() {
  var key = prompt("Enter the text:");
  if (storage.GetValue(key) !== undefined) {
    storage.DeleteValue(key);
    return;
  } else {
    console.log("Not found.");
    return;
  }
}

function getInformation() {
  var key = prompt("Enter the text:");
  var info = storage.GetValue(key);
  if (info === undefined) {
    console.log("Not found.");
  } else {
    console.log("Review of " + key + ": " + info);
  }
}

function listAllInformation() {
  var keys = storage.GetKeys();
  if (keys.length === 0) {
    console.log("No information available.");
  } else {
    keys.forEach(key => {
      console.log(key + ': ' + storage.GetValue(key));
    });
  }
}