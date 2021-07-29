const SERVICE_NAME = 'randomizer'

const broker = require('../../broker')(SERVICE_NAME)

broker.createService({
  name: SERVICE_NAME,
  actions: {
    getNum(ctx) {
      const { min, max } = ctx.params

      const rand = min + Math.random() * (max + 1 - min)

      return Math.floor(rand)
    },
  },
})

broker.start()
