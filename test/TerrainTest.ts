import {suite, test} from '@testdeck/mocha';
import {equal} from 'assert';
import {Terrain} from '../lib';

@suite
class TerrainTest {
    @test
    test(): void {
        equal(Terrain.fromName('长生').getIndex(), 0);
    }
}
