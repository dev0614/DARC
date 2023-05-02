import * as prelude from '../codeGenerator/codeGenerator';
import {Contract, ethers} from 'ethers';
import * as darcjson from "../../../darc-protocol/artifacts/contracts/Darc.sol/Darc.json";

import {DARC_VERSION, DARCBinaryStruct, darcBinary} from '../darcBinary/darcBinary';

type RuntimeParam = {
  address: string;
  wallet: ethers.Wallet;
  provider: ethers.providers.Provider;
}

type DeployParam = {
  wallet: ethers.Wallet;
  provider: ethers.providers.Provider;
}

/**
 * The runtime function is used to transpile the code to the runtime code.
 * @param param 
 */
export async function runtime_RunByLawScript(scrint: string, param: RuntimeParam):Promise<string> {
  const { address, wallet, provider } = param;
  const darc = new ethers.Contract(address, darcjson.abi, wallet);
  return "";
}

export async function runtime_RunProgram(program:any, param: RuntimeParam): Promise<string> {
  const { address, wallet, provider } = param;
  const darc = new ethers.Contract(address, darcjson.abi, wallet);
  return await darc.entrance(program);
}



export async function runtime_getTokenOwners(tokenClass: number, param: RuntimeParam): Promise<string[]> {
  const { address, wallet, provider } = param;
  const darc = new ethers.Contract(address, darcjson.abi, provider);
  return await darc.getTokenOwners(BigInt(tokenClass));
}

export async function deployDARC(version: DARC_VERSION, signer: ethers.Wallet): Promise<string> {
  const darcBinaryStruct = darcBinary(version);
  const bytecode = darcBinaryStruct.bytecode;
  const abi = darcBinaryStruct.abi;
  const contractFactory = new ethers.ContractFactory(abi, bytecode, signer);
  const contract = await contractFactory.deploy();
  contract.initialize();
  return contract.address;
}

export async function attachDARCwithProvider (address: string, version: DARC_VERSION, provider: ethers.providers.Provider): Promise<Contract> {
  const darcBinaryStruct = darcBinary(version);
  const abi = darcBinaryStruct.abi;
  const contract = new ethers.Contract(address, abi, provider);
  return contract;
}

export async function attachDARCwithWallet (address: string, version: DARC_VERSION, wallet: ethers.Wallet): Promise<Contract> {
  const darcBinaryStruct = darcBinary(version);
  const abi = darcBinaryStruct.abi;
  const contract = new ethers.Contract(address, abi, wallet);
  return contract;
}