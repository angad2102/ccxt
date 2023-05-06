
import assert from 'assert';
import Precise from '../../../base/Precise.js';
import testSharedMethods from './test.sharedMethods.js';

function testOrderBook (exchange, method, entry, symbol) {
    const format = {
        // 'symbol': 'ETH/BTC', // reserved
        'bids': [
            [ exchange.parseNumber ('1.23'), exchange.parseNumber ('0.123') ],
            [ exchange.parseNumber ('1.22'), exchange.parseNumber ('0.543') ],
        ],
        'asks': [
            [ exchange.parseNumber ('1.24'), exchange.parseNumber ('0.453') ],
            [ exchange.parseNumber ('1.25'), exchange.parseNumber ('0.157') ],
        ],
        'timestamp': 1504224000000,
        'datetime': '2017-09-01T00:00:00',
        'nonce': 134234234,
        // 'info': {},
    };
    const emptyNotAllowedFor = [ 'bids', 'asks' ];
    testSharedMethods.assertStructure (exchange, method, entry, format, emptyNotAllowedFor);
    testSharedMethods.assertTimestamp (exchange, method, entry);
    testSharedMethods.assertSymbol (exchange, method, entry, 'symbol', symbol);
    const logText = testSharedMethods.logTemplate (exchange, method, entry);
    //
    const bids = entry['bids'];
    const bidsLength = bids.length;
    for (let i = 0; i < bidsLength; i++) {
        const currentBidString = exchange.safeString (bids[i], 0);
        const nextI = i + 1;
        if (bidsLength > nextI) {
            const nextBidString = exchange.safeString (bids[nextI], 0);
            assert (Precise.stringGt (currentBidString, nextBidString), 'current bid should be > than the next one: ' + currentBidString + '>' + nextBidString + logText);
        }
        testSharedMethods.assertGreater (exchange, method, bids[i], 0, '0');
        testSharedMethods.assertGreater (exchange, method, bids[i], 1, '0');
    }
    const asks = entry['asks'];
    const asksLength = asks.length;
    for (let i = 0; i < asksLength; i++) {
        const currentAskString = exchange.safeString (asks[i], 0);
        const nextI = i + 1;
        if (asksLength > nextI) {
            const nextAskString = exchange.safeString (asks[nextI], 0);
            assert (Precise.stringLt (currentAskString, nextAskString), 'current ask should be < than the next one: ' + currentAskString + '<' + nextAskString + logText);
        }
        testSharedMethods.assertGreater (exchange, method, asks[i], 0, '0');
        testSharedMethods.assertGreater (exchange, method, asks[i], 1, '0');
    }
    if (bidsLength && asksLength) {
        const firstBid = exchange.safeString (bids[0], 0);
        const firstAsk = exchange.safeString (asks[0], 0);
        // check bid-ask spread
        assert (Precise.stringLt (firstBid, firstAsk), 'bids[0][0] (' + firstAsk + ') should be < than asks[0][0] (' + firstAsk + ')' + logText);
    }
}

export default testOrderBook;
