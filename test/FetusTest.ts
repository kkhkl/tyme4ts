import {suite, test} from '@testdeck/mocha';
import {FetusDay, Side, SolarDay} from '../lib';
import {equal} from 'assert';

@suite
class FetusTest {
    @test
    test(): void {
        equal(SolarDay.fromYmd(2021, 11, 13).getLunarDay().getFetusDay().getName(), '碓磨厕 外东南');
    }

    @test
    test1(): void {
        equal(SolarDay.fromYmd(2021, 11, 12).getLunarDay().getFetusDay().getName(), '占门碓 外东南');
    }

    @test
    test2(): void {
        equal(SolarDay.fromYmd(2011, 11, 12).getLunarDay().getFetusDay().getName(), '厨灶厕 外西南');
    }

    @test
    test3(): void {
        const d: FetusDay = SolarDay.fromYmd(2011, 11, 12).getLunarDay().getFetusDay();
        equal(d.getSide(), Side.OUT);
        equal(d.getDirection().getName(), '西南');
        equal(d.getFetusHeavenStem().getName(), '厨灶');
        equal(d.getFetusEarthBranch().getName(), '厕');
    }

}
