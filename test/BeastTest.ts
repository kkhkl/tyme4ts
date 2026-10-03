import {suite, test} from '@testdeck/mocha';
import {equal} from 'assert';
import {Beast} from '../lib';

@suite
class BeastTest {
    @test
    test(): void {
        equal(Beast.fromName('青龙').getZone().getName(), '东');
    }
}
