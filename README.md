# kafka-node-example

# Dependencies
  - Docker
  - Node.js

# How to run

1. Start external(kafka) services. E.g: `docker-compose up`
1. Install dependencies. E.g: `npm install`
1. Start consumer process. E.g: `node ./consumer`
1. Start producing messages. E.g: `node ./producer hello world`

You should now see the producer message being consumed by the consumer process.
