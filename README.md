# swaggerui2koa

js client for omnilayer

install
```
npm install omnilayer-client
```

example
```
const {Transaction} = require('bitcore-lib');
const OmniClient = require('omnilayer-client');
const omnicore = new OmniClient(omni);

const omnicoinId = 2147484822; // usdt is 31
const {address, privKey} = pairs;

const feerate = await omnicore.estimateFee(25);

const utxos = await omnicore.listUnspent(0, 10000, [address]);

const payload = await omnicore.omni_createpayload_simplesend(omnicoinId, "101");

let rawtx = await omnicore.omni_createrawtx_opreturn(null, payload);

rawtx = await omnicore.omni_createrawtx_reference(rawtx, "mzsHYc2QKYvKHxJG16rjzrASNMC1eoLvda");

let tx = new bitcore.Transaction();
tx.fromString(rawtx);
tx.from(utxos);
tx.change(address);
tx.sign(privKey);
tx.serialize();

// stringify transaction 
rawtx = tx.toString();

const decoded = await omnicore.decodeRawTransaction(rawtx);
console.log({decoded}); // decoded will include txid

const txid = await omnicore.sendRawTransaction(rawtx);
console.log({txid});

```


