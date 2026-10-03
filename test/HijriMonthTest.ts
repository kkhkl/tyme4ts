import {suite, test} from '@testdeck/mocha';
import {HijriMonth} from '../lib';
import {equal} from 'assert';

@suite
class HijriMonthTest {
    @test
    test1(): void {
        const m: HijriMonth = HijriMonth.fromYm(1, 1);
        equal(m.getDays().length, 30);
    }
}
