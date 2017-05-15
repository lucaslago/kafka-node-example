'use strict';
const Kafka = require('no-kafka');
const cert = process.env.CLOUDKARAFKA_CERT;
const key = process.env.CLOUDKARAFKA_PRIVATE_KEY;
const connectionString = 'steamer-01.srvs.cloudkafka.com:9093,steamer-03.srvs.cloudkafka.com:9093,steamer-02.srvs.cloudkafka.com:9093';

const config = {
  connectionString,
  ssl: {
    cert,
    key,
  }
};

const dataHandler = (messageSet, topic, partition) => {
  messageSet.forEach((m) => {
    console.log(topic, partition, m.offset, m.message.value.toString('utf8'));
  });
};

const producer = new Kafka.Producer(config);


return producer.init()
  .then(() => {
    return producer.send({
      topic: 'dj5c-darksouls',
      partition: 0,
      message: {
        value: 'Hello!'
      }
    });
  }).then(function (result) {
    console.log('success');
    console.log(result);
  });
