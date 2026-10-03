import {suite, test} from '@testdeck/mocha';
import {equal} from 'assert';
import {TwelveStar} from '../lib';

@suite
class TwelveStarTest {
    @test
    test(): void {
        equal(TwelveStar.fromName('青龙').getIndex(), 0);
    }
}
