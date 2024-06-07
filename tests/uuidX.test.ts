import uuidX from '../uuidX';

describe('Testing UUID', () => {
    const v4 = uuidX.v4();

    describe('Check v4', () => {
        test('Generated type is string', () => {
            expect(typeof v4).toBe('string');
        })

        test('Expected 4 dahses', () => {
            expect(v4.split('-').length).toBe(5);
        })

        test('Expect a version 4 code', () => {
            const parts = v4.split('-');
            expect(parts[2].startsWith('4'));
        })
    })
})