import {suite, test} from '@testdeck/mocha';
import {LunarHour} from '../lib';
import {equal} from 'assert';

@suite
class LunarHourTest {
    @test
    test28(): void {
        const h: LunarHour = LunarHour.fromYmdHms(2024, 9, 7, 10, 0, 0);
        equal(h.getMinorRen().getName(), '留连');
        equal(h.isBefore(LunarHour.fromYmdHms(2025, 1, 1, 12, 0, 0)), true);
        equal(h.isAfter(LunarHour.fromYmdHms(2010, 1, 1, 12, 0, 0)), true);
        equal(h.getYearSixtyCycle().getName(), '甲辰');
        equal(h.getMonthSixtyCycle().getName(), '甲戌');
        equal(h.getDaySixtyCycle().getName(), '丙午');
        equal(h.getTwelveStar().toString(), '玄武');
    }
}
