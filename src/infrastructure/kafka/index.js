require('dotenv').config()
const { Kafka, CompressionTypes } = require('kafkajs')

const kafka = new Kafka({
  clientId: 'mercury',
  brokers: [process.env.BROKER_1]
})


module.exports = {
  kafka,
  CompressionTypes
}
