const ApiService = require('moleculer-web')

const broker = require('../../broker')('gateway')

broker.createService({
  name: 'gateway',
  mixins: [ApiService],
  settings: {
    port: 80,
    cors: {
      origin: '*',
      methods: ['GET', 'OPTIONS', 'POST', 'PUT', 'DELETE'],
      allowedHeaders: [
        'Content-Type',
        'x-auth-token',
        'authorization',
        'content-type',
        'x-csrf-token',
      ],
      exposedHeaders: [],
      credentials: false,
      maxAge: 3600,
    },
  },
})

broker.start().then(() => broker.repl())
