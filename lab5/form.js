document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById('myForm');
    var errorMessages = document.getElementById('errorMessages');
    var dataArray = [];
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      validateForm();
    });
  
    function validateForm() {
      var senderField = document.getElementById('sender');
      var startTimeField = document.getElementById('startTime');
      var endTimeField = document.getElementById('endTime');
      var weightField = document.getElementById('weight');
      var receiverField = document.getElementById('receiver'); 
      var errors = [];
  
      var senderValue = senderField.value.trim();
  
      if (senderValue.length >= 20 || !/\d$/.test(senderValue)) {
        errors.push('The "Sender\'s address" field must be text less than 20 characters long and end with a number');
      }

      var timePattern = /^(0?[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
      if (!timePattern.test(startTimeField.value)) {
        errors.push('"Pick-up Time" field must be in hh:mm format (e.g. 10:30)');
      }
  
      if (!timePattern.test(endTimeField.value)) {
        errors.push('"Drop-off Time" field must be in hh:mm format (e.g. 10:30)');
      }
  
      if (weightField.value.trim() === '' || weightField.value < 1 || weightField.value > 100) {
        errors.push('"Weight of package" field must be a number from 1 to 100');
      }
  
      var receiverValue = receiverField.value.trim();
     
  
      if (receiverValue.length >= 20 || !/\d$/.test(receiverValue)) {
        errors.push('The "Receiver\'s address" field must be text less than 20 characters long and end with a number');
      }
  
      if (errors.length > 0) {
        displayErrors(errors);
      } else {
        addToDataArray(senderField.value, startTimeField.value, endTimeField.value, weightField.value, receiverField.value);
        clearForm();
      }
    }
  
    function displayErrors(errors) {
      errorMessages.innerHTML = '';
      errors.forEach(function(error) {
        var errorMessage = document.createElement('p');
        errorMessage.textContent = error;
        errorMessages.appendChild(errorMessage);
      });
  
    }
  
    function addToDataArray(sender, time, weight, receiver) {
      var data = {
        sender: sender,
        time: time,
        weight: weight,
        receiver: receiver
      };
      dataArray.push(data);
      console.log("Data added to array:", data);
    }
  
    function clearForm() {
      var inputs = document.querySelectorAll('input[type="text"], input[type="number"]'); 
      inputs.forEach(function(input) {
        input.value = '';
      });
      errorMessages.innerHTML = '';
    }
  });