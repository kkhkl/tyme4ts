import {suite, test} from '@testdeck/mocha';
import {God, LunarDay, SolarDay} from '../lib';
import {deepEqual, equal} from 'assert';

@suite
class GodTest {

    filter(gods: God[], name: string): string[] {
        const l: string[] = [];
        gods.forEach(god => {
            if (name === god.getLuck().getName()) {
                l.push(god.getName());
            }
        });
        return l;
    }

    @test
    test0(): void {
        const lunar: LunarDay = SolarDay.fromYmd(2004, 2, 16).getLunarDay();
        const gods: God[] = lunar.getGods();
        deepEqual(this.filter(gods, '吉'), ['天恩', '续世', '明堂']);
        deepEqual(this.filter(gods, '凶'), ['月煞', '月虚', '血支', '天贼', '五虚', '土符', '归忌', '血忌']);
    }

    @test
    test1(): void {
        const lunar: LunarDay = SolarDay.fromYmd(2029, 11, 16).getLunarDay();
        const gods: God[] = lunar.getGods();

        deepEqual(this.filter(gods, '吉'), ['天德合', '月空', '天恩', '益后', '金匮']);
        deepEqual(this.filter(gods, '凶'), ['月煞', '月虚', '血支', '五虚']);
    }

    @test
    test2(): void {
        const lunar: LunarDay = SolarDay.fromYmd(1954, 7, 16).getLunarDay();
        const gods: God[] = lunar.getGods();

        deepEqual(this.filter(gods, '吉'), ['民日', '天巫', '福德', '天仓', '不将', '续世', '除神', '鸣吠']);
        deepEqual(this.filter(gods, '凶'), ['劫煞', '天贼', '五虚', '五离']);
    }

    @test
    test3(): void {
        const lunar: LunarDay = SolarDay.fromYmd(2024, 12, 27).getLunarDay();
        const gods: God[] = lunar.getGods();

        deepEqual(this.filter(gods, '吉'), ['天恩', '四相', '阴德', '守日', '吉期', '六合', '普护', '宝光']);
        deepEqual(this.filter(gods, '凶'), ['三丧', '鬼哭']);
    }

    @test
    test4(): void {
        const lunar: LunarDay = SolarDay.fromYmd(2025, 12, 15).getLunarDay();
        const gods: God[] = lunar.getGods();

        deepEqual(this.filter(gods, '吉'), ['阳德', '六仪', '续世', '解神', '司命']);
        deepEqual(this.filter(gods, '凶'), ['月破', '大耗', '灾煞', '天火', '厌对', '招摇', '五虚', '血忌']);
    }

    @test
    test5(): void {
        equal(God.fromName('天恩').getIndex(), 0);
    }
}
