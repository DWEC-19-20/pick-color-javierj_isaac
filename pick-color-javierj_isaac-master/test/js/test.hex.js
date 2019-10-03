var assert = chai.assert,
    expect = chai.expect;

suite("Testing hex valores dentro del rango", function() {
    test("Test pasado", function() {
        expect(hex("0xFFFFFF")).to.equal('255255255');
    });
    test("Test pasado", function() {
        expect(hex("0x000000")).to.equal('000000000');
    });
    test("Test pasado", function() {
        expect(hex("0x9400D3")).to.equal('148000211');
    });
     test("Test pasado", function() {
        expect(hex("0x4286F4")).to.equal('066134244');
    });
    test("Test pasado", function() {
        expect(hex("0x010101")).to.equal('001001001');
    });
    test("Test pasado", function() {
        expect(hex("0x0F0F0F")).to.equal('015015015');
    });
    test("Test pasado", function() {
        expect(hex("0x101010")).to.equal('016016016');
    });
    test("Test pasado", function() {
        expect(hex("0xF0F0F0")).to.equal('240240240');
    });
    test("Test pasado", function() {
        expect(hex("0x111111")).to.equal('017017017');
    });

});



