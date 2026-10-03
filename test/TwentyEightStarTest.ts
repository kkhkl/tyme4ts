import {suite, test} from '@testdeck/mocha';
import {equal} from 'assert';
import {TwentyEightStar} from '../lib';

@suite
class TwentyEightStarTest {
    @test
    test(): void {
        equal(TwentyEightStar.fromName('斗').getIndex(), 7);
    }
}
