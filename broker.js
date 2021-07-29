const { ServiceBroker } = require('moleculer')

module.exports = (brokerName) => {
  const broker = new ServiceBroker({
    nodeID: brokerName + process.pid,
    namespace: 'local',
    transporter: 'TCP',
    logger: true,
    logLevel: 'info',
    requestTimeout: 60000 * 1000,
    requestRetry: 3,
    cacher: 'Memory',
  })

  return broker
}
