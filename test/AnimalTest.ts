import {suite, test} from '@testdeck/mocha';
import {equal} from 'assert';
import {Animal} from '../lib';

@suite
class AnimalTest {
    @test
    test(): void {
        equal(Animal.fromName('龙').getTwentyEightStar().getName(), '亢');
    }
}
