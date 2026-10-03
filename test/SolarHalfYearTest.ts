import {suite, test} from '@testdeck/mocha';
import {SolarHalfYear} from '../lib';
import {deepEqual, equal} from 'assert';

@suite
class SolarHalfYearTest {
    @test
    test0(): void {
        const y: SolarHalfYear = SolarHalfYear.fromIndex(2023, 0);
        equal(y.getName(), '上半年');
        equal(y.toString(), '2023年上半年');
        equal(y.getIndex(), 0);

        const months: string[] = [];
        y.getMonths().forEach(m => {
            months.push(m.getName());
        });
        deepEqual(months, ['1月', '2月', '3月', '4月', '5月', '6月']);

        const seasons: string[] = [];
        y.getSeasons().forEach(s => {
            seasons.push(s.getName());
        });
        deepEqual(seasons, ['一季度', '二季度']);
    }

    @test
    test1(): void {
        const y: SolarHalfYear = SolarHalfYear.fromIndex(2023, 1);
        equal(y.getName(), '下半年');
        equal(y.toString(), '2023年下半年');
    }

    @test
    test2(): void {
        const y: SolarHalfYear = SolarHalfYear.fromIndex(2023, 0).next(1);
        equal(y.getName(), '下半年');
        equal(y.toString(), '2023年下半年');
    }

    @test
    test3(): void {
        const y: SolarHalfYear = SolarHalfYear.fromIndex(2023, 0).next(2);
        equal(y.getName(), '上半年');
        equal(y.toString(), '2024年上半年');
    }

    @test
    test4(): void {
        const y: SolarHalfYear = SolarHalfYear.fromIndex(2023, 0).next(-2);
        equal(y.getName(), '上半年');
        equal(y.toString(), '2022年上半年');
    }

    @test
    test5(): void {
        const y: SolarHalfYear = SolarHalfYear.fromIndex(2023, 0);
        equal(y.next(-4).toString(), '2021年上半年');
        equal(y.next(-3).toString(), '2021年下半年');
    }
}
