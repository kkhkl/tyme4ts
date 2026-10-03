import {suite, test} from '@testdeck/mocha';
import {Dipper} from '../lib';
import {equal} from 'assert';

@suite
class DipperTest {
    @test
    test0(): void {
        equal(Dipper.fromName('天枢').getIndex(), 0);
    }
}
