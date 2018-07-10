import React from 'react';
import { isBlank, filterFromArray, toTitleCase } from 'components/Helpers';

describe("isBlank Testing", () => {
    it('handles checking isBlank for null', () => {
        const newState = isBlank(null);
        expect(newState).toEqual(true);
    });

    it('handles checking isBlank for undefined', () => {
        const newState = isBlank(undefined);
        expect(newState).toEqual(true);
    });

    it('handles checking isBlank for empty object', () => {
        let obj = {};
        const newState = isBlank(obj);
        expect(newState).toEqual(true);
    });

    it('handles checking isBlank for non-empty object', () => {
        let obj = { test: 'test' };
        const newState = isBlank(obj);
        expect(newState).toEqual(false);
    });

    it('handles checking isBlank is not null', () => {
        const newState = isBlank('test');
        expect(newState).toEqual(false);
    });
});

describe("filter array", () => {
    it('handles filtering array', () => {
        let array = ['ohio', 'florida', 'california', 'georgia'];
        let filter = ['ohio', 'florida'];
        const newState = filterFromArray(array, filter);
        expect(newState).toEqual([ 'california', 'georgia' ]);
    });
});

describe("title check", () => {
    it('handles checking title casing occurs', () => {
        const newState = toTitleCase('1 TEST STREET');
        expect(newState).toEqual('1 Test Street');
    })
})