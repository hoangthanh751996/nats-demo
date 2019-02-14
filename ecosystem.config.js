module.exports = {
  apps :[
      {
    name: 'API',
    script: 'user-service/index.js',

    instances: 0,
    },
    {
      name: 'API',
      script: 'notification-service/index.js',
      instances: 0,
    }
  ]
};
