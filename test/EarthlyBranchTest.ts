import {suite, test} from '@testdeck/mocha';
import {EarthBranch, HeavenStem, HideHeavenStem, HideHeavenStemType, YinYang} from '../lib';
import {deepEqual, equal, ifError} from 'assert';

@suite
class EarthlyBranchTest {
    @test
    test(): void {
        equal(EarthBranch.fromIndex(0).getName(), '子');
    }

    @test
    test1(): void {
        equal(EarthBranch.fromIndex(0).getIndex(), 0);
    }

    @test
    test2(): void {
        equal(EarthBranch.fromName('子').getOpposite().getName(), '午');
        equal(EarthBranch.fromName('戌').getOpposite().getName(), '辰');
    }

    @test
    test3(): void {
        equal(EarthBranch.fromName('子').getCombine().getName(), '丑');
        equal(EarthBranch.fromName('申').getCombine().getName(), '巳');
    }

    @test
    test4(): void {
        equal(EarthBranch.fromName('巳').getHarm().getName(), '寅');
        equal(EarthBranch.fromName('申').getHarm().getName(), '亥');
    }

    @test
    test5(): void {
        // 合化
        equal(EarthBranch.fromName('卯').combine(EarthBranch.fromName('戌'))!.getName(), '火');
        equal(EarthBranch.fromName('戌').combine(EarthBranch.fromName('卯'))!.getName(), '火');
        // 卯子无法合化
        ifError(EarthBranch.fromName('卯').combine(EarthBranch.fromName('子')));
    }

    @test
    test6(): void {
        equal(EarthBranch.fromIndex(0).getYinYang(), YinYang.YANG);
    }

    @test
    test7(): void {
        deepEqual(EarthBranch.fromName('子').getHideHeavenStems(), [new HideHeavenStem(HeavenStem.fromName('癸'), HideHeavenStemType.MAIN)]);
    }

    @test
    test8(): void {
        equal(EarthBranch.fromName('子').getDirection().getName(), '北');
    }

    @test
    test9(): void {
        equal(EarthBranch.fromName('子').getOminous().getName(), '南');
    }

    @test
    test10(): void {
        equal(EarthBranch.fromName('子').getPengZuEarthBranch().getName(), '子不问卜自惹祸殃');
    }

}
