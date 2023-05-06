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


def test_currency(exchange, method, entry):
    format = {
        'info': {},
        'id': 'btc',
        'code': 'BTC',
        'name': 'Bitcoin',
        'withdraw': True,
        'deposit': True,
        'precision': exchange.parse_number('0.0001'),
        'fee': exchange.parse_number('0.001'),
        'limits': {
            'withdraw': {
                'min': exchange.parse_number('0.01'),
                'max': exchange.parse_number('1000'),
            },
            'deposit': {
                'min': exchange.parse_number('0.01'),
                'max': exchange.parse_number('1000'),
            },
        },
    }
    empty_not_allowed_for = ['id', 'code']
    test_shared_methods.assert_structure(exchange, method, entry, format, empty_not_allowed_for)
    test_shared_methods.assert_currency_code(exchange, method, entry, entry['code'])
    #
    test_shared_methods.assert_greater(exchange, method, entry, 'precision', '0')
    test_shared_methods.assert_greater_or_equal(exchange, method, entry, 'fee', '0')
    limits = exchange.safe_value(entry, 'limits', {})
    withdraw_limits = exchange.safe_value(limits, 'withdraw', {})
    deposit_limits = exchange.safe_value(limits, 'deposit', {})
    test_shared_methods.assert_greater_or_equal(exchange, method, withdraw_limits, 'min', '0')
    test_shared_methods.assert_greater_or_equal(exchange, method, withdraw_limits, 'max', '0')
    test_shared_methods.assert_greater_or_equal(exchange, method, deposit_limits, 'min', '0')
    test_shared_methods.assert_greater_or_equal(exchange, method, deposit_limits, 'max', '0')
