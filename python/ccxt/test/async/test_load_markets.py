import os
import sys

root = os.path.dirname(os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))))
sys.path.append(root)

# ----------------------------------------------------------------------------

# PLEASE DO NOT EDIT THIS FILE, IT IS GENERATED AND WILL BE OVERWRITTEN:
# https://github.com/ccxt/ccxt/blob/master/CONTRIBUTING.md#how-to-contribute-code

# ----------------------------------------------------------------------------
# -*- coding: utf-8 -*-


from ccxt.test.base import test_market  # noqa E402


async def test_load_markets(exchange):
    method = 'loadMarkets'
    markets = await exchange.load_markets()
    market_values = list(markets.values())
    for i in range(0, len(market_values)):
        test_market(exchange, method, market_values[i])
