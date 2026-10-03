import {suite, test} from '@testdeck/mocha';
import {HijriYear} from '../lib';
import {equal} from 'assert';

@suite
class HijriYearTest {
    @test
    test(): void {
        equal(HijriYear.fromYear(1).isLeap(), false);
        equal(HijriYear.fromYear(2).isLeap(), true);
        equal(HijriYear.fromYear(0).isLeap(), false);
        equal(HijriYear.fromYear(-1).isLeap(), true);
    }

    @test
    test1(): void {
        const y: HijriYear = HijriYear.fromYear(1);
        equal(y.getDayCount(), 354);
        equal(y.getMonths().length, 12);
        equal(y.getFirstMonth().toString(), '1年穆哈兰姆月');
    }
}
