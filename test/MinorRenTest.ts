import {suite, test} from '@testdeck/mocha';
import {MinorRen} from '../lib';
import {equal} from 'assert';

@suite
class MinorRenTest {
    @test
    test0(): void {
        const r: MinorRen = MinorRen.fromName('大安');
        equal(r.getIndex(), 0);
        equal(r.getLuck().getName(), '吉');
        equal(r.getElement().getName(), '木');
    }
}
