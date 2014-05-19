module.exports.adapters = {
  'default': 'mongo',

  mongo: {
    module: 'sails-mongo',
    url      : process.env.MONGOLAB_URI || 'mongodb://pierro:pierro@oceanic.mongohq.com:10022/basics',  
  }
};