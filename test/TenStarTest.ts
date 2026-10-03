import {suite, test} from '@testdeck/mocha';
import {equal} from 'assert';
import {TenStar} from '../lib';

@suite
class TenStarTest {
    @test
    test(): void {
        equal(TenStar.fromName('比肩').getIndex(), 0);
    }
}
