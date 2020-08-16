fdescribe('hello-test', () => {
    let expected:String;

    beforeEach(()=>{
        expected = 'hellotest';
    });

    it('checks if hellotest is hellotest', () => {
        expect('hellotest').toBe(expected);
    });
    it('checks if hellotest1 is not hellotest', () => {
        expect('hellotes1').not.toBe(expected);
    });
});