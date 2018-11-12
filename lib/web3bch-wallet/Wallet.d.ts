import IWallet from "./IWallet";
import ChangeType from "../web3bch-providers/entities/ChangeType";
import Utxo from "../web3bch-providers/entities/Utxo";
import Network from "./entities/Network";
import Destination from "./entities/Destination";
import Output from "../web3bch-providers/entities/Output";
import Providers from "../web3bch/Providers";
import ProviderType from "./entities/ProviderType";
export default class Wallet implements IWallet {
    readonly providers: Providers;
    private defaultDAppId?;
    constructor(providers: Providers);
    getAddress(changeType: ChangeType, index?: number, dAppId?: string): Promise<string>;
    getAddressIndex(changeType: ChangeType, dAppId?: string): Promise<number>;
    getAddresses(changeType: ChangeType, startIndex?: number, size?: number, dAppId?: string): Promise<string[]>;
    getRedeemScript(p2shAddress: string, dAppId?: string): Promise<string | undefined>;
    getRedeemScripts(dAppId?: string): Promise<string[]>;
    addRedeemScript(redeemScript: string, dAppId: string): Promise<void>;
    getUtxos(dAppId?: string): Promise<Utxo[]>;
    getBalance(dAppId?: string): Promise<number>;
    sign(address: string, dataToSign: string): Promise<string>;
    send(destination: Destination | Destination[], data?: string | string[]): Promise<string>;
    advancedSend(outputs: Output[], dAppId?: string): Promise<string>;
    getProtocolVersion(providerType: ProviderType): Promise<number>;
    getNetwork(providerType: ProviderType): Promise<Network>;
    broadcastRawTx(rawTx: string): Promise<string>;
    getFeePerByte(): Promise<number>;
    getDefaultDAppId(): Promise<string | undefined>;
    setDefaultDAppId(dAppId?: string): Promise<void>;
    private isHex;
    private isTxHash;
    private checkWalletProvider;
    private checkNetworkProvider;
    private isP2SHCashAddress;
    private isCashAddress;
    private toAddressFromScript;
    private sendToOutputs;
}
