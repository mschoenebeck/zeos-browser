// check out: https://docs.liquidapps.io/liquidapps-documentation/dapp-network-services/dapp-network-services/liquidstorage/getting-started-guide/test

const { createClient } = require('@liquidapps/dapp-client');
const fetch = require('isomorphic-fetch');
const endpoint = "https://kylin-dsp-1.liquidapps.io";
const getClient = () => createClient( { network:"kylin", httpEndpoint: endpoint, fetch });

(async () => {
  let res = await fetch(endpoint + '/v1/dsp/liquidstorag/get_uri', {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify({ uri: "ipfs://zb2rhgmGdS3KzK5GXxEmebeEuR113wKTja2VQr4V5XSwaq1Pm" })
  });
  res = await res.json();
  res = Buffer.from(res.data, 'base64').toString(),
  console.log(`result: ${res}`);
})().catch((e) => { console.log(e); });
