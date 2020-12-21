const { kafka, CompressionTypes } = require('./infrastructure')
const producer = require('./producer')
const consumer = require('./consumer')

const runAll = async () => {
  const topic = 'mercury-test'

  Promise.all([
    producer(kafka, topic, CompressionTypes).run(),
    consumer(kafka, topic).run()
  ])
}

runAll()
