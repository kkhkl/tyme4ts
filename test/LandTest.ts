import {suite, test} from '@testdeck/mocha';
import {equal} from 'assert';
import {Land} from '../lib';

@suite
class LandTest {
    @test
    test(): void {
        equal(Land.fromName('玄天').getIndex(), 0);
    }
}
