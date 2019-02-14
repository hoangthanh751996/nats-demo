module.exports = {
  apps :[
      {
    name: 'API user service',
    script: 'user-service/index.js',

    instances: 0,
    },
    {
      name: 'API notification service',
      script: 'notification-service/index.js',
      instances: 0,
    }
  ]
};
