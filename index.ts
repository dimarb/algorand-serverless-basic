import * as algokit from '@algorandfoundation/algokit-utils';
import algosdk from 'algosdk';
import { ApplicationClient, AppClientCreateParams } from '@algorandfoundation/algokit-utils/types/app-client';
import { AlgoAmount } from '@algorandfoundation/algokit-utils/types/amount';
import { RegisterClient } from './contracts/clients/RegisterClient';
const fetch = require("node-fetch");

global.fetch = fetch;

// modern module syntax
export async function deploy(event, context, callback) {
  const  stage:string  = process.env.STAGE!;
  const algod = algokit.getAlgoClient(getAlgoClientConfig(stage))
  const acct = await algokit.mnemonicAccountFromEnvironment( "DEPLOYER", algod);
  
  
  const app = new RegisterClient(
    {
      name: "BetaComunty",
      sender: acct,
      resolveBy: 'id',
      id: 0,
    },
    algod
  );

  await app.create.createApplication({});

  const { appId, appAddress } = await app.appClient.getAppReference();

    const response = {
      statusCode: 200,
      body: JSON.stringify({
        appId : appId,
        appAddress:appAddress,
      }),
    };
    callback(null, response);
}


export async function write(event, context, callback) {

  const  stage:string  = process.env.STAGE!;
  const algod = algokit.getAlgoClient(getAlgoClientConfig(stage))
  const acct = await algokit.mnemonicAccountFromEnvironment( "DEPLOYER", algod);
  

  const firstAtc = new algosdk.AtomicTransactionComposer();
  const app = new RegisterClient(
    {
      sender: acct,
      resolveBy: 'id',
      id: 629058641, 
    },
    algod
  );
  const boxRef = { appIndex: 0, name: algosdk.encodeUint64(1 ) };
  const boxes: algosdk.BoxReference[] = new Array(7).fill(boxRef);
  const suggestedParams = await algod.getTransactionParams().do();

  firstAtc.addMethodCall({
    method: app.appClient.getABIMethod('addData')!,
    methodArgs: [1,  "A", "B" ],
    boxes,
    suggestedParams,
    sender: acct.addr,
    signer: algosdk.makeBasicAccountTransactionSigner(acct),
    appID : 629058641,
  });


  await app.appClient.fundAppAccount(algokit.microAlgos(100_000));

  await app.appClient.fundAppAccount(algokit.microAlgos(129100));

  const result = await algokit.sendAtomicTransactionComposer({ atc: firstAtc }, algod);


    const response = {
      statusCode: 200,
      body: JSON.stringify({
        data : result.transactions
      }),
    };
    callback(null, response);

}

export async function read(event, context, callback) {
  const  stage:string  = process.env.STAGE!;
  const algod = algokit.getAlgoClient(getAlgoClientConfig(stage))
  const acct = await algokit.mnemonicAccountFromEnvironment( "DEPLOYER", algod);

  const firstAtc = new algosdk.AtomicTransactionComposer();
  const app = new RegisterClient(
    {
      sender: acct,
      resolveBy: 'id',
      id: 629058641, 
    },
    algod
  );

  const boxRef = { appIndex: 0, name: algosdk.encodeUint64(1 ) };
  const boxes: algosdk.BoxReference[] = new Array(7).fill(boxRef);
  const suggestedParams = await algod.getTransactionParams().do();

  firstAtc.addMethodCall({
    method: app.appClient.getABIMethod('getData')!,
    methodArgs: [1],
    boxes,
    suggestedParams,
    sender: acct.addr,
    signer: algosdk.makeBasicAccountTransactionSigner(acct),
    appID : 629058641,
  });

  const result = await algokit.sendAtomicTransactionComposer({ atc: firstAtc }, algod);


  const response = {
    statusCode: 200,
    body: JSON.stringify({
      data : result.transactions
    }),
  };
  callback(null, response);


}

function getAlgoClientConfig<aAlgoClientConfig> (stage:string){
  if(stage=="sandbox") return algokit.getAlgoNodeConfig("testnet","algod")
  if(stage=="dev") return {server: 'http://localhost', port: '4001', token: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'}
  if(stage=="production") return algokit.getAlgoNodeConfig("mainnet","algod")
}

function getAlgoClientConfigIndexer<getAlgoClientConfig> (stage:string){
  if(stage=="sandbox") return algokit.getAlgoNodeConfig("testnet","indexer")
  if(stage=="dev") return {server: 'http://localhost', port: '8980', token: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'}
  if(stage=="production") return algokit.getAlgoNodeConfig("mainnet","indexer")
}
