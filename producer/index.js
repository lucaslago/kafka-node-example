const Kafka = require('kafka-node');
const kafkaClient = require('../kafka');
const producer = new Kafka.Producer(kafkaClient);
const TOPIC = 'arroz';

producer.on('ready', () => {
  console.log('producer ready')

  producer.createTopics([TOPIC],false, (err, data) => {
    if(err) console.log(err)
    console.log(`topic ${TOPIC} created synchronously`);
    console.log(data)
  });

  // producer.send([{topic: TOPIC, messages: ['eu', 'sou', 'um', 'arroz']}], (err, data) => {
  //   if(err) console.log(err);
  //   console.log('topic sent: ', data);
  // })
});

producer.on('error', (error) =>  console.log(error));

