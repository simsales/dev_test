const SERVICE_NAME = 'widget'

const broker = require('../../broker')(SERVICE_NAME)

broker.createService({
  name: SERVICE_NAME,
  actions: {
    random: {
      rest: {
        method: 'GET',
      },
      async handler(ctx) {
        console.log(`${SERVICE_NAME} call getRandom`)

        // Тут нужно дописать код
      },
    },
  },
})

broker.start()
