import {suite, test} from '@testdeck/mocha';
import {HeavenStem} from '../lib';
import {equal, ifError} from 'assert';

@suite
class HeavenlyStemTest {
    @test
    test(): void {
        equal(HeavenStem.fromIndex(0).getName(), '甲');
    }

    @test
    test1(): void {
        equal(HeavenStem.fromName('甲').getIndex(), 0);
    }

    @test
    test2(): void {
        equal(HeavenStem.fromName('甲').getElement().getReinforce().getName(), HeavenStem.fromName('丙').getElement().getName());
    }

    @test
    test3(): void {
        const h: HeavenStem = HeavenStem.fromName('甲');
        equal(h.getTenStar(HeavenStem.fromName('甲')).getName(), '比肩');
        equal(h.getTenStar(HeavenStem.fromName('乙')).getName(), '劫财');
        equal(h.getTenStar(HeavenStem.fromName('丙')).getName(), '食神');
        equal(h.getTenStar(HeavenStem.fromName('丁')).getName(), '伤官');
        equal(h.getTenStar(HeavenStem.fromName('戊')).getName(), '偏财');
        equal(h.getTenStar(HeavenStem.fromName('己')).getName(), '正财');
        equal(h.getTenStar(HeavenStem.fromName('庚')).getName(), '七杀');
        equal(h.getTenStar(HeavenStem.fromName('辛')).getName(), '正官');
        equal(h.getTenStar(HeavenStem.fromName('壬')).getName(), '偏印');
        equal(h.getTenStar(HeavenStem.fromName('癸')).getName(), '正印');
    }

    @test
    test4(): void {
        equal(HeavenStem.fromName('庚').getCombine().getName(), '乙');
        equal(HeavenStem.fromName('乙').getCombine().getName(), '庚');
        equal(HeavenStem.fromName('甲').combine(HeavenStem.fromName('己'))!.getName(), '土');
        equal(HeavenStem.fromName('己').combine(HeavenStem.fromName('甲'))!.getName(), '土');
        equal(HeavenStem.fromName('丁').combine(HeavenStem.fromName('壬'))!.getName(), '木');
        equal(HeavenStem.fromName('壬').combine(HeavenStem.fromName('丁'))!.getName(), '木');
        ifError(HeavenStem.fromName('甲').combine(HeavenStem.fromName('乙')));
    }

    @test
    test5(): void {
        const h: HeavenStem = HeavenStem.fromName('甲');
        equal(h.getJoyDirection().getName(), '东北');
        equal(h.getYangDirection().getName(), '西南');
        equal(h.getYinDirection().getName(), '东北');
        equal(h.getWealthDirection().getName(), '东北');
    }

    @test
    test6(): void {
        equal(HeavenStem.fromName('甲').getPengZuHeavenStem().getName(), '甲不开仓财物耗散');
    }

}
