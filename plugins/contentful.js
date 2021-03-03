const contentful = require('contentful');

const defaultConfig = {
  space: process.env.CTF_SPACE_ID ,
  accessToken: process.env.CTF_CDA_ACCESS_TOKEN ,
  environment: process.env.CTF_ENVIRONMENT || 'master' ,
}

export default function(provideConfig = false) {
  const config = !provideConfig ? defaultConfig : provideConfig ;
  return contentful.createClient(config);
}
