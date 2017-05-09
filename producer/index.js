const Kafka = require('kafka-node');
const kafkaClient = require('../kafka');
const producer = new Kafka.Producer(kafkaClient);

const topic = 'darksouls';
const messages = process.argv.slice(2);

producer.on('ready', () => {
  console.log('producer ready')
  producer.send([{topic, messages}], (err, data) => {
    if(err) {
      console.log(err);
      return err;
    }
    console.log('sent topic: ', data);
    process.exit(0);
  })
});

producer.on('error', error =>  console.log(error));
