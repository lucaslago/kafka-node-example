const Kafka = require('kafka-node');
const config = require('../config');
const client = new Kafka.Client(config.zookeeperUrl, 'kafka-example-client');

module.exports = client;

