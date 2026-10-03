import {suite, test} from '@testdeck/mocha';
import {RabByungMonth} from '../lib';
import {deepStrictEqual, equal} from 'assert';

@suite
class RabByungMonthTest {
    @test
    test0(): void {
        const m: RabByungMonth = RabByungMonth.fromYm(1950, 12);
        equal(m.toString(), '第十六饶迥铁虎年十二月');
        equal(m.getAlias(), '满意月');
        equal(m.getDays().length, 30);
    }

    @test
    test1(): void {
        deepStrictEqual(RabByungMonth.fromYm(2025, 2).getMissDays(), [5, 28]);
    }
}
