import {suite, test} from '@testdeck/mocha';
import {Duty, SolarDay} from '../lib';
import {equal} from 'assert';

@suite
class DutyTest {
    @test
    test(): void {
        equal(SolarDay.fromYmd(2023, 10, 30).getLunarDay().getDuty().getName(), '闭');
    }

    @test
    test1(): void {
        equal(SolarDay.fromYmd(2023, 10, 19).getLunarDay().getDuty().getName(), '建');
    }

    @test
    test2(): void {
        equal(SolarDay.fromYmd(2023, 10, 7).getLunarDay().getDuty().getName(), '除');
    }

    @test
    test3(): void {
        equal(SolarDay.fromYmd(2023, 10, 8).getLunarDay().getDuty().getName(), '除');
    }

    @test
    test4(): void {
        equal(Duty.fromName('建').getIndex(), 0);
    }
}
