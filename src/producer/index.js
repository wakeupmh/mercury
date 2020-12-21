module.exports = (kafka, topic, CompressionTypes) => {
  const producer = kafka.producer()
 
  const getRandomNumber = () => Math.round(Math.random(10) * 1000)
  const createMessage = num => ({
    key: `key-${num}`,
    value: `value-${num}-${new Date().toISOString()}`,
  })

  const sendMessage = () => {
    return producer
      .send({
        topic,
        compression: CompressionTypes.GZIP,
        messages: Array(getRandomNumber())
          .fill()
          .map(_ => createMessage(getRandomNumber())),
      })
      .then(console.log)
      .catch(e => console.error(`[example/producer] ${e.message}`, e))
  }

  const run = async () => {
    await producer.connect()
    setInterval(sendMessage, 3000)
  }

  return {
    run
  }
}
