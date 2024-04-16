const convict = require('convict');
convict.addFormat(require('convict-format-with-validator').ipaddress);

// Defin a schema
const config = convict({
  env: {
    doc: 'The application environment.',
    format: ['production', 'development', 'test'],
    default: 'development',
    env: 'NODE_ENV',
  },
  port: {
    doc: 'The port to bind.',
    format: 'port',
    default: 4000,
    env: 'PORT',
    arg: 'port',
  },
  db: {
    
  }
});

const env = config.get('env');
if (env === 'development' || env === 'test') {
  config.loadFile(`${__dirname}/environments/${env}.json`);
}

config.validate({ allowed: 'strict' });
module.exports = config;
