<?php
namespace ccxt;
use \ccxt\Precise;

// ----------------------------------------------------------------------------

// PLEASE DO NOT EDIT THIS FILE, IT IS GENERATED AND WILL BE OVERWRITTEN:
// https://github.com/ccxt/ccxt/blob/master/CONTRIBUTING.md#how-to-contribute-code

// -----------------------------------------------------------------------------
include_once __DIR__ . '/../base/test_ticker.php';

function test_fetch_tickers($exchange, $symbol) {
    $method = 'fetchTickers';
    // log ('fetching all tickers at once...')
    $tickers = null;
    $checked_symbol = null;
    try {
        $tickers = $exchange->fetch_tickers();
    } catch(Exception $e) {
        $tickers = $exchange->fetch_tickers([$symbol]);
        $checked_symbol = $symbol;
    }
    assert(is_array($tickers), $exchange->id . ' ' . $method . ' ' . $checked_symbol . ' must return an object. ' . $exchange->json($tickers));
    $values = is_array($tickers) ? array_values($tickers) : array();
    for ($i = 0; $i < count($values); $i++) {
        $ticker = $values[$i];
        test_ticker($exchange, $method, $ticker, $checked_symbol);
    }
}
