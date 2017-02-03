var expect = require('chai').expect,
    Base64Words = require('../src/index'),

    fromBase64 = Base64Words.fromBase64,
    toBase64 = Base64Words.toBase64,

    str64 = 'MTIzNDU2Njc3OA==',
    words = 'ducky-apron-finer-tulip-genre-finite-groom-anteater';


describe ('fromBase64', function ()
{
  it ('converts base64 to words', function () {
    expect(fromBase64(str64)).to.equal(words);
  });
});

describe ('toBase64', function ()
{
  it ('converts words to base64', function () {
    expect(toBase64(words)).to.equal(str64);
  });
});
