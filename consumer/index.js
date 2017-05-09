const Kafka = require('kafka-node');
const kafkaClient = require('../kafka');

const consumer = new Kafka.Consumer(kafkaClient, [{ topic: 'darksouls', partition: 0 }]);

consumer.on('message', message => console.log(message));
consumer.on('error', error => console.log(error));
