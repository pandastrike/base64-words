'use strict'

var dictionary = require('./dicewords.js');

exports.dictionary = dictionary
exports.fromBase64 = fromBase64
exports.toBase64 = toBase64

var base64Map = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/-_='

// a base64 pair provides 4096 (64x64) possible values
// create the reverse word map using the base64 pairs
var reverseWordsMap = {};
var wordsMap = {};

function init ()
{
  for (var i = 0, len = base64Map.length; i < len; i++)
  {
    var base = i * len;
    var pair, word;

    // create the word <=> base64 maps
    // "epoxy": "bG"
    // "bG": "epoxy"
    for (var j = 0; j < len; j++)
    {
      word = dictionary[base + j];
      pair = base64Map[i] + base64Map[j];
      wordsMap[pair] = word;
      reverseWordsMap[word] = pair;
    }
  }
}



init()



function fromBase64 (str64, separator)
{
  separator = separator ? separator : '-';
  var words = [];

  // convert each pair of base64 characters into a word
  // base64 encoding always returns a string length that is a multiple of 4
  var len = str64.length;
  for (var i = 0; i < len; i += 2)
  {
    words.push(wordsMap[str64.substr(i, 2)])
  }

  return words.join(separator);
}



function toBase64 (words64, separator)
{
  separator = separator ? separator : '-';
  var str64 = '';
  var words = words64.split(separator);

  // convert each word into a pair of base64 characters
  // base64 encoding always returns a string length that is a multiple of 4
  var len = words.length;
  for (var i = 0; i < len; i++)
  {
    str64 += reverseWordsMap[words[i]];
  }

  // return the base64 encoded string
  return str64;
}
