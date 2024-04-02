const hash = {};

function AddValue(key, value) {
    hash[key] = value;
}
  
function DeleteValue(key) {
    delete hash[key];
}
  
function GetValueInfo(key) {
    if (hash.hasOwnProperty(key)) {
      return hash[key];
    } else {
      return 'not found';
    }
}
  
function ListValues() {
    let result = '';
    for (let key in hash) {
      result += key + ': ' + hash[key] + '\n';
    }
    return result;
}

function addInformation() {
  var key = prompt("Enter the text:");
  var value = prompt("Enter the text");
  if (key == null || value == null) {
    console.log("Input data is empty. Try one more time.");
    return;
  }
  AddValue(key, value);
}

function deleteInformation() {
  var key = prompt("Enter the text:");
  if (key in hash) {
    DeleteValue(key);
    return;
  }
  else {
    console.log("Not found.");
    return;
  }
}

function getInformation() {
  var key = prompt("Enter the text:");
  var info = GetValueInfo(key);
  if (info === 'not found') {
    console.log(info);
  } else {
    console.log("Review of " + key + ": " + info);
  }
}

function listAllInformation() {
  var allInfo = ListValues();
  if (allInfo === "") {
    console.log("No information available.");
  } else {
    console.log(allInfo);
  }
}