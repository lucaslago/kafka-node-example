const Kafka = require('kafka-node');
const kafkaClient = require('../kafka');
const producer = new Kafka.Producer(kafkaClient);

producer.on('ready', () => {
  producer.send([{topic: 'arroz', messages: ['eu', 'sou', 'um', 'arroz']}], (err, data) => {
    if(err) console.log(err);
    console.log('topic sent: ', data);
  })
});

producer.on('error', (error) =>  console.log(error));

