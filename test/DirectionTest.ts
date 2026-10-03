import { suite, test } from '@testdeck/mocha';
import {equal} from 'assert';
import {Direction, SolarDay} from '../lib';

@suite
class DirectionTest {
    @test
    test(): void {
        equal(SolarDay.fromYmd(2021, 11, 13).getLunarDay().getSixtyCycle().getHeavenStem().getMascotDirection().getName(), '东南');
    }

    @test
    test1(): void {
        equal(SolarDay.fromYmd(2024, 1, 1).getLunarDay().getSixtyCycle().getHeavenStem().getMascotDirection().getName(), '东南');
    }

    @test
    test2(): void {
        equal(SolarDay.fromYmd(2023, 11, 6).getLunarDay().getJupiterDirection().getName(), '东');
    }

    @test
    test3(): void {
        equal(Direction.fromName('北').getLand().getName(), '玄天');
    }
}
