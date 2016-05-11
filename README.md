# base64-words

Convert base64 strings into human-friendly words.

## Installation

```
npm install base64-words --save
```

## Usage

### Convert A Base64 String into Words

```
var Base64Words = require('base64-words');

var str64 = new Buffer("1234566778").toString('base64');

var words = Base64Words.fromBase64(str64);

console.log('base64', str64, 'words', words);
```

### Convert The Words Back to Base64

```
var Base64Words = require('base64-words');

var words = 'bulk-birch-bye-day-cal-fare-cargo-pn';

var str64 = Base64Words.toBase64(words);

console.log('words', words, 'base64', str64);
```

## Tests

```
npm test
```
