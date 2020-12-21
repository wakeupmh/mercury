module.exports = (kafka, topic) => {
  const consumer = kafka.consumer({ groupId: 'test-group' })

  const run = async () => {
    await consumer.connect()
    await consumer.subscribe({ topic, fromBeginning: true })
    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        const prefix = `${topic}[${partition} | ${message.offset}] / ${message.timestamp}`
        console.log(`- ${prefix} ${message.key}#${message.value}`)
      },
    })
  }

  return {
    run
  }
}

