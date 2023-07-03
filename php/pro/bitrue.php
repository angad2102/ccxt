<?php

namespace ccxt\pro;

// PLEASE DO NOT EDIT THIS FILE, IT IS GENERATED AND WILL BE OVERWRITTEN:
// https://github.com/ccxt/ccxt/blob/master/CONTRIBUTING.md#how-to-contribute-code

use Exception; // a common import
use ccxt\ArgumentsRequired;
use React\Async;

class bitrue extends \ccxt\async\bitrue {

    public function describe() {
        return $this->deep_extend(parent::describe(), array(
            'has' => array(
                'ws' => true,
                'watchBalance' => true,
                'watchTicker' => false,
                'watchTickers' => false,
                'watchTrades' => false,
                'watchMyTrades' => false,
                'watchOrders' => true,
                'watchOrderBook' => true,
                'watchOHLCV' => false,
            ),
            'urls' => array(
                'api' => array(
                    'open' => 'https://open.bitrue.com',
                    'ws' => array(
                        'public' => 'wss://ws.bitrue.com/market/ws',
                        'private' => 'wss://wsapi.bitrue.com',
                    ),
                ),
            ),
            'api' => array(
                'open' => array(
                    'private' => array(
                        'post' => array(
                            'poseidon/api/v1/listenKey' => 1,
                        ),
                        'put' => array(
                            'poseidon/api/v1/listenKey/{listenKey}' => 1,
                        ),
                        'delete' => array(
                            'poseidon/api/v1/listenKey/{listenKey}' => 1,
                        ),
                    ),
                ),
            ),
            'options' => array(
                'listenKeyRefreshRate' => 1800000, // 30 mins
                'ws' => array(
                    'gunzip' => true,
                ),
            ),
        ));
    }

    public function watch_balance($params = array ()) {
        return Async\async(function () use ($params) {
            /**
             * query for balance and get the amount of funds available for trading or funds locked in orders
             * @see https://github.com/Bitrue-exchange/Spot-official-api-docs#balance-update
             * @param {array} $params extra parameters specific to the bitrue api endpoint
             * @return {array} a ~@link https://docs.ccxt.com/en/latest/manual.html?#balance-structure balance structure~
             */
            $url = Async\await($this->authenticate());
            $messageHash = 'balance';
            $message = array(
                'event' => 'sub',
                'params' => array(
                    'channel' => 'user_balance_update',
                ),
            );
            $request = $this->deep_extend($message, $params);
            return Async\await($this->watch($url, $messageHash, $request, $messageHash));
        }) ();
    }

    public function handle_balance(Client $client, $message) {
        //
        //     {
        //         e => 'BALANCE',
        //         x => 'OutboundAccountPositionTradeEvent',
        //         E => 1657799510175,
        //         I => '302274978401288200',
        //         i => 1657799510175,
        //         B => [array(
        //                 a => 'btc',
        //                 F => '0.0006000000000000',
        //                 T => 1657799510000,
        //                 f => '0.0006000000000000',
        //                 t => 0
        //             ),
        //             {
        //                 a => 'usdt',
        //                 T => 0,
        //                 L => '0.0000000000000000',
        //                 l => '-11.8705317318000000',
        //                 t => 1657799510000
        //             }
        //         ],
        //         u => 1814396
        //     }
        //
        //     {
        //      e => 'BALANCE',
        //      x => 'OutboundAccountPositionOrderEvent',
        //      E => 1670051332478,
        //      I => '353662845694083072',
        //      i => 1670051332478,
        //      B => array(
        //        {
        //          a => 'eth',
        //          F => '0.0400000000000000',
        //          T => 1670051332000,
        //          f => '-0.0100000000000000',
        //          L => '0.0100000000000000',
        //          l => '0.0100000000000000',
        //          t => 1670051332000
        //        }
        //      ),
        //      u => 2285311
        //    }
        //
        $balances = $this->safe_value($message, 'B', array());
        $this->parse_ws_balances($balances);
        $messageHash = 'balance';
        $client->resolve ($this->balance, $messageHash);
    }

    public function parse_ws_balances($balances) {
        //
        //    [array(
        //         a => 'btc',
        //         F => '0.0006000000000000',
        //         T => 1657799510000,
        //         f => '0.0006000000000000',
        //         t => 0
        //     ),
        //     array(
        //         a => 'usdt',
        //         T => 0,
        //         L => '0.0000000000000000',
        //         l => '-11.8705317318000000',
        //         t => 1657799510000
        //     )]
        //
        $this->balance['info'] = $balances;
        for ($i = 0; $i < count($balances); $i++) {
            $balance = $balances[$i];
            $currencyId = $this->safe_string($balance, 'a');
            $code = $this->safe_currency_code($currencyId);
            $account = $this->account();
            $free = $this->safe_string($balance, 'F');
            $used = $this->safe_string($balance, 'L');
            $balanceUpdateTime = $this->safe_integer($balance, 'T', 0);
            $lockBalanceUpdateTime = $this->safe_integer($balance, 't', 0);
            $updateFree = $balanceUpdateTime !== 0;
            $updateUsed = $lockBalanceUpdateTime !== 0;
            if ($updateFree || $updateUsed) {
                if ($updateFree) {
                    $account['free'] = $free;
                }
                if ($updateUsed) {
                    $account['used'] = $used;
                }
                $this->balance[$code] = $account;
            }
        }
        $this->balance = $this->safe_balance($this->balance);
    }

    public function watch_orders(?string $symbol = null, ?int $since = null, ?int $limit = null, $params = array ()) {
        return Async\async(function () use ($symbol, $since, $limit, $params) {
            /**
             * watches information on user $orders
             * @see https://github.com/Bitrue-exchange/Spot-official-api-docs#order-update
             * @param {string[]} symbols unified symbols of the $market to watch the $orders for
             * @param {int|null} $since timestamp in ms of the earliest order
             * @param {int|null} $limit the maximum amount of $orders to return
             * @param {array} $params extra parameters specific to the bitrue api endpoint
             * @return {array} A dictionary of ~@link https://docs.ccxt.com/#/?id=order-structure order structure~ indexed by $market symbols
             */
            Async\await($this->load_markets());
            if ($symbol !== null) {
                $market = $this->market($symbol);
                $symbol = $market['symbol'];
            }
            $url = Async\await($this->authenticate());
            $messageHash = 'orders';
            $message = array(
                'event' => 'sub',
                'params' => array(
                    'channel' => 'user_order_update',
                ),
            );
            $request = $this->deep_extend($message, $params);
            $orders = Async\await($this->watch($url, $messageHash, $request, $messageHash));
            if ($this->newUpdates) {
                $limit = $orders->getLimit ($symbol, $limit);
            }
            return $this->filter_by_symbol_since_limit($orders, $symbol, $since, $limit);
        }) ();
    }

    public function handle_order(Client $client, $message) {
        //
        //    {
        //        e => 'ORDER',
        //        i => 16122802798,
        //        E => 1657882521876,
        //        I => '302623154710888464',
        //        u => 1814396,
        //        s => 'btcusdt',
        //        S => 2,
        //        o => 1,
        //        q => '0.0005',
        //        p => '60000',
        //        X => 0,
        //        x => 1,
        //        z => '0',
        //        n => '0',
        //        N => 'usdt',
        //        O => 1657882521876,
        //        L => '0',
        //        l => '0',
        //        Y => '0'
        //    }
        //
        $parsed = $this->parse_ws_order($message);
        if ($this->orders === null) {
            $limit = $this->safe_integer($this->options, 'ordersLimit', 1000);
            $this->orders = new ArrayCacheBySymbolById ($limit);
        }
        $orders = $this->orders;
        $orders->append ($parsed);
        $messageHash = 'orders';
        $client->resolve ($this->orders, $messageHash);
    }

    public function parse_ws_order($order, $market = null) {
        //
        //    {
        //        e => 'ORDER',
        //        i => 16122802798,
        //        E => 1657882521876,
        //        I => '302623154710888464',
        //        u => 1814396,
        //        s => 'btcusdt',
        //        S => 2,
        //        o => 1,
        //        q => '0.0005',
        //        p => '60000',
        //        X => 0,
        //        x => 1,
        //        z => '0',
        //        n => '0',
        //        N => 'usdt',
        //        O => 1657882521876,
        //        L => '0',
        //        l => '0',
        //        Y => '0'
        //    }
        //
        $timestamp = $this->safe_integer($order, 'E');
        $marketId = $this->safe_string_upper($order, 's');
        $typeId = $this->safe_string($order, 'o');
        $sideId = $this->safe_integer($order, 'S');
        // 1 => buy
        // 2 => sell
        $side = ($sideId === 1) ? 'buy' : 'sell';
        $statusId = $this->safe_string($order, 'X');
        $feeCurrencyId = $this->safe_string($order, 'N');
        return $this->safe_order(array(
            'info' => $order,
            'id' => $this->safe_string($order, 'i'),
            'clientOrderId' => $this->safe_string($order, 'c'),
            'timestamp' => $timestamp,
            'datetime' => $this->iso8601($timestamp),
            'lastTradeTimestamp' => $this->safe_integer($order, 'T'),
            'symbol' => $this->safe_symbol($marketId, $market),
            'type' => $this->parse_ws_order_type($typeId),
            'timeInForce' => null,
            'postOnly' => null,
            'side' => $side,
            'price' => $this->safe_string($order, 'p'),
            'triggerPrice' => null,
            'amount' => $this->safe_string($order, 'q'),
            'cost' => $this->safe_string($order, 'Y'),
            'average' => null,
            'filled' => $this->safe_string($order, 'z'),
            'remaining' => null,
            'status' => $this->parse_ws_order_status($statusId),
            'fee' => array(
                'currency' => $this->safe_currency_code($feeCurrencyId),
                'cost' => $this->safe_number($order, 'n'),
            ),
        ), $market);
    }

    public function watch_order_book(string $symbol, ?int $limit = null, $params = array ()) {
        return Async\async(function () use ($symbol, $limit, $params) {
            if ($symbol === null) {
                throw new ArgumentsRequired($this->id . ' watchOrderBook() requires a $symbol argument');
            }
            Async\await($this->load_markets());
            $market = $this->market($symbol);
            $symbol = $market['symbol'];
            $messageHash = 'orderbook:' . $symbol;
            $marketIdLowercase = strtolower($market['id']);
            $channel = 'market_' . $marketIdLowercase . '_simple_depth_step0';
            $url = $this->urls['api']['ws']['public'];
            $message = array(
                'event' => 'sub',
                'params' => array(
                    'cb_id' => $marketIdLowercase,
                    'channel' => $channel,
                ),
            );
            $request = $this->deep_extend($message, $params);
            return Async\await($this->watch($url, $messageHash, $request, $messageHash));
        }) ();
    }

    public function handle_order_book(Client $client, $message) {
        //
        //     {
        //         "channel" => "market_ethbtc_simple_depth_step0",
        //         "ts" => 1670056708670,
        //         "tick" => {
        //             "buys" => array(
        //                 array(
        //                     "0.075170",
        //                     "67.153"
        //                 ),
        //                 array(
        //                     "0.075169",
        //                     "17.195"
        //                 ),
        //                 array(
        //                     "0.075166",
        //                     "29.788"
        //                 ),
        //             )
        //              "asks" => array(
        //                 array(
        //                     "0.075171",
        //                     "0.256"
        //                 ),
        //                 array(
        //                     "0.075172",
        //                     "0.160"
        //                 ),
        //             )
        //         }
        //     }
        //
        $channel = $this->safe_string($message, 'channel');
        $parts = explode('_', $channel);
        $marketId = $this->safe_string_upper($parts, 1);
        $market = $this->safe_market($marketId);
        $symbol = $market['symbol'];
        $timestamp = $this->safe_integer($message, 'ts');
        $tick = $this->safe_value($message, 'tick', array());
        $orderbook = $this->parse_order_book($tick, $symbol, $timestamp, 'buys', 'asks');
        $this->orderbooks[$symbol] = $orderbook;
        $messageHash = 'orderbook:' . $symbol;
        $client->resolve ($orderbook, $messageHash);
    }

    public function parse_ws_order_type($typeId) {
        $types = array(
            '1' => 'limit',
            '2' => 'market',
            '3' => 'limit',
        );
        return $this->safe_string($types, $typeId, $typeId);
    }

    public function parse_ws_order_status($status) {
        $statuses = array(
            '0' => 'open', // The order has not been accepted by the engine.
            '1' => 'open', // The order has been accepted by the engine.
            '2' => 'closed', // The order has been completed.
            '3' => 'open', // A part of the order has been filled.
            '4' => 'canceled', // The order has been canceled.
            '7' => 'open', // Stop order placed.
        );
        return $this->safe_string($statuses, $status, $status);
    }

    public function handle_ping(Client $client, $message) {
        $this->spawn(array($this, 'pong'), $client, $message);
    }

    public function pong($client, $message) {
        return Async\async(function () use ($client, $message) {
            //
            //     {
            //         "ping" => 1670057540627
            //     }
            //
            $time = $this->safe_integer($message, 'ping');
            $pong = array(
                'pong' => $time,
            );
            Async\await($client->send ($pong));
        }) ();
    }

    public function handle_message(Client $client, $message) {
        if (is_array($message) && array_key_exists('channel', $message)) {
            $this->handle_order_book($client, $message);
        } elseif (is_array($message) && array_key_exists('ping', $message)) {
            $this->handle_ping($client, $message);
        } else {
            $event = $this->safe_string($message, 'e');
            $handlers = array(
                'BALANCE' => array($this, 'handle_balance'),
                'ORDER' => array($this, 'handle_order'),
            );
            $handler = $this->safe_value($handlers, $event);
            if ($handler !== null) {
                $handler($client, $message);
            }
        }
    }

    public function authenticate($params = array ()) {
        return Async\async(function () use ($params) {
            $listenKey = $this->safe_value($this->options, 'listenKey');
            if ($listenKey === null) {
                $response = null;
                try {
                    $response = Async\await($this->openPrivatePostPoseidonApiV1ListenKey ($params));
                } catch (Exception $error) {
                    $this->options['listenKey'] = null;
                    $this->options['listenKeyUrl'] = null;
                    return;
                }
                //
                //     {
                //         "msg" => "succ",
                //         "code" => 200,
                //         "data" => {
                //             "listenKey" => "7d1ec51340f499d85bb33b00a96ef680bda28869d5c3374a444c5ca4847d1bf0"
                //         }
                //     }
                //
                $data = $this->safe_value($response, 'data', array());
                $key = $this->safe_string($data, 'listenKey');
                $this->options['listenKey'] = $key;
                $this->options['listenKeyUrl'] = $this->urls['api']['ws']['private'] . '/stream?$listenKey=' . $key;
                $refreshTimeout = $this->safe_integer($this->options, 'listenKeyRefreshRate', 1800000);
                $this->delay($refreshTimeout, array($this, 'keep_alive_listen_key'));
            }
            return $this->options['listenKeyUrl'];
        }) ();
    }

    public function keep_alive_listen_key($params = array ()) {
        return Async\async(function () use ($params) {
            $listenKey = $this->safe_string($this->options, 'listenKey');
            $request = array(
                'listenKey' => $listenKey,
            );
            try {
                Async\await($this->openPrivatePutPoseidonApiV1ListenKeyListenKey (array_merge($request, $params)));
                //
                // ಠ_ಠ
                //     {
                //         "msg" => "succ",
                //         "code" => "200"
                //     }
                //
            } catch (Exception $error) {
                $this->options['listenKey'] = null;
                $this->options['listenKeyUrl'] = null;
                return;
            }
            $refreshTimeout = $this->safe_integer($this->options, 'listenKeyRefreshRate', 1800000);
            $this->delay($refreshTimeout, array($this, 'keep_alive_listen_key'));
        }) ();
    }
}
