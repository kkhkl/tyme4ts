import {suite, test} from '@testdeck/mocha';
import {SixStar, SolarDay} from '../lib';
import {equal} from 'assert';

@suite
class SixStarTest {
    @test
    test0(): void {
        equal(SolarDay.fromYmd(2020, 4, 23).getLunarDay().getSixStar().getName(), '佛灭');
    }

    @test
    test1(): void {
        equal(SolarDay.fromYmd(2021, 1, 15).getLunarDay().getSixStar().getName(), '友引');
    }

    @test
    test2(): void {
        equal(SolarDay.fromYmd(2017, 1, 5).getLunarDay().getSixStar().getName(), '先胜');
    }

    @test
    test3(): void {
        equal(SolarDay.fromYmd(2020, 4, 10).getLunarDay().getSixStar().getName(), '友引');
    }

    @test
    test4(): void {
        equal(SolarDay.fromYmd(2020, 6, 11).getLunarDay().getSixStar().getName(), '大安');
    }

    @test
    test5(): void {
        equal(SolarDay.fromYmd(2020, 6, 1).getLunarDay().getSixStar().getName(), '先胜');
    }

    @test
    test6(): void {
        equal(SolarDay.fromYmd(2020, 12, 8).getLunarDay().getSixStar().getName(), '先负');
    }

    @test
    test8(): void {
        equal(SolarDay.fromYmd(2020, 12, 11).getLunarDay().getSixStar().getName(), '赤口');
    }

    @test
    test9(): void {
        equal(SixStar.fromName('先胜').getIndex(), 0);
    }
}
