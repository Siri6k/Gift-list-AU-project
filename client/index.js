const axios = require('axios');


const serverUrl = 'http://localhost:1225';

async function main() {
  // TODO: how do we prove to the server we're on the nice list? 
const name = 'Adam Kayungura Ir';

  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    // TODO: add request body parameters here!
    name: name,
  });

  console.log({ gift });
}

main();