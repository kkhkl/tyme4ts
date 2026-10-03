import {suite, test} from '@testdeck/mocha';
import {equal} from 'assert';
import {LunarSeason} from '../lib';

@suite
class LunarSeasonTest {
    @test
    test(): void {
        equal(LunarSeason.fromName('孟春').getIndex(), 0);
    }
}
