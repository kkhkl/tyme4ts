import {suite, test} from '@testdeck/mocha';
import {RabByungElement, RabByungYear, Zodiac} from '../lib';
import {equal} from 'assert';

@suite
class RabByungYearTest {
    @test
    test0(): void {
        const y: RabByungYear = RabByungYear.fromElementZodiac(0, RabByungElement.fromName('火'), Zodiac.fromName('兔'));
        equal(y.getName(), '第一饶迥火兔年');
        equal(y.getSolarYear().getName(), '1027年');
        equal(y.getSixtyCycle().getName(), '丁卯');
        equal(y.getLeapMonth(), 10);
    }

    @test
    test1(): void {
        equal(RabByungYear.fromYear(1027).getName(), '第一饶迥火兔年');
    }

    @test
    test2(): void {
        const y: RabByungYear = RabByungYear.fromYear(2010);
        equal(y.getName(), '第十七饶迥铁虎年');
        equal(y.getFirstMonth().toString(), '第十七饶迥铁虎年正月');
        equal(y.getMonths().length, 13);
    }

    @test
    test3(): void {
        equal(RabByungYear.fromYear(1961).getName(), '第十六饶迥铁牛年');
    }

    @test
    test4(): void {
        equal(RabByungYear.fromYear(2043).getLeapMonth(), 5);
        equal(RabByungYear.fromYear(2044).getLeapMonth(), 0);
    }
}
