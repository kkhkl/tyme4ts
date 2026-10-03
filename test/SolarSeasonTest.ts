import {suite, test} from '@testdeck/mocha';
import {SolarSeason} from '../lib';
import {deepEqual, equal} from 'assert';

@suite
class SolarSeasonTest {
    @test
    test0(): void {
        const season: SolarSeason = SolarSeason.fromIndex(2023, 0);
        equal(season.toString(), '2023年一季度');
        equal(season.getIndex(), 0);
        equal(season.next(-5).toString(), '2021年四季度');
    }

    @test
    test1(): void {
        const season: SolarSeason = SolarSeason.fromIndex(2023, 0);
        const months: string[] = [];
        season.getMonths().forEach(m => {
            months.push(m.toString());
        });
        deepEqual(months, ['2023年1月', '2023年2月', '2023年3月']);
    }
}
