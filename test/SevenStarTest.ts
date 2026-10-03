import {suite, test} from '@testdeck/mocha';
import {equal} from 'assert';
import {SevenStar, Week} from '../lib';

@suite
class SevenStarTest {
    @test
    test(): void {
        equal(SevenStar.fromName('火').getWeek().getName(), '二');
    }

    @test
    test1(): void {
        equal(Week.fromName('一').getSevenStar().getName(), '月');
    }
}
