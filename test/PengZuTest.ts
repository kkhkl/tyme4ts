import {suite, test} from '@testdeck/mocha';
import {equal} from 'assert';
import {PengZu, PengZuEarthBranch, PengZuHeavenStem, SixtyCycle} from '../lib';

@suite
class PengZuTest {
    @test
    test(): void {
        equal(PengZuHeavenStem.fromName('甲不开仓财物耗散').getIndex(), 0);
    }

    @test
    test1(): void {
        equal(PengZuEarthBranch.fromName('子不问卜自惹祸殃').getIndex(), 0);
    }

    @test
    test2(): void {
        const p: PengZu = PengZu.fromSixtyCycle(SixtyCycle.fromName('甲子'));
        equal(p.getName(), '甲不开仓财物耗散 子不问卜自惹祸殃');
        equal(p.getPengZuHeavenStem().getName(), '甲不开仓财物耗散');
        equal(p.getPengZuEarthBranch().getName(), '子不问卜自惹祸殃');
    }
}
