import {suite, test} from '@testdeck/mocha';
import {equal} from 'assert';
import {Sound} from '../lib';

@suite
class SoundTest {
    @test
    test(): void {
        equal(Sound.fromName('海中金').getIndex(), 0);
    }
}
