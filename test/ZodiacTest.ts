import {suite, test} from '@testdeck/mocha';
import {equal} from 'assert';
import {Zodiac} from '../lib';

@suite
class ZodiacTest {
    @test
    test(): void {
        equal(Zodiac.fromName('鼠').getEarthBranch().getName(), '子');
    }
}
