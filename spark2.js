var spark = require('spark');

spark.login({accessToken: '984446cd53fedc95779f07fd416e1207e1dc7921'});

// Get avaliable devices
spark.listDevices(function(err, devices) {
  device = devices[0];

  // Print out info about device
  console.log('Device name: ' + device.name);
  console.log('- connected?: ' + device.connected);
  console.log('- variables: ' + device.variables);
  console.log('- functions: ' + device.functions);
  console.log('- version: ' + device.version);
  console.log('- requires upgrade?: ' + device.requiresUpgrade);

  // start count clearing loop
  checkCount(device)
});

// Get the value of the count variable and reset it
// if it is over 20.
// This function calls itself so it will become an infinite loop.
function checkCount(device){
  device.getVariable('distance', function(err, data) {
      var distance = data.result
      if (err) {
        console.log('An error occurred while getting attrs:', err);

      } else {

        // Successfully got 'count'
        console.log('Distance:', distance);

        // if the count is 20 or more, call the clear function
      }

    // Check again after some time -- measured in ms
      setTimeout(function(){checkCount(device)}, 0);
  });
}
