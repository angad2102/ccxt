const Exchange = require ('./base/Exchange');
const { TICK_SIZE } = require ('./base/functions/number');

module.exports = class hitbtc3 extends Exchange {
    describe () {
        return this.deepExtend (super.describe (), {
            'id': 'hitbtc3',
            'name': 'HitBTC',
            'countries': [ 'HK' ],
            'rateLimit': 100,
            'version': '3',
            'pro': true,
            'has': {
                'cancelOrder': true,
                'CORS': false,
                'createDepositAddress': true,
                'createOrder': true,
                'editOrder': true,
                'fetchBalance': true,
                'fetchClosedOrders': true,
                'fetchCurrencies': true,
                'fetchDepositAddress': true,
                'fetchDeposits': false,
                'fetchMarkets': true,
                'fetchMyTrades': true,
                'fetchOHLCV': true,
                'fetchOpenOrder': true,
                'fetchOpenOrders': true,
                'fetchOrder': true,
                'fetchOrderBook': true,
                'fetchOrders': false,
                'fetchOrderTrades': true,
                'fetchTicker': true,
                'fetchTickers': true,
                'fetchTrades': true,
                'fetchTradingFee': true,
                'fetchTransactions': true,
                'fetchWithdrawals': false,
                'withdraw': true,
                'transfer': true,
            },
            'precisionMode': TICK_SIZE,
            'urls': {
                'logo': 'https://user-images.githubusercontent.com/1294454/27766555-8eaec20e-5edc-11e7-9c5b-6dc69fc42f5e.jpg',
                'test': {
                    'public': 'https://api.demo.hitbtc.com',
                    'private': 'https://api.demo.hitbtc.com',
                },
                'api': {
                    'public': 'https://api.hitbtc.com/api/3',
                    'private': 'https://api.hitbtc.com/api/3',
                },
                'www': 'https://hitbtc.com',
                'referral': 'https://hitbtc.com/?ref_id=5a5d39a65d466',
                'doc': [
                    'https://api.hitbtc.com',
                    'https://github.com/hitbtc-com/hitbtc-api/blob/master/APIv2.md',
                ],
                'fees': [
                    'https://hitbtc.com/fees-and-limits',
                    'https://support.hitbtc.com/hc/en-us/articles/115005148605-Fees-and-limits',
                ],
            },
            'api': {
                'public': {
                    'get': [
                        'public/currency',
                        'public/symbol',
                        'public/ticker',
                        'public/price/rate',
                        'public/trades',
                        'public/orderbook',
                        'public/candles',
                        'public/futures/info',
                        'public/futures/history/funding',
                        'public/futures/candles/index_price',
                        'public/futures/candles/mark_price',
                        'public/futures/candles/premium_index',
                        'public/futures/candles/open_interest',
                    ],
                },
                'private': {
                    'get': [
                        'spot/balance',
                        'spot/order',
                        'spot/order/{client_order_id}',
                        'spot/fee',
                        'spot/fee/{symbol}',
                        'spot/history/order',
                        'spot/history/trade',
                        'margin/account',
                        'margin/account/isolated/{symbol}',
                        'margin/order',
                        'margin/order/{client_order_id}',
                        'margin/history/order',
                        'margin/history/trade',
                        'futures/balance',
                        'futures/account',
                        'futures/account/isolated/{symbol}',
                        'futures/order',
                        'futures/order/{client_order_id}',
                        'futures/fee',
                        'futures/fee/{symbol}',
                        'futures/history/order',
                        'futures/history/trade',
                        'wallet/balance',
                        'wallet/crypto/address',
                        'wallet/crypto/address/recent-deposit',
                        'wallet/crypto/address/recent-withdraw',
                        'wallet/crypto/address/check-mine',
                        'wallet/transactions',
                        'wallet/crypto/check-offchain-available',
                        'wallet/crypto/fee/estimate',
                        'sub-account',
                        'sub-account/acl',
                        'sub-account/balance/{subAccID}',
                        'sub-account/crypto/address/{subAccID}/{currency}',
                    ],
                    'post': [
                        'spot/order',
                        'margin/order',
                        'futures/order',
                        'wallet/convert',
                        'wallet/crypto/withdraw',
                        'wallet/transfer',
                        'sub-account/freeze',
                        'sub-account/activate',
                        'sub-account/transfer',
                        'sub-account/acl',
                    ],
                    'patch': [
                        'spot/order/{client_order_id}',
                        'margin/order/{client_order_id}',
                        'futures/order/{client_order_id}',
                    ],
                    'delete': [
                        'spot/order',
                        'spot/order/{client_order_id}',
                        'margin/position',
                        'margin/position/isolated/{symbol}',
                        'margin/order',
                        'margin/order/{client_order_id}',
                        'futures/position',
                        'futures/position/isolated/{symbol}',
                        'futures/order',
                        'futures/order/{client_order_id}',
                        'wallet/crypto/withdraw/{id}',
                    ],
                    'put': [
                        'margin/account/isolated/{symbol}',
                        'futures/account/isolated/{symbol}',
                        'wallet/crypto/withdraw/{id}',
                    ],
                },
            },
            'fees': {
                'trading': {
                    'tierBased': true,
                    'percentage': true,
                    'taker': this.parseNumber ('0.0009'),
                    'maker': this.parseNumber ('0.0009'),
                    'tiers': {
                        'maker': [
                            [ this.parseNumber ('0'), this.parseNumber ('0.0009') ],
                            [ this.parseNumber ('10'), this.parseNumber ('0.0007') ],
                            [ this.parseNumber ('100'), this.parseNumber ('0.0006') ],
                            [ this.parseNumber ('500'), this.parseNumber ('0.0005') ],
                            [ this.parseNumber ('1000'), this.parseNumber ('0.0003') ],
                            [ this.parseNumber ('5000'), this.parseNumber ('0.0002') ],
                            [ this.parseNumber ('10000'), this.parseNumber ('0.0001') ],
                            [ this.parseNumber ('20000'), this.parseNumber ('0') ],
                            [ this.parseNumber ('50000'), this.parseNumber ('-0.0001') ],
                            [ this.parseNumber ('100000'), this.parseNumber ('-0.0001') ],
                        ],
                        'taker': [
                            [ this.parseNumber ('0'), this.parseNumber ('0.0009') ],
                            [ this.parseNumber ('10'), this.parseNumber ('0.0008') ],
                            [ this.parseNumber ('100'), this.parseNumber ('0.0007') ],
                            [ this.parseNumber ('500'), this.parseNumber ('0.0007') ],
                            [ this.parseNumber ('1000'), this.parseNumber ('0.0006') ],
                            [ this.parseNumber ('5000'), this.parseNumber ('0.0006') ],
                            [ this.parseNumber ('10000'), this.parseNumber ('0.0005') ],
                            [ this.parseNumber ('20000'), this.parseNumber ('0.0004') ],
                            [ this.parseNumber ('50000'), this.parseNumber ('0.0003') ],
                            [ this.parseNumber ('100000'), this.parseNumber ('0.0002') ],
                        ],
                    },
                },
            },
        });
    }

    async fetchMarkets (params = {}) {
        const request = {};
        const response = await this.publicGetPublicSymbol (this.extend (request, params));
        //
        // fetches both spot and future markets
        //
        //     {
        //         "ETHBTC": {
        //             "type": "spot",
        //             "base_currency": "ETH",
        //             "quote_currency": "BTC",
        //             "quantity_increment": "0.001",
        //             "tick_size": "0.000001",
        //             "take_rate": "0.001",
        //             "make_rate": "-0.0001",
        //             "fee_currency": "BTC",
        //             "margin_trading": true,
        //             "max_initial_leverage": "10.00"
        //         }
        //     }
        //
        const marketIds = Object.keys (response);
        const result = [];
        for (let i = 0; i < marketIds.length; i++) {
            const id = marketIds[i];
            const entry = response[id];
            const baseId = this.safeString (entry, 'base_currency');
            const quoteId = this.safeString (entry, 'quote_currency');
            const base = this.safeCurrencyCode (baseId);
            const quote = this.safeCurrencyCode (quoteId);
            const symbol = base + '/' + quote;
            const maker = this.safeNumber (entry, 'make_rate');
            const taker = this.safeNumber (entry, 'take_rate');
            const feeCurrency = this.safeString (entry, 'fee_currency');
            const feeSide = (feeCurrency === quoteId) ? 'quote' : 'base';
            const margin = this.safeValue (entry, 'margin_trading', false);
            const type = this.safeString (entry, 'type');
            const spot = (type === 'spot');
            const futures = (type === 'futures');
            const priceIncrement = this.safeNumber (entry, 'tick_size');
            const amountIncrement = this.safeNumber (entry, 'quantity_increment');
            const precision = {
                'price': priceIncrement,
                'amount': amountIncrement,
            };
            const limits = {
                'amount': {
                    'min': undefined,
                    'max': undefined,
                },
                'price': {
                    'min': undefined,
                    'max': undefined,
                },
                'cost': {
                    'min': undefined,
                    'max': undefined,
                },
            };
            result.push ({
                'info': entry,
                'symbol': symbol,
                'id': id,
                'base': base,
                'quote': quote,
                'baseId': baseId,
                'quoteId': quoteId,
                'spot': spot,
                'margin': margin,
                'futures': futures,
                'type': type,
                'feeSide': feeSide,
                'maker': maker,
                'taker': taker,
                'precision': precision,
                'limits': limits,
            });
        }
        return result;
    }

    async fetchCurrencies (params = {}) {
        const response = await this.publicGetPublicCurrency (params);
        //
        //     {
        //       "WEALTH": {
        //         "full_name": "ConnectWealth",
        //         "payin_enabled": false,
        //         "payout_enabled": false,
        //         "transfer_enabled": true,
        //         "precision_transfer": "0.001",
        //         "networks": [
        //           {
        //             "network": "ETH",
        //             "protocol": "ERC20",
        //             "default": true,
        //             "payin_enabled": false,
        //             "payout_enabled": false,
        //             "precision_payout": "0.001",
        //             "payout_fee": "0.016800000000",
        //             "payout_is_payment_id": false,
        //             "payin_payment_id": false,
        //             "payin_confirmations": "2"
        //           }
        //         ]
        //       }
        //     }
        //
        const result = {};
        const currencies = Object.keys (response);
        for (let i = 0; i < currencies.length; i++) {
            const currencyId = currencies[i];
            const code = this.safeCurrencyCode (currencyId);
            const entry = response[currencyId];
            const name = this.safeString (entry, 'full_name');
            const precision = this.safeNumber (entry, 'precision_transfer');
            const payinEnabled = this.safeValue (entry, 'payin_enabled', false);
            const payoutEnabled = this.safeValue (entry, 'payout_enabled', false);
            const transferEnabled = this.safeValue (entry, 'transfer_enabled', false);
            const active = payinEnabled && payoutEnabled && transferEnabled;
            const rawNetworks = this.safeValue (entry, 'networks', []);
            const networks = {};
            let fee = undefined;
            for (let j = 0; j < rawNetworks.length; j++) {
                const rawNetwork = rawNetworks[j];
                let networkId = this.safeString (rawNetwork, 'protocol');
                if (networkId.length === 0) {
                    networkId = this.safeString (rawNetwork, 'network');
                }
                const network = this.safeNetwork (networkId);
                fee = this.safeNumber (rawNetwork, 'payout_fee');
                const precision = this.safeNumber (rawNetwork, 'precision_payout');
                const payinEnabledNetwork = this.safeValue (entry, 'payin_enabled', false);
                const payoutEnabledNetwork = this.safeValue (entry, 'payout_enabled', false);
                const transferEnabledNetwork = this.safeValue (entry, 'transfer_enabled', false);
                const active = payinEnabledNetwork && payoutEnabledNetwork && transferEnabledNetwork;
                networks[network] = {
                    'info': rawNetwork,
                    'id': networkId,
                    'network': network,
                    'fee': fee,
                    'active': active,
                    'precision': precision,
                    'limits': {
                        'withdraw': {
                            'min': undefined,
                            'max': undefined,
                        },
                    },
                };
            }
            const networksKeys = Object.keys (networks);
            const networksLength = networksKeys.length;
            result[code] = {
                'info': entry,
                'code': code,
                'id': currencyId,
                'precision': precision,
                'name': name,
                'active': active,
                'networks': networks,
                'fee': (networksLength <= 1) ? fee : undefined,
                'limits': {
                    'amount': {
                        'min': undefined,
                        'max': undefined,
                    },
                },
            };
        }
        return result;
    }

    safeNetwork (networkId) {
        const networksById = {
        };
        return this.safeString (networksById, networkId, networkId);
    }

    async fetchDepositAddress (code, params = {}) {
        await this.loadMarkets ();
        const currency = this.currency (code);
        const request = {
        };
        const response = await this.privateGetWalletCryptoAddress (request);
        return response;
    }

    async fetchBalance (params) {
        const response = await this.privateGetSpotBalance ();
        //
        //     [
        //       {
        //         "currency": "PAXG",
        //         "available": "0",
        //         "reserved": "0",
        //         "reserved_margin": "0",
        //       },
        //       ...
        //     ]
        //
        const result = { 'info': response };
        for (let i = 0; i < response.length; i++) {
            const entry = response[i];
            const currencyId = this.safeString (entry, 'currency');
            const code = this.safeCurrencyCode (currencyId);
            const account = this.account ();
            account['free'] = this.safeString (entry, 'available');
            account['used'] = this.safeString (entry, 'reserved');
            result[code] = account;
        }
        return this.parseBalance (result);
    }

    async fetchTicker (symbol, params = {}) {
        const response = await this.fetchTickers ([ symbol ], params);
        return this.safeValue (response, symbol);
    }

    async fetchTickers (symbols = undefined, params = {}) {
        await this.loadMarkets ();
        const request = {};
        if (symbols !== undefined) {
            const marketIds = this.marketIds (symbols);
            const delimited = marketIds.join (',');
            request['symbols'] = delimited;
        }
        const response = await this.publicGetPublicTicker (this.extend (request, params));
        //
        //     {
        //       "BTCUSDT": {
        //         "ask": "63049.06",
        //         "bid": "63046.41",
        //         "last": "63048.36",
        //         "low": "62010.00",
        //         "high": "66657.99",
        //         "open": "64839.75",
        //         "volume": "15272.13278",
        //         "volume_quote": "976312127.6277998",
        //         "timestamp": "2021-10-22T04:25:47.573Z"
        //       }
        //     }
        //
        const result = {};
        const keys = Object.keys (response);
        for (let i = 0; i < keys.length; i++) {
            const marketId = keys[i];
            const market = this.safeMarket (marketId);
            const symbol = market['symbol'];
            const entry = response[marketId];
            result[symbol] = this.parseTicker (entry, market);
        }
        return this.filterByArray (result, 'symbol', symbols);;
    }

    parseTicker (ticker, market = undefined) {
        //
        //     {
        //       "ask": "62756.01",
        //       "bid": "62754.09",
        //       "last": "62755.87",
        //       "low": "62010.00",
        //       "high": "66657.99",
        //       "open": "65089.27",
        //       "volume": "16719.50366",
        //       "volume_quote": "1063422878.8156828",
        //       "timestamp": "2021-10-22T07:29:14.585Z"
        //     }
        //
        const timestamp = this.parse8601 (ticker['timestamp']);
        const symbol = this.safeSymbol (undefined, market);
        const baseVolume = this.safeNumber (ticker, 'volume');
        const quoteVolume = this.safeNumber (ticker, 'volumeQuote');
        const open = this.safeNumber (ticker, 'open');
        const last = this.safeNumber (ticker, 'last');
        const vwap = this.vwap (baseVolume, quoteVolume);
        return this.safeTicker ({
            'symbol': symbol,
            'timestamp': timestamp,
            'datetime': this.iso8601 (timestamp),
            'high': this.safeNumber (ticker, 'high'),
            'low': this.safeNumber (ticker, 'low'),
            'bid': this.safeNumber (ticker, 'bid'),
            'bidVolume': undefined,
            'ask': this.safeNumber (ticker, 'ask'),
            'askVolume': undefined,
            'vwap': vwap,
            'open': open,
            'close': last,
            'last': last,
            'previousClose': undefined,
            'change': undefined,
            'percentage': undefined,
            'average': undefined,
            'baseVolume': baseVolume,
            'quoteVolume': quoteVolume,
            'info': ticker,
        }, market);
    }

    async fetchTrades (symbol, since = undefined, limit = undefined, params = {}) {
        await this.loadMarkets ();
        const market = this.market (symbol);
        const request = {
            'symbols': market['id'],
        };
        if (limit !== undefined) {
            request['limit'] = limit;
        }
        const response = await this.publicGetPublicTrades (this.extend (request, params));
        return response;
    }

    parseTrade (trade, market = undefined) {
        // createMarketOrder
        //
        //  {       fee: "0.0004644",
        //           id:  386394956,
        //        price: "0.4644",
        //     quantity: "1",
        //    timestamp: "2018-10-25T16:41:44.780Z" }
        //
        // fetchTrades
        //
        // { id: 974786185,
        //   price: '0.032462',
        //   quantity: '0.3673',
        //   side: 'buy',
        //   timestamp: '2020-10-16T12:57:39.846Z' }
        //
        // fetchMyTrades
        //
        // { id: 277210397,
        //   clientOrderId: '6e102f3e7f3f4e04aeeb1cdc95592f1a',
        //   orderId: 28102855393,
        //   symbol: 'ETHBTC',
        //   side: 'sell',
        //   quantity: '0.002',
        //   price: '0.073365',
        //   fee: '0.000000147',
        //   timestamp: '2018-04-28T18:39:55.345Z' }
        const timestamp = this.parse8601 (trade['timestamp']);
        const marketId = this.safeString (trade, 'symbol');
        market = this.safeMarket (marketId, market);
        const symbol = market['symbol'];
        let fee = undefined;
        const feeCost = this.safeNumber (trade, 'fee');
        if (feeCost !== undefined) {
            const feeCurrencyCode = market ? market['feeCurrency'] : undefined;
            fee = {
                'cost': feeCost,
                'currency': feeCurrencyCode,
            };
        }
        // we use clientOrderId as the order id with this exchange intentionally
        // because most of their endpoints will require clientOrderId
        // explained here: https://github.com/ccxt/ccxt/issues/5674
        const orderId = this.safeString (trade, 'clientOrderId');
        const priceString = this.safeString (trade, 'price');
        const amountString = this.safeString (trade, 'quantity');
        const price = this.parseNumber (priceString);
        const amount = this.parseNumber (amountString);
        const cost = this.parseNumber (Precise.stringMul (priceString, amountString));
        const side = this.safeString (trade, 'side');
        const id = this.safeString (trade, 'id');
        return {
            'info': trade,
            'id': id,
            'order': orderId,
            'timestamp': timestamp,
            'datetime': this.iso8601 (timestamp),
            'symbol': symbol,
            'type': undefined,
            'side': side,
            'takerOrMaker': undefined,
            'price': price,
            'amount': amount,
            'cost': cost,
            'fee': fee,
        };
    }

    sign (path, api = 'public', method = 'GET', params = {}, headers = undefined, body = undefined) {
        const query = this.omit (params, this.extractParams (path));
        let url = this.urls['api'][api] + '/' + this.implodeParams (path, params);
        let getRequest = undefined;
        const keys = Object.keys (query);
        const queryLength = keys.length;
        if (method === 'GET') {
            if (queryLength) {
                getRequest = '?' + this.urlencode (query);
                url = url + getRequest;
            }
        } else {
            body = this.json (params);
        }
        if (api === 'private') {
            this.checkRequiredCredentials ();
            const timestamp = this.milliseconds ().toString ();
            const payload = [ method, '/api/3/' + path ];
            if (method === 'GET') {
                if (getRequest !== undefined) {
                    payload.push (getRequest);
                }
            } else {
                payload.push (body);
            }
            payload.push (timestamp);
            const payloadString = payload.join ('');
            const signature = this.hmac (this.encode (payloadString), this.encode (this.secret), 'sha256', 'hex');
            const secondPayload = this.apiKey + ':' + signature + ':' + timestamp;
            const encoded = this.stringToBase64 (secondPayload);
            headers = {
                'Authorization': 'HS256 ' + encoded,
            };
        }
        return { 'url': url, 'method': method, 'body': body, 'headers': headers };
    }
};
