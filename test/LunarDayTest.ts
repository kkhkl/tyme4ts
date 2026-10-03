import {suite, test} from '@testdeck/mocha';
import {LunarDay, SolarDay, TwentyEightStar} from '../lib';
import {equal} from 'assert';

@suite
class LunarDayTest {
    @test
    test1(): void {
        equal(LunarDay.fromYmd(0, 11, 18).getSolarDay().toString(), '1年1月1日');
    }

    @test
    test2(): void {
        equal(LunarDay.fromYmd(9999, 12, 2).getSolarDay().toString(), '9999年12月31日');
    }

    @test
    test3(): void {
        equal(LunarDay.fromYmd(1905, 1, 1).getSolarDay().toString(), '1905年2月4日');
    }

    @test
    test4(): void {
        equal(LunarDay.fromYmd(2038, 12, 29).getSolarDay().toString(), '2039年1月23日');
    }

    @test
    test5(): void {
        equal(LunarDay.fromYmd(1500, 1, 1).getSolarDay().toString(), '1500年1月31日');
    }

    @test
    test6(): void {
        equal(LunarDay.fromYmd(1500, 12, 29).getSolarDay().toString(), '1501年1月18日');
    }

    @test
    test7(): void {
        equal(LunarDay.fromYmd(1582, 9, 18).getSolarDay().toString(), '1582年10月4日');
    }

    @test
    test8(): void {
        equal(LunarDay.fromYmd(1582, 9, 19).getSolarDay().toString(), '1582年10月15日');
    }

    @test
    test9(): void {
        equal(LunarDay.fromYmd(2019, 12, 12).getSolarDay().toString(), '2020年1月6日');
    }

    @test
    test10(): void {
        equal(LunarDay.fromYmd(2033, -11, 1).getSolarDay().toString(), '2033年12月22日');
    }

    @test
    test11(): void {
        equal(LunarDay.fromYmd(2021, 6, 7).getSolarDay().toString(), '2021年7月16日');
    }

    @test
    test12(): void {
        equal(LunarDay.fromYmd(2034, 1, 1).getSolarDay().toString(), '2034年2月19日');
    }

    @test
    test13(): void {
        equal(LunarDay.fromYmd(2033, 12, 1).getSolarDay().toString(), '2034年1月20日');
    }

    @test
    test14(): void {
        equal(LunarDay.fromYmd(7013, -11, 4).getSolarDay().toString(), '7013年12月24日');
    }

    @test
    test15(): void {
        equal(LunarDay.fromYmd(2023, 8, 24).getSixtyCycle().toString(), '己亥');
    }

    @test
    test16(): void {
        equal(LunarDay.fromYmd(1653, 1, 6).getSixtyCycle().toString(), '癸酉');
    }

    @test
    test17(): void {
        equal(LunarDay.fromYmd(2010, 1, 1).next(31).toString(), '农历庚寅年二月初二');
    }

    @test
    test18(): void {
        equal(LunarDay.fromYmd(2012, 3, 1).next(60).toString(), '农历壬辰年闰四月初一');
    }

    @test
    test19(): void {
        equal(LunarDay.fromYmd(2012, 3, 1).next(88).toString(), '农历壬辰年闰四月廿九');
    }

    @test
    test20(): void {
        equal(LunarDay.fromYmd(2012, 3, 1).next(89).toString(), '农历壬辰年五月初一');
    }

    @test
    test21(): void {
        equal(LunarDay.fromYmd(2020, 4, 1).getSolarDay().toString(), '2020年4月23日');
    }

    @test
    test22(): void {
        equal(LunarDay.fromYmd(2024, 1, 1).getLunarMonth().getLunarYear().getSixtyCycle().getName(), '甲辰');
    }

    @test
    test23(): void {
        equal(LunarDay.fromYmd(2023, 12, 30).getLunarMonth().getLunarYear().getSixtyCycle().getName(), '癸卯');
    }

    /**
     * 二十八宿
     */
    @test
    test24(): void {
        const star: TwentyEightStar = LunarDay.fromYmd(2020, 4, 13).getTwentyEightStar();
        equal(star.getZone().getName(), '南');
        equal(star.getZone().getBeast().getName(), '朱雀');
        equal(star.getName(), '翼');
        equal(star.getSevenStar().getName(), '火');
        equal(star.getAnimal().getName(), '蛇');
        equal(star.getLuck().getName(), '凶');

        equal(star.getLand().getName(), '阳天');
        equal(star.getLand().getDirection().getName(), '东南');
    }

    @test
    test25(): void {
        const star: TwentyEightStar = LunarDay.fromYmd(2023, 9, 28).getTwentyEightStar();
        equal(star.getZone().getName(), '南');
        equal(star.getZone().getBeast().getName(), '朱雀');
        equal(star.getName(), '柳');
        equal(star.getSevenStar().getName(), '土');
        equal(star.getAnimal().getName(), '獐');
        equal(star.getLuck().getName(), '凶');

        equal(star.getLand().getName(), '炎天');
        equal(star.getLand().getDirection().getName(), '南');
    }

    @test
    test26(): void {
        const lunar: LunarDay = LunarDay.fromYmd(2005, 11, 23);
        equal(lunar.getLunarMonth().getSixtyCycle().getName(), '戊子');
        equal(lunar.getSixtyCycleDay().getMonth().getName(), '戊子');
    }

    @test
    test27(): void {
        const lunar: LunarDay = LunarDay.fromYmd(2024, 1, 1);
        equal(lunar.next(31).toString(), '农历甲辰年二月初三');
    }

    @test
    test28(): void {
        const lunar: LunarDay = LunarDay.fromYmd(2024, 3, 5);
        equal(lunar.getMinorRen().getName(), '大安');
    }

    @test
    test29(): void {
        // 正月初一
        equal(LunarDay.fromYmd(2026, 1, 1).getLunarMonth().getLunarYear().getSixtyCycle().getEarthBranch().getZodiac().getName(), '马');

        // 十二月廿九
        equal(LunarDay.fromYmd(2025, 12, 29).getLunarMonth().getLunarYear().getSixtyCycle().getEarthBranch().getZodiac().getName(), '蛇');

        // 2026年2月17日
        equal(SolarDay.fromYmd(2026, 2, 17).getLunarDay().getLunarMonth().getLunarYear().getSixtyCycle().getEarthBranch().getZodiac().getName(), '马');

        // 2026年2月16日
        equal(SolarDay.fromYmd(2026, 2, 16).getLunarDay().getLunarMonth().getLunarYear().getSixtyCycle().getEarthBranch().getZodiac().getName(), '蛇');
    }

    @test
    test30(): void {
        const d: LunarDay = LunarDay.fromYmd(2026, 1, 1);
        equal(d.isBefore(LunarDay.fromYmd(2027, 1, 1)), true);
        equal(d.isAfter(LunarDay.fromYmd(2024, 1, 1)), true);
        equal(d.getHours().length, 13);
        equal(d.getThreePillars().toString(), '丙午 庚寅 壬戌');
        equal(d.getYearSixtyCycle().toString(), '丙午');
        equal(d.getMonthSixtyCycle().toString(), '庚寅');
    }
}
