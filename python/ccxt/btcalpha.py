# -*- coding: utf-8 -*-

# PLEASE DO NOT EDIT THIS FILE, IT IS GENERATED AND WILL BE OVERWRITTEN:
# https://github.com/ccxt/ccxt/blob/master/CONTRIBUTING.md#how-to-contribute-code

from ccxt.base.exchange import Exchange
from ccxt.base.errors import ExchangeError
from ccxt.base.errors import AuthenticationError
from ccxt.base.errors import InsufficientFunds
from ccxt.base.errors import InvalidOrder
from ccxt.base.errors import DDoSProtection
from ccxt.base.precise import Precise


class btcalpha(Exchange):

    def describe(self):
        return self.deep_extend(super(btcalpha, self).describe(), {
            'id': 'btcalpha',
            'name': 'BTC-Alpha',
            'countries': ['US'],
            'version': 'v1',
            'has': {
                'CORS': None,
                'spot': True,
                'margin': False,
                'swap': False,
                'future': False,
                'option': False,
                'addMargin': False,
                'cancelOrder': True,
                'createOrder': True,
                'createReduceOnlyOrder': False,
                'fetchBalance': True,
                'fetchBorrowRate': False,
                'fetchBorrowRateHistories': False,
                'fetchBorrowRateHistory': False,
                'fetchBorrowRates': False,
                'fetchBorrowRatesPerSymbol': False,
                'fetchClosedOrders': True,
                'fetchDeposit': False,
                'fetchDeposits': True,
                'fetchFundingHistory': False,
                'fetchFundingRate': False,
                'fetchFundingRateHistory': False,
                'fetchFundingRates': False,
                'fetchIndexOHLCV': False,
                'fetchLeverage': False,
                'fetchMarkets': True,
                'fetchMarkOHLCV': False,
                'fetchMyTrades': True,
                'fetchOHLCV': True,
                'fetchOpenInterestHistory': False,
                'fetchOpenOrders': True,
                'fetchOrder': True,
                'fetchOrderBook': True,
                'fetchOrders': True,
                'fetchPosition': False,
                'fetchPositions': False,
                'fetchPositionsRisk': False,
                'fetchPremiumIndexOHLCV': False,
                'fetchTicker': None,
                'fetchTrades': True,
                'fetchTradingFee': False,
                'fetchTradingFees': False,
                'fetchTransfer': False,
                'fetchTransfers': False,
                'fetchWithdrawal': False,
                'fetchWithdrawals': True,
                'reduceMargin': False,
                'setLeverage': False,
                'setMarginMode': False,
                'setPositionMode': False,
                'transfer': False,
                'withdraw': False,
            },
            'timeframes': {
                '1m': '1',
                '5m': '5',
                '15m': '15',
                '30m': '30',
                '1h': '60',
                '4h': '240',
                '1d': 'D',
            },
            'urls': {
                'logo': 'https://user-images.githubusercontent.com/1294454/42625213-dabaa5da-85cf-11e8-8f99-aa8f8f7699f0.jpg',
                'api': 'https://btc-alpha.com/api',
                'www': 'https://btc-alpha.com',
                'doc': 'https://btc-alpha.github.io/api-docs',
                'fees': 'https://btc-alpha.com/fees/',
                'referral': 'https://btc-alpha.com/?r=123788',
            },
            'api': {
                'public': {
                    'get': [
                        'currencies/',
                        'pairs/',
                        'orderbook/{pair_name}/',
                        'exchanges/',
                        'charts/{pair}/{type}/chart/',
                    ],
                },
                'private': {
                    'get': [
                        'wallets/',
                        'orders/own/',
                        'order/{id}/',
                        'exchanges/own/',
                        'deposits/',
                        'withdraws/',
                    ],
                    'post': [
                        'order/',
                        'order-cancel/',
                    ],
                },
            },
            'fees': {
                'trading': {
                    'maker': self.parse_number('0.002'),
                    'taker': self.parse_number('0.002'),
                },
                'funding': {
                    'withdraw': {},
                },
            },
            'commonCurrencies': {
                'CBC': 'Cashbery',
            },
            'exceptions': {
                'exact': {},
                'broad': {
                    'Out of balance': InsufficientFunds,  # {"date":1570599531.4814300537,"error":"Out of balance -9.99243661 BTC"}
                },
            },
        })

    def fetch_markets(self, params={}):
        """
        retrieves data on all markets for btcalpha
        :param dict params: extra parameters specific to the exchange api endpoint
        :returns [dict]: an array of objects representing market data
        """
        response = self.publicGetPairs(params)
        #
        #    [
        #        {
        #            "name": "1INCH_USDT",
        #            "currency1": "1INCH",
        #            "currency2": "USDT",
        #            "price_precision": 4,
        #            "amount_precision": 2,
        #            "minimum_order_size": "0.01000000",
        #            "maximum_order_size": "900000.00000000",
        #            "minimum_order_value": "10.00000000",
        #            "liquidity_type": 10
        #        },
        #    ]
        #
        result = []
        for i in range(0, len(response)):
            market = response[i]
            id = self.safe_string(market, 'name')
            baseId = self.safe_string(market, 'currency1')
            quoteId = self.safe_string(market, 'currency2')
            base = self.safe_currency_code(baseId)
            quote = self.safe_currency_code(quoteId)
            pricePrecision = self.safe_string(market, 'price_precision')
            priceLimit = self.parse_precision(pricePrecision)
            amountLimit = self.safe_string(market, 'minimum_order_size')
            result.append({
                'id': id,
                'symbol': base + '/' + quote,
                'base': base,
                'quote': quote,
                'settle': None,
                'baseId': baseId,
                'quoteId': quoteId,
                'settleId': None,
                'type': 'spot',
                'spot': True,
                'margin': False,
                'swap': False,
                'future': False,
                'option': False,
                'active': True,
                'contract': False,
                'linear': None,
                'inverse': None,
                'contractSize': None,
                'expiry': None,
                'expiryDatetime': None,
                'strike': None,
                'optionType': None,
                'precision': {
                    'amount': int('8'),
                    'price': int(pricePrecision),
                },
                'limits': {
                    'leverage': {
                        'min': None,
                        'max': None,
                    },
                    'amount': {
                        'min': self.parse_number(amountLimit),
                        'max': self.safe_number(market, 'maximum_order_size'),
                    },
                    'price': {
                        'min': self.parse_number(priceLimit),
                        'max': None,
                    },
                    'cost': {
                        'min': self.parse_number(Precise.string_mul(priceLimit, amountLimit)),
                        'max': None,
                    },
                },
                'info': market,
            })
        return result

    def fetch_order_book(self, symbol, limit=None, params={}):
        """
        fetches information on open orders with bid(buy) and ask(sell) prices, volumes and other data
        :param str symbol: unified symbol of the market to fetch the order book for
        :param int|None limit: the maximum amount of order book entries to return
        :param dict params: extra parameters specific to the btcalpha api endpoint
        :returns dict: A dictionary of `order book structures <https://docs.ccxt.com/en/latest/manual.html#order-book-structure>` indexed by market symbols
        """
        self.load_markets()
        request = {
            'pair_name': self.market_id(symbol),
        }
        if limit:
            request['limit_sell'] = limit
            request['limit_buy'] = limit
        response = self.publicGetOrderbookPairName(self.extend(request, params))
        return self.parse_order_book(response, symbol, None, 'buy', 'sell', 'price', 'amount')

    def parse_bids_asks(self, bidasks, priceKey=0, amountKey=1):
        result = []
        for i in range(0, len(bidasks)):
            bidask = bidasks[i]
            if bidask:
                result.append(self.parse_bid_ask(bidask, priceKey, amountKey))
        return result

    def parse_trade(self, trade, market=None):
        #
        # fetchTrades(public)
        #
        #      {
        #          "id": "202203440",
        #          "timestamp": "1637856276.264215",
        #          "pair": "AAVE_USDT",
        #          "price": "320.79900000",
        #          "amount": "0.05000000",
        #          "type": "buy"
        #      }
        #
        # fetchMyTrades(private)
        #
        #      {
        #          "id": "202203440",
        #          "timestamp": "1637856276.264215",
        #          "pair": "AAVE_USDT",
        #          "price": "320.79900000",
        #          "amount": "0.05000000",
        #          "type": "buy",
        #          "my_side": "buy"
        #      }
        #
        marketId = self.safe_string(trade, 'pair')
        market = self.safe_market(marketId, market, '_')
        timestamp = self.safe_timestamp(trade, 'timestamp')
        priceString = self.safe_string(trade, 'price')
        amountString = self.safe_string(trade, 'amount')
        id = self.safe_string(trade, 'id')
        side = self.safe_string_2(trade, 'my_side', 'type')
        return self.safe_trade({
            'id': id,
            'info': trade,
            'timestamp': timestamp,
            'datetime': self.iso8601(timestamp),
            'symbol': market['symbol'],
            'order': id,
            'type': 'limit',
            'side': side,
            'takerOrMaker': None,
            'price': priceString,
            'amount': amountString,
            'cost': None,
            'fee': None,
        }, market)

    def fetch_trades(self, symbol, since=None, limit=None, params={}):
        """
        get the list of most recent trades for a particular symbol
        :param str symbol: unified symbol of the market to fetch trades for
        :param int|None since: timestamp in ms of the earliest trade to fetch
        :param int|None limit: the maximum amount of trades to fetch
        :param dict params: extra parameters specific to the btcalpha api endpoint
        :returns [dict]: a list of `trade structures <https://docs.ccxt.com/en/latest/manual.html?#public-trades>`
        """
        self.load_markets()
        market = None
        request = {}
        if symbol is not None:
            market = self.market(symbol)
            request['pair'] = market['id']
        if limit is not None:
            request['limit'] = limit
        trades = self.publicGetExchanges(self.extend(request, params))
        return self.parse_trades(trades, market, since, limit)

    def fetch_deposits(self, code=None, since=None, limit=None, params={}):
        self.load_markets()
        response = self.privateGetDeposits(params)
        #
        #     [
        #         {
        #             "timestamp": 1485363039.18359,
        #             "id": 317,
        #             "currency": "BTC",
        #             "amount": 530.00000000
        #         }
        #     ]
        #
        return self.parse_transactions(response, code, since, limit, {'type': 'deposit'})

    def fetch_withdrawals(self, code=None, since=None, limit=None, params={}):
        self.load_markets()
        currency = None
        request = {}
        if code is not None:
            currency = self.currency(code)
            request['currency_id'] = currency['id']
        response = self.privateGetWithdraws(self.extend(request, params))
        #
        #     [
        #         {
        #             "id": 403,
        #             "timestamp": 1485363466.868539,
        #             "currency": "BTC",
        #             "amount": 0.53000000,
        #             "status": 20
        #         }
        #     ]
        #
        return self.parse_transactions(response, code, since, limit, {'type': 'withdrawal'})

    def parse_transaction(self, transaction, currency=None):
        #
        #  deposit
        #      {
        #          "timestamp": 1485363039.18359,
        #          "id": 317,
        #          "currency": "BTC",
        #          "amount": 530.00000000
        #      }
        #
        #  withdrawal
        #      {
        #          "id": 403,
        #          "timestamp": 1485363466.868539,
        #          "currency": "BTC",
        #          "amount": 0.53000000,
        #          "status": 20
        #      }
        #
        timestamp = self.safe_string(transaction, 'timestamp')
        timestamp = Precise.string_mul(timestamp, '1000')
        currencyId = self.safe_string(transaction, 'currency')
        statusId = self.safe_string(transaction, 'status')
        return {
            'id': self.safe_string(transaction, 'id'),
            'info': transaction,
            'timestamp': self.parse_number(timestamp),
            'datetime': self.iso8601(timestamp),
            'network': None,
            'address': None,
            'addressTo': None,
            'addressFrom': None,
            'tag': None,
            'tagTo': None,
            'tagFrom': None,
            'currency': self.safe_currency_code(currencyId, currency),
            'amount': self.safe_number(transaction, 'amount'),
            'txid': None,
            'type': None,
            'status': self.parse_transaction_status(statusId),
            'comment': None,
            'fee': None,
            'updated': None,
        }

    def parse_transaction_status(self, status):
        statuses = {
            '10': 'pending',  # New
            '20': 'pending',  # Verified, waiting for approving
            '30': 'ok',       # Approved by moderator
            '40': 'failed',   # Refused by moderator. See your email for more details
            '50': 'canceled',  # Cancelled by user
        }
        return self.safe_string(statuses, status, status)

    def parse_ohlcv(self, ohlcv, market=None):
        #
        #     {
        #         "time":1591296000,
        #         "open":0.024746,
        #         "close":0.024728,
        #         "low":0.024728,
        #         "high":0.024753,
        #         "volume":16.624
        #     }
        #
        return [
            self.safe_timestamp(ohlcv, 'time'),
            self.safe_number(ohlcv, 'open'),
            self.safe_number(ohlcv, 'high'),
            self.safe_number(ohlcv, 'low'),
            self.safe_number(ohlcv, 'close'),
            self.safe_number(ohlcv, 'volume'),
        ]

    def fetch_ohlcv(self, symbol, timeframe='5m', since=None, limit=None, params={}):
        """
        fetches historical candlestick data containing the open, high, low, and close price, and the volume of a market
        :param str symbol: unified symbol of the market to fetch OHLCV data for
        :param str timeframe: the length of time each candle represents
        :param int|None since: timestamp in ms of the earliest candle to fetch
        :param int|None limit: the maximum amount of candles to fetch
        :param dict params: extra parameters specific to the btcalpha api endpoint
        :returns [[int]]: A list of candles ordered as timestamp, open, high, low, close, volume
        """
        self.load_markets()
        market = self.market(symbol)
        request = {
            'pair': market['id'],
            'type': self.timeframes[timeframe],
        }
        if limit is not None:
            request['limit'] = limit
        if since is not None:
            request['since'] = int(since / 1000)
        response = self.publicGetChartsPairTypeChart(self.extend(request, params))
        #
        #     [
        #         {"time":1591296000,"open":0.024746,"close":0.024728,"low":0.024728,"high":0.024753,"volume":16.624},
        #         {"time":1591295700,"open":0.024718,"close":0.02475,"low":0.024711,"high":0.02475,"volume":31.645},
        #         {"time":1591295400,"open":0.024721,"close":0.024717,"low":0.024711,"high":0.02473,"volume":65.071}
        #     ]
        #
        return self.parse_ohlcvs(response, market, timeframe, since, limit)

    def parse_balance(self, response):
        result = {'info': response}
        for i in range(0, len(response)):
            balance = response[i]
            currencyId = self.safe_string(balance, 'currency')
            code = self.safe_currency_code(currencyId)
            account = self.account()
            account['used'] = self.safe_string(balance, 'reserve')
            account['total'] = self.safe_string(balance, 'balance')
            result[code] = account
        return self.safe_balance(result)

    def fetch_balance(self, params={}):
        """
        query for balance and get the amount of funds available for trading or funds locked in orders
        :param dict params: extra parameters specific to the btcalpha api endpoint
        :returns dict: a `balance structure <https://docs.ccxt.com/en/latest/manual.html?#balance-structure>`
        """
        self.load_markets()
        response = self.privateGetWallets(params)
        return self.parse_balance(response)

    def parse_order_status(self, status):
        statuses = {
            '1': 'open',
            '2': 'canceled',
            '3': 'closed',
        }
        return self.safe_string(statuses, status, status)

    def parse_order(self, order, market=None):
        #
        # fetchClosedOrders / fetchOrder
        #     {
        #       "id": "923763073",
        #       "date": "1635451090368",
        #       "type": "sell",
        #       "pair": "XRP_USDT",
        #       "price": "1.00000000",
        #       "amount": "0.00000000",
        #       "status": "3",
        #       "amount_filled": "10.00000000",
        #       "amount_original": "10.0"
        #       "trades": [],
        #     }
        #
        # createOrder
        #     {
        #       "success": True,
        #       "date": "1635451754.497541",
        #       "type": "sell",
        #       "oid": "923776755",
        #       "price": "1.0",
        #       "amount": "10.0",
        #       "amount_filled": "0.0",
        #       "amount_original": "10.0",
        #       "trades": []
        #     }
        #
        marketId = self.safe_string(order, 'pair')
        market = self.safe_market(marketId, market, '_')
        symbol = market['symbol']
        success = self.safe_value(order, 'success', False)
        timestamp = None
        if success:
            timestamp = self.safe_timestamp(order, 'date')
        else:
            timestamp = self.safe_integer(order, 'date')
        price = self.safe_string(order, 'price')
        remaining = self.safe_string(order, 'amount')
        filled = self.safe_string(order, 'amount_filled')
        amount = self.safe_string(order, 'amount_original')
        status = self.parse_order_status(self.safe_string(order, 'status'))
        id = self.safe_string_2(order, 'oid', 'id')
        trades = self.safe_value(order, 'trades')
        side = self.safe_string_2(order, 'my_side', 'type')
        return self.safe_order({
            'id': id,
            'clientOrderId': None,
            'datetime': self.iso8601(timestamp),
            'timestamp': timestamp,
            'status': status,
            'symbol': symbol,
            'type': 'limit',
            'timeInForce': None,
            'postOnly': None,
            'side': side,
            'price': price,
            'stopPrice': None,
            'cost': None,
            'amount': amount,
            'filled': filled,
            'remaining': remaining,
            'trades': trades,
            'fee': None,
            'info': order,
            'lastTradeTimestamp': None,
            'average': None,
        }, market)

    def create_order(self, symbol, type, side, amount, price=None, params={}):
        """
        create a trade order
        :param str symbol: unified symbol of the market to create an order in
        :param str type: 'market' or 'limit'
        :param str side: 'buy' or 'sell'
        :param float amount: how much of currency you want to trade in units of base currency
        :param float price: the price at which the order is to be fullfilled, in units of the quote currency, ignored in market orders
        :param dict params: extra parameters specific to the btcalpha api endpoint
        :returns dict: an `order structure <https://docs.ccxt.com/en/latest/manual.html#order-structure>`
        """
        self.load_markets()
        market = self.market(symbol)
        request = {
            'pair': market['id'],
            'type': side,
            'amount': amount,
            'price': self.price_to_precision(symbol, price),
        }
        response = self.privatePostOrder(self.extend(request, params))
        if not response['success']:
            raise InvalidOrder(self.id + ' ' + self.json(response))
        order = self.parse_order(response, market)
        amount = order['amount'] if (order['amount'] > 0) else amount
        return self.extend(order, {
            'amount': amount,
        })

    def cancel_order(self, id, symbol=None, params={}):
        request = {
            'order': id,
        }
        response = self.privatePostOrderCancel(self.extend(request, params))
        return response

    def fetch_order(self, id, symbol=None, params={}):
        self.load_markets()
        request = {
            'id': id,
        }
        order = self.privateGetOrderId(self.extend(request, params))
        return self.parse_order(order)

    def fetch_orders(self, symbol=None, since=None, limit=None, params={}):
        self.load_markets()
        request = {}
        market = None
        if symbol is not None:
            market = self.market(symbol)
            request['pair'] = market['id']
        if limit is not None:
            request['limit'] = limit
        orders = self.privateGetOrdersOwn(self.extend(request, params))
        return self.parse_orders(orders, market, since, limit)

    def fetch_open_orders(self, symbol=None, since=None, limit=None, params={}):
        request = {
            'status': '1',
        }
        return self.fetch_orders(symbol, since, limit, self.extend(request, params))

    def fetch_closed_orders(self, symbol=None, since=None, limit=None, params={}):
        request = {
            'status': '3',
        }
        return self.fetch_orders(symbol, since, limit, self.extend(request, params))

    def fetch_my_trades(self, symbol=None, since=None, limit=None, params={}):
        self.load_markets()
        request = {}
        if symbol is not None:
            market = self.market(symbol)
            request['pair'] = market['id']
        if limit is not None:
            request['limit'] = limit
        trades = self.privateGetExchangesOwn(self.extend(request, params))
        return self.parse_trades(trades, None, since, limit)

    def nonce(self):
        return self.milliseconds()

    def sign(self, path, api='public', method='GET', params={}, headers=None, body=None):
        query = self.urlencode(self.keysort(self.omit(params, self.extract_params(path))))
        url = self.urls['api'] + '/'
        if path != 'charts/{pair}/{type}/chart/':
            url += 'v1/'
        url += self.implode_params(path, params)
        headers = {'Accept': 'application/json'}
        if api == 'public':
            if len(query):
                url += '?' + query
        else:
            self.check_required_credentials()
            payload = self.apiKey
            if method == 'POST':
                headers['Content-Type'] = 'application/x-www-form-urlencoded'
                body = query
                payload += body
            elif len(query):
                url += '?' + query
            headers['X-KEY'] = self.apiKey
            headers['X-SIGN'] = self.hmac(self.encode(payload), self.encode(self.secret))
            headers['X-NONCE'] = str(self.nonce())
        return {'url': url, 'method': method, 'body': body, 'headers': headers}

    def handle_errors(self, code, reason, url, method, headers, body, response, requestHeaders, requestBody):
        if response is None:
            return  # fallback to default error handler
        #
        #     {"date":1570599531.4814300537,"error":"Out of balance -9.99243661 BTC"}
        #
        error = self.safe_string(response, 'error')
        feedback = self.id + ' ' + body
        if error is not None:
            self.throw_exactly_matched_exception(self.exceptions['exact'], error, feedback)
            self.throw_broadly_matched_exception(self.exceptions['broad'], error, feedback)
        if code == 401 or code == 403:
            raise AuthenticationError(feedback)
        elif code == 429:
            raise DDoSProtection(feedback)
        if code < 400:
            return
        raise ExchangeError(feedback)
