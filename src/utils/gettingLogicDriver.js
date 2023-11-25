import { VoyageProvider, Wallet, getLogicDriver } from 'js-moi-sdk';

export const gettingLogicDriver = async(logicId)=>{
    const provider = new VoyageProvider("babylon")
    const wallet = new Wallet(provider)
    await wallet.fromMnemonic("buffalo dolphin fun mom country bike silent code edge boring tip kite", "m/44'/6174'/7020'/0/0")
    return await getLogicDriver(logicId, wallet)
}