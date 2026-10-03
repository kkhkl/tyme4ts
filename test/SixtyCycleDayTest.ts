import {suite, test} from '@testdeck/mocha';
import {SixtyCycleDay, SolarDay} from '../lib';
import {equal} from 'assert';

@suite
class SixtyCycleDayTest {
    @test
    test0(): void {
        const d: SixtyCycleDay = SolarDay.fromYmd(2026, 1, 1).getSixtyCycleDay();
        equal(d.getSolarDay().toString(), '2026年1月1日');
        equal(d.getNineStar().toString(), '三碧木');
        equal(d.getJupiterDirection().getName(), '东南');
        equal(d.getFetusDay().toString(), '碓磨床 外西南');
        equal(d.getTwentyEightStar().getName(), '井');
        equal(d.getHours().length, 12);
    }
}
