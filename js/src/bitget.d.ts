import Exchange from './abstract/bitget.js';
import { Int, OrderSide, OrderType } from './base/types.js';
/**
 * @class bitget
 * @extends Exchange
 */
export default class bitget extends Exchange {
    describe(): any;
    setSandboxMode(enabled: any): void;
    fetchTime(params?: {}): Promise<number>;
    fetchMarkets(params?: {}): Promise<any>;
    parseMarkets(markets: any): any[];
    parseMarket(market: any): {
        id: string;
        symbol: string;
        base: any;
        quote: any;
        settle: any;
        baseId: string;
        quoteId: string;
        settleId: string;
        type: any;
        spot: boolean;
        margin: boolean;
        swap: boolean;
        future: boolean;
        option: boolean;
        active: any;
        contract: boolean;
        linear: any;
        inverse: any;
        taker: number;
        maker: number;
        contractSize: number;
        expiry: any;
        expiryDatetime: any;
        strike: any;
        optionType: any;
        precision: {
            amount: any;
            price: any;
        };
        limits: {
            leverage: {
                min: any;
                max: any;
            };
            amount: {
                min: number;
                max: number;
            };
            price: {
                min: any;
                max: any;
            };
            cost: {
                min: any;
                max: any;
            };
        };
        info: any;
    };
    fetchMarketsByType(type: any, params?: {}): Promise<any[]>;
    fetchCurrencies(params?: {}): Promise<{}>;
    fetchMarketLeverageTiers(symbol: string, params?: {}): Promise<any[]>;
    parseMarketLeverageTiers(info: any, market?: any): any[];
    fetchDeposits(code?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    withdraw(code: string, amount: any, address: any, tag?: any, params?: {}): Promise<{
        id: string;
        info: any;
        txid: any;
        timestamp: any;
        datetime: any;
        network: any;
        addressFrom: any;
        address: any;
        addressTo: any;
        amount: any;
        type: string;
        currency: any;
        status: any;
        updated: any;
        tagFrom: any;
        tag: any;
        tagTo: any;
        comment: any;
        fee: any;
    }>;
    fetchWithdrawals(code?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    parseTransaction(transaction: any, currency?: any): {
        id: string;
        info: any;
        txid: string;
        timestamp: number;
        datetime: string;
        network: string;
        addressFrom: any;
        address: string;
        addressTo: string;
        amount: number;
        type: string;
        currency: any;
        status: string;
        updated: number;
        tagFrom: any;
        tag: any;
        tagTo: any;
        comment: any;
        fee: any;
    };
    parseTransactionStatus(status: any): string;
    fetchDepositAddress(code: string, params?: {}): Promise<{
        currency: any;
        address: string;
        tag: string;
        network: string;
        info: any;
    }>;
    parseDepositAddress(depositAddress: any, currency?: any): {
        currency: any;
        address: string;
        tag: string;
        network: string;
        info: any;
    };
    fetchOrderBook(symbol: string, limit?: Int, params?: {}): Promise<import("./base/types.js").OrderBook>;
    parseTicker(ticker: any, market?: any): import("./base/types.js").Ticker;
    fetchTicker(symbol: string, params?: {}): Promise<import("./base/types.js").Ticker>;
    fetchTickers(symbols?: string[], params?: {}): Promise<import("./base/types.js").Dictionary<import("./base/types.js").Ticker>>;
    parseTrade(trade: any, market?: any): import("./base/types.js").Trade;
    fetchTrades(symbol: string, limit?: Int, since?: Int, params?: {}): Promise<import("./base/types.js").Trade[]>;
    fetchTradingFee(symbol: string, params?: {}): Promise<{
        info: any;
        symbol: any;
        maker: number;
        taker: number;
    }>;
    fetchTradingFees(params?: {}): Promise<{}>;
    parseTradingFee(data: any, market?: any): {
        info: any;
        symbol: any;
        maker: number;
        taker: number;
    };
    parseOHLCV(ohlcv: any, market?: any): number[];
    fetchOHLCV(symbol: string, timeframe?: string, since?: Int, limit?: Int, params?: {}): Promise<import("./base/types.js").OHLCV[]>;
    fetchBalance(params?: {}): Promise<import("./base/types.js").Balances>;
    parseBalance(balance: any): import("./base/types.js").Balances;
    parseOrderStatus(status: any): string;
    parseOrder(order: any, market?: any): import("./base/types.js").Order;
    createOrder(symbol: string, type: OrderType, side: OrderSide, amount: any, price?: any, params?: {}): Promise<import("./base/types.js").Order>;
    editOrder(id: string, symbol: any, type: any, side: any, amount?: any, price?: any, params?: {}): Promise<import("./base/types.js").Order>;
    cancelOrder(id: string, symbol?: string, params?: {}): Promise<import("./base/types.js").Order>;
    cancelOrders(ids: any, symbol?: string, params?: {}): Promise<any>;
    cancelAllOrders(symbol?: string, params?: {}): Promise<any>;
    fetchOrder(id: string, symbol?: string, params?: {}): Promise<import("./base/types.js").Order>;
    fetchOpenOrders(symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<import("./base/types.js").Order[]>;
    fetchClosedOrders(symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<import("./base/types.js").Order[]>;
    fetchCanceledOrders(symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<import("./base/types.js").Order[]>;
    fetchCanceledAndClosedOrders(symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    fetchLedger(code?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    parseLedgerEntry(item: any, currency?: any): {
        info: any;
        id: string;
        timestamp: number;
        datetime: string;
        direction: any;
        account: any;
        referenceId: any;
        referenceAccount: any;
        type: string;
        currency: any;
        amount: number;
        before: any;
        after: number;
        status: any;
        fee: number;
    };
    fetchMyTrades(symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<import("./base/types.js").Trade[]>;
    fetchOrderTrades(id: string, symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<import("./base/types.js").Trade[]>;
    fetchPosition(symbol: string, params?: {}): Promise<any>;
    fetchPositions(symbols?: string[], params?: {}): Promise<any>;
    parsePosition(position: any, market?: any): any;
    fetchFundingRateHistory(symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    fetchFundingRate(symbol: string, params?: {}): Promise<{
        info: any;
        symbol: any;
        markPrice: any;
        indexPrice: any;
        interestRate: any;
        estimatedSettlePrice: any;
        timestamp: any;
        datetime: any;
        fundingRate: number;
        fundingTimestamp: any;
        fundingDatetime: any;
        nextFundingRate: any;
        nextFundingTimestamp: any;
        nextFundingDatetime: any;
        previousFundingRate: any;
        previousFundingTimestamp: any;
        previousFundingDatetime: any;
    }>;
    parseFundingRate(contract: any, market?: any): {
        info: any;
        symbol: any;
        markPrice: any;
        indexPrice: any;
        interestRate: any;
        estimatedSettlePrice: any;
        timestamp: any;
        datetime: any;
        fundingRate: number;
        fundingTimestamp: any;
        fundingDatetime: any;
        nextFundingRate: any;
        nextFundingTimestamp: any;
        nextFundingDatetime: any;
        previousFundingRate: any;
        previousFundingTimestamp: any;
        previousFundingDatetime: any;
    };
    fetchFundingHistory(symbol: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    parseFundingHistory(contract: any, market?: any): {
        info: any;
        symbol: any;
        timestamp: number;
        datetime: string;
        code: any;
        amount: number;
        id: string;
    };
    parseFundingHistories(contracts: any, market?: any, since?: Int, limit?: Int): any;
    modifyMarginHelper(symbol: string, amount: any, type: any, params?: {}): Promise<any>;
    parseMarginModification(data: any, market?: any): {
        info: any;
        type: any;
        amount: any;
        code: any;
        symbol: any;
        status: string;
    };
    reduceMargin(symbol: string, amount: any, params?: {}): Promise<any>;
    addMargin(symbol: string, amount: any, params?: {}): Promise<any>;
    fetchLeverage(symbol: string, params?: {}): Promise<any>;
    setLeverage(leverage: any, symbol?: string, params?: {}): Promise<any>;
    setMarginMode(marginMode: any, symbol?: string, params?: {}): Promise<any>;
    setPositionMode(hedged: any, symbol?: string, params?: {}): Promise<any>;
    fetchOpenInterest(symbol: string, params?: {}): Promise<{
        symbol: any;
        openInterestAmount: number;
        openInterestValue: any;
        timestamp: number;
        datetime: string;
        info: any;
    }>;
    fetchTransfers(code?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    transfer(code: string, amount: any, fromAccount: any, toAccount: any, params?: {}): Promise<{
        info: any;
        id: string;
        timestamp: number;
        datetime: string;
        currency: any;
        amount: number;
        fromAccount: string;
        toAccount: string;
        status: string;
    }>;
    parseTransfer(transfer: any, currency?: any): {
        info: any;
        id: string;
        timestamp: number;
        datetime: string;
        currency: any;
        amount: number;
        fromAccount: string;
        toAccount: string;
        status: string;
    };
    parseDepositWithdrawFee(fee: any, currency?: any): {
        info: any;
        withdraw: {
            fee: any;
            percentage: any;
        };
        deposit: {
            fee: any;
            percentage: any;
        };
        networks: {};
    };
    fetchDepositWithdrawFees(codes?: string[], params?: {}): Promise<any>;
    parseTransferStatus(status: any): string;
    parseOpenInterest(interest: any, market?: any): {
        symbol: any;
        openInterestAmount: number;
        openInterestValue: any;
        timestamp: number;
        datetime: string;
        info: any;
    };
    handleErrors(code: any, reason: any, url: any, method: any, headers: any, body: any, response: any, requestHeaders: any, requestBody: any): any;
    sign(path: any, api?: any[], method?: string, params?: {}, headers?: any, body?: any): {
        url: string;
        method: string;
        body: any;
        headers: any;
    };
}
