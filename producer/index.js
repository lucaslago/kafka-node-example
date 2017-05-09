const Kafka = require('kafka-node');
const kafkaClient = require('../kafka');
const producer = new Kafka.Producer(kafkaClient);
const TOPIC = 'juraci';

const messages = process.argv.slice(2);

producer.on('ready', () => {
  console.log('producer ready')

  //producer.createTopics([TOPIC], false, (err, data) => {
  //  if(err) console.log(err)
  //  console.log(`topic ${TOPIC} created synchronously`);
  //  console.log(data)
  //});

  producer.send([{topic: TOPIC, messages}], (err, data) => {
    if(err) console.log(err);
    else {
      console.log('topic sent: ', data);
      process.exit(0);
    }
  })
});

producer.on('error', (error) =>  console.log(error));
