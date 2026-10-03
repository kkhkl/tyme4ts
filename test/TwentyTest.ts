import {suite, test} from '@testdeck/mocha';
import {equal} from 'assert';
import {Twenty} from '../lib';

@suite
class TwentyTest {
    @test
    test(): void {
        equal(Twenty.fromName('一运').getIndex(), 0);
    }
}
