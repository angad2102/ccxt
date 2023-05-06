import { implicitReturnType } from '../base/types.js';
import { Exchange as _Exchange } from '../base/Exchange.js';
interface Exchange {
    publicGetIdAll(params?: {}): Promise<implicitReturnType>;
    publicGetIdMarket(params?: {}): Promise<implicitReturnType>;
    publicGetIdOrderbook(params?: {}): Promise<implicitReturnType>;
    publicGetIdTicker(params?: {}): Promise<implicitReturnType>;
    publicGetIdTrades(params?: {}): Promise<implicitReturnType>;
    privatePostInfo(params?: {}): Promise<implicitReturnType>;
    privatePostTrade(params?: {}): Promise<implicitReturnType>;
    privatePostCancel(params?: {}): Promise<implicitReturnType>;
    privatePostOrderbook(params?: {}): Promise<implicitReturnType>;
    privatePostOrders(params?: {}): Promise<implicitReturnType>;
    privatePostTransfer(params?: {}): Promise<implicitReturnType>;
    privatePostWithdraw(params?: {}): Promise<implicitReturnType>;
    privatePostHistory(params?: {}): Promise<implicitReturnType>;
    privatePostTransactions(params?: {}): Promise<implicitReturnType>;
    v1_01PublicGetTradingTicker(params?: {}): Promise<implicitReturnType>;
    v1_01PublicGetTradingTickerSymbol(params?: {}): Promise<implicitReturnType>;
    v1_01PublicGetTradingStats(params?: {}): Promise<implicitReturnType>;
    v1_01PublicGetTradingStatsSymbol(params?: {}): Promise<implicitReturnType>;
    v1_01PublicGetTradingOrderbookSymbol(params?: {}): Promise<implicitReturnType>;
    v1_01PublicGetTradingTransactionsSymbol(params?: {}): Promise<implicitReturnType>;
    v1_01PublicGetTradingCandleHistorySymbolResolution(params?: {}): Promise<implicitReturnType>;
    v1_01PrivateGetApiPaymentsDepositsCryptoAddresses(params?: {}): Promise<implicitReturnType>;
    v1_01PrivateGetPaymentsWithdrawalDetailId(params?: {}): Promise<implicitReturnType>;
    v1_01PrivateGetPaymentsDepositDetailId(params?: {}): Promise<implicitReturnType>;
    v1_01PrivateGetTradingOffer(params?: {}): Promise<implicitReturnType>;
    v1_01PrivateGetTradingStopOffer(params?: {}): Promise<implicitReturnType>;
    v1_01PrivateGetTradingConfigSymbol(params?: {}): Promise<implicitReturnType>;
    v1_01PrivateGetTradingHistoryTransactions(params?: {}): Promise<implicitReturnType>;
    v1_01PrivateGetBalancesBITBAYHistory(params?: {}): Promise<implicitReturnType>;
    v1_01PrivateGetBalancesBITBAYBalance(params?: {}): Promise<implicitReturnType>;
    v1_01PrivateGetFiatCantorRateBaseIdQuoteId(params?: {}): Promise<implicitReturnType>;
    v1_01PrivateGetFiatCantorHistory(params?: {}): Promise<implicitReturnType>;
    v1_01PrivatePostTradingOfferSymbol(params?: {}): Promise<implicitReturnType>;
    v1_01PrivatePostTradingStopOfferSymbol(params?: {}): Promise<implicitReturnType>;
    v1_01PrivatePostTradingConfigSymbol(params?: {}): Promise<implicitReturnType>;
    v1_01PrivatePostBalancesBITBAYBalance(params?: {}): Promise<implicitReturnType>;
    v1_01PrivatePostBalancesBITBAYBalanceTransferSourceDestination(params?: {}): Promise<implicitReturnType>;
    v1_01PrivatePostFiatCantorExchange(params?: {}): Promise<implicitReturnType>;
    v1_01PrivateDeleteTradingOfferSymbolIdSidePrice(params?: {}): Promise<implicitReturnType>;
    v1_01PrivateDeleteTradingStopOfferSymbolIdSidePrice(params?: {}): Promise<implicitReturnType>;
    v1_01PrivatePutBalancesBITBAYBalanceId(params?: {}): Promise<implicitReturnType>;
}
declare abstract class Exchange extends _Exchange {
}
export default Exchange;
