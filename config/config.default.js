'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1524407311637_9177';

  exports.news = {
    pageSize: 5,
    serverUrl: 'https://hacker-news.firebaseio.com/v0',
  };

  exports.middleware = [
    'robot',
  ];

  exports.robot = {
    ua: [
      /Baiduspider/i,
    ]
  };
  
  exports.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    },
  };
  // add your config here
  config.middleware = [];

  return config;
};
