const Kafka = require('node-rdkafka');

const consumer = new Kafka.KafkaConsumer({ 
  'client.id': 'example-node-kafka',
  'group.id': 'squad-a',
  'metadata.broker.list': 'localhost:9092'
});

const TOPIC_NAME = 'darksouls';

consumer.on('event.log', log => console.log(log))

consumer.on('error', (err) => {
  console.error('Error from consumer');
  console.error(err);
});

consumer.on('ready', (arg) => {
  console.log('consumer ready.', JSON.stringify(arg));
  consumer.subscribe([TOPIC_NAME]);
  consumer.consume();
});

consumer.on('data', (m) => {
  console.log('[CONSUMER 1]');
  console.log(JSON.stringify(m));
  console.log(m.value.toString());
});

consumer.on('disconnected', (arg) => {
  console.log('consumer disconnected. ' + JSON.stringify(arg));
});

consumer.connect();

