import {suite, test} from '@testdeck/mocha';
import {SolarDay, SolarFestival} from '../lib';
import {equal, ifError, ok} from 'assert';

@suite
class SolarFestivalTest {
    @test
    test2(): void {
        const f: SolarFestival | null = SolarFestival.fromIndex(2023, 0);
        ok(f);

        const f1: SolarFestival | null = f.next(13);
        ok(f1);
        equal(f1.toString(), '2024年5月1日 劳动节');

        const f2: SolarFestival | null = f.next(-3);
        ok(f2);
        equal(f2.toString(), '2022年8月1日 建军节');
    }

    @test
    test3(): void {
        const f: SolarFestival | null = SolarFestival.fromIndex(2023, 0);
        ok(f);

        const f1: SolarFestival | null = f.next(-9);
        ok(f1);
        equal(f1.toString(), '2022年3月8日 妇女节');
    }

    @test
    test4(): void {
        const f: SolarFestival | null = SolarDay.fromYmd(2010, 1, 1).getFestival();
        ok(f);
        equal(f.toString(), '2010年1月1日 元旦');
        equal(f.getStartYear(), 1950);
    }

    @test
    test5(): void {
        const f: SolarFestival | null = SolarDay.fromYmd(2021, 5, 4).getFestival();
        ok(f);
        equal(f.toString(), '2021年5月4日 青年节');
    }

    @test
    test6(): void {
        const f: SolarFestival | null = SolarDay.fromYmd(1939, 5, 4).getFestival();
        ifError(f);
    }
}
