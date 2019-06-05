var mqtt = require('mqtt')
var auth = {
        username:'doberpi',
        password:'doberpi'
}

//var client  = mqtt.connect('mqtt://127.0.0.1', auth)
var client  = mqtt.connect('mqtt:test.mosquitto.org')

client.on('connect', function () {
  client.subscribe('sensori', function (err) {
    if (!err) {
      client.publish('sensori', '{"msg":"Hello mqtt"}')
    }    
    if (err) {
      console.log(err)
    }
  })
})

client.on('message', function (topic, message) {
  // message is Buffer
  obj = JSON.parse(message);
  console.log(obj.count);
  console.log(obj.result);
  
  //console.log(message.toString())
  client.end()
})
