var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        // store res in variable
        // assert from matches value
        // assert text matches
        // assert createdAt is a number
        var from = "Sean";
        var text = "Hello";
        var res = generateMessage(from, text);
        expect(res.from).toBe(from);
        expect(res.text).toBe(text);
        expect(res.createdAt).toBeA('number');
    });
});