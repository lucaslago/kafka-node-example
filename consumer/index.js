'use strict';
const Kafka = require('no-kafka');
const cert = process.env.CLOUDKARAFKA_CERT;
const key = process.env.CLOUDKARAFKA_PRIVATE_KEY;
const connectionString = 'steamer-01.srvs.cloudkafka.com:9093,steamer-03.srvs.cloudkafka.com:9093,steamer-02.srvs.cloudkafka.com:9093';

const config = {
  groupId: 'squad-a',
  connectionString,
  ssl: {
    cert,
    key,
  },
  startingOffset: Kafka.LATEST_OFFSET
};

const consumer = new Kafka.GroupConsumer(config);
const dataHandler = (messageSet, topic, partition) => {
  console.log('Messages to be committed: ', messageSet)
  return Promise.all(messageSet.map((m) => {
    console.log(topic, partition, m.offset, m.message.value.toString('utf8'));
    return consumer.commitOffset({topic, partition, offset: m.offset});
  }));
};
const strategies = [{
  handler: dataHandler,
  subscriptions: ['dj5c-darksouls']
}];

return consumer
  .init(strategies);
