import {suite, test} from '@testdeck/mocha';
import {equal} from 'assert';
import {Luck} from '../lib';

@suite
class LuckTest {
    @test
    test(): void {
        equal(Luck.fromName('吉').getIndex(), 0);
    }
}
