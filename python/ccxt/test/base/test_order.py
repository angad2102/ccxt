import os
import sys

root = os.path.dirname(os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))))
sys.path.append(root)

# ----------------------------------------------------------------------------

# PLEASE DO NOT EDIT THIS FILE, IT IS GENERATED AND WILL BE OVERWRITTEN:
# https://github.com/ccxt/ccxt/blob/master/CONTRIBUTING.md#how-to-contribute-code

# ----------------------------------------------------------------------------
# -*- coding: utf-8 -*-


from ccxt.test.base import test_shared_methods  # noqa E402
from ccxt.test.base.test_trade import test_trade  # noqa E402


def test_order(exchange, method, entry, symbol, now):
    format = {
        'info': {},
        'id': '123',
        'clientOrderId': '1234',
        'timestamp': 1649373600000,
        'datetime': '2022-04-07T23:20:00.000Z',
        'lastTradeTimestamp': 1649373610000,
        'symbol': 'XYZ/USDT',
        'type': 'limit',
        'timeInForce': 'GTC',
        'postOnly': True,
        'side': 'sell',
        'price': exchange.parse_number('1.23456'),
        'stopPrice': exchange.parse_number('1.1111'),
        'amount': exchange.parse_number('1.23'),
        'cost': exchange.parse_number('2.34'),
        'average': exchange.parse_number('1.234'),
        'filled': exchange.parse_number('1.23'),
        'remaining': exchange.parse_number('0.123'),
        'status': 'ok',
        'fee': {},
        'trades': [],
    }
    empty_not_allowed_for = ['id']
    # todo: skip some exchanges
    # const emptyNotAllowedFor = [ 'id', 'timestamp', 'symbol', 'type', 'side', 'price' ];
    test_shared_methods.assert_structure(exchange, method, entry, format, empty_not_allowed_for)
    test_shared_methods.assert_timestamp(exchange, method, entry, now)
    #
    test_shared_methods.assert_in_array(exchange, method, entry, 'timeInForce', ['GTC', 'GTK', 'IOC', 'FOK'])
    test_shared_methods.assert_in_array(exchange, method, entry, 'status', ['open', 'closed', 'canceled'])
    test_shared_methods.assert_in_array(exchange, method, entry, 'side', ['buy', 'sell'])
    test_shared_methods.assert_in_array(exchange, method, entry, 'postOnly', [True, False])
    test_shared_methods.assert_symbol(exchange, method, entry, 'symbol', symbol)
    test_shared_methods.assert_greater(exchange, method, entry, 'price', '0')
    test_shared_methods.assert_greater(exchange, method, entry, 'stopPrice', '0')
    test_shared_methods.assert_greater(exchange, method, entry, 'cost', '0')
    test_shared_methods.assert_greater(exchange, method, entry, 'average', '0')
    test_shared_methods.assert_greater(exchange, method, entry, 'average', '0')
    test_shared_methods.assert_greater_or_equal(exchange, method, entry, 'filled', '0')
    test_shared_methods.assert_greater_or_equal(exchange, method, entry, 'remaining', '0')
    test_shared_methods.assert_greater_or_equal(exchange, method, entry, 'amount', '0')
    test_shared_methods.assert_greater_or_equal(exchange, method, entry, 'amount', exchange.safe_string(entry, 'remaining'))
    test_shared_methods.assert_greater_or_equal(exchange, method, entry, 'amount', exchange.safe_string(entry, 'filled'))
    if entry['trades'] is not None:
        for i in range(0, len(entry['trades'])):
            test_trade(exchange, method, entry['trades'][i], symbol, now)
    test_shared_methods.assert_fee(exchange, method, entry['fee'])
