import {suite, test} from '@testdeck/mocha';
import {SolarYear} from '../lib';
import {deepEqual, equal} from 'assert';

@suite
class SolarYearTest {
    @test
    test0(): void {
        equal(SolarYear.fromYear(2023).getName(), '2023年');
    }

    @test
    test1(): void {
        equal(SolarYear.fromYear(2023).isLeap(), false);
    }

    @test
    test2(): void {
        equal(SolarYear.fromYear(1500).isLeap(), true);
    }

    @test
    test3(): void {
        equal(SolarYear.fromYear(1700).isLeap(), false);
    }

    @test
    test4(): void {
        equal(SolarYear.fromYear(2023).getDayCount(), 365);
    }

    @test
    test5(): void {
        equal(SolarYear.fromYear(2023).next(5).getName(), '2028年');
    }

    @test
    test6(): void {
        equal(SolarYear.fromYear(2023).next(-5).getName(), '2018年');
    }

    @test
    test7(): void {
        const y: SolarYear = SolarYear.fromYear(2023);
        const months: string[] = [];
        y.getMonths().forEach(m => {
            months.push(m.toString());
        });
        deepEqual(months, ['2023年1月', '2023年2月', '2023年3月', '2023年4月', '2023年5月', '2023年6月', '2023年7月', '2023年8月', '2023年9月', '2023年10月', '2023年11月', '2023年12月']);

        const seasons: string[] = [];
        y.getSeasons().forEach(s => {
            seasons.push(s.toString());
        });
        deepEqual(seasons, ['2023年一季度', '2023年二季度', '2023年三季度', '2023年四季度']);

        const halfYears: string[] = [];
        y.getHalfYears().forEach(h => {
            halfYears.push(h.toString());
        });
        deepEqual(halfYears, ['2023年上半年', '2023年下半年']);
    }

    @test
    test8(): void {
        equal(SolarYear.fromYear(1027).getRabByungYear().getName(), '第一饶迥火兔年');
    }
}
