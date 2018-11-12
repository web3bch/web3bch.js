import IWeb3bch from "./IWeb3bch";
import Network from "./entities/Network";
import IWalletProvider from "providers/src/IWalletProvider"
import ChangeType from "providers/src/entities/ChangeType"
import Utxo from "providers/src/entities/Utxo"
import Output from "providers/src/entities/Output"
export default class Web3bch implements IWeb3bch {
    walletProvider?: IWalletProvider | undefined;
    private defaultDAppId?;
    constructor(walletProvider?: IWalletProvider | undefined);
    getAddress(changeType: ChangeType, index?: number, dAppId?: string): Promise<string>;
    getAddressIndex(changeType: ChangeType, dAppId?: string): Promise<number>;
    getAddresses(changeType: ChangeType, startIndex?: number, size?: number, dAppId?: string): Promise<string[]>;
    getRedeemScript(p2shAddress: string, dAppId?: string): Promise<string | undefined>;
    getRedeemScripts(dAppId?: string): Promise<string[]>;
    addRedeemScript(redeemScript: string, dAppId: string): Promise<void>;
    getUtxos(dAppId?: string): Promise<Utxo[]>;
    getBalance(dAppId?: string): Promise<number>;
    sign(address: string, dataToSign: string): Promise<string>;
    buildTransaction(outputs: Output[], dAppId?: string): Promise<string>;
    getProtocolVersion(): Promise<number>;
    getNetwork(): Promise<Network>;
    getFeePerByte(): Promise<number>;
    getDefaultDAppId(): Promise<string | undefined>;
    setDefaultDAppId(dAppId?: string): Promise<void>;
    private isTxHash;
    private checkWalletProvider;
    private isP2SHCashAddress;
    private isCashAddress;
    private toAddressFromScript;
    private createSignedTx;
}
