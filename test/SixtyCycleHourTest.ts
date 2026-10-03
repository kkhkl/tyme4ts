import {suite, test} from '@testdeck/mocha';
import {SixtyCycleHour, SolarTime} from '../lib';
import {deepEqual, equal} from 'assert';

@suite
class SixtyCycleHourTest {
    @test
    test0(): void {
        const h: SixtyCycleHour = SolarTime.fromYmdHms(2026, 1, 1, 13, 0, 0).getSixtyCycleHour();
        equal(h.getSixtyCycleDay().toString(), '乙巳年戊子月乙亥日');
        equal(h.getSolarTime().toString(), '2026年1月1日 13:00:00');
        equal(h.getNineStar().toString(), '五黄土');
        equal(h.getTwelveStar().getName(), '明堂');

        const recommends: string[] = [];
        h.getRecommends().forEach(t => {
            recommends.push(t.getName());
        });
        deepEqual(recommends, ['嫁娶', '移徙', '交易', '开市', '安床', '盖屋', '修造', '作灶', '求嗣', '求财']);

        const avoids: string[] = [];
        h.getAvoids().forEach(t => {
            avoids.push(t.getName());
        });
        deepEqual(avoids, ['出行', '赴任', '祈福', '祭祀', '开光', '斋醮']);
    }
}
