import {suite, test} from '@testdeck/mocha';
import {SixtyCycleYear} from '../lib';
import {equal} from 'assert';

@suite
class SixtyCycleYearTest {
    @test
    test0(): void {
        equal(SixtyCycleYear.fromYear(2025).getMonths().length, 12);
    }
}
