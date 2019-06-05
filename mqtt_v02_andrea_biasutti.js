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
  console.log(message.toString())
  obj = JSON.parse(message);
  console.log(obj.msg);
  
  //console.log(message.toString())
  client.end()
})
