import { suite, test } from '@testdeck/mocha';
import {equal} from 'assert';
import {EarthBranch, Element, HeavenStem} from '../lib';

@suite
class ElementTest {
    @test
    test(): void {
        equal(Element.fromName('金').getRestrain().getName(), Element.fromName('木').getName());
    }

    @test
    test1(): void {
        equal(Element.fromName('火').getReinforce().getName(), Element.fromName('土').getName());
    }

    @test
    test2(): void {
        equal(HeavenStem.fromName('丙').getElement().getName(), '火');
    }

    @test
    test3(): void {
        const e: Element = EarthBranch.fromName('寅').getElement();
        equal(e.getName(), '木');
        equal(e.getReinforce().getName(), Element.fromName('火').getName());
        equal(e.getReinforced().getName(), '水');
        equal(e.getRestrained().getName(), '金');
    }
}
