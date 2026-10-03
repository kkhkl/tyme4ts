import {suite, test} from '@testdeck/mocha';
import {SixtyCycleMonth, SolarTerm} from '../lib';
import {equal} from 'assert';

@suite
class SixtyCycleMonthTest {
    @test
    test0(): void {
        const m: SixtyCycleMonth = SixtyCycleMonth.fromIndex(2025, 0);
        equal(m.toString(), '乙巳年戊寅月');
    }

    @test
    test1(): void {
        const m: SixtyCycleMonth = SixtyCycleMonth.fromIndex(1150, 0);
        equal(m.toString(), '庚午年戊寅月');
        equal(m.getIndexInYear(), 0);
        equal(SolarTerm.fromIndex(1150, 3).getSolarDay(), '1150年1月30日');
        equal(m.getFirstDay().toString(), '庚午年戊寅月戊寅日');
        equal(m.getDays().length, 30);
        equal(m.getNineStar().toString(), '八白土');
        equal(m.getJupiterDirection().getName(), '东北');
    }
}
