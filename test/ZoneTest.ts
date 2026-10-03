import {suite, test} from '@testdeck/mocha';
import {equal} from 'assert';
import {Zone} from '../lib';

@suite
class ZoneTest {
    @test
    test(): void {
        equal(Zone.fromName('北').getDirection().getName(), '北');
    }
}
