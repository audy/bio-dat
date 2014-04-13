#!/usr/bin/env node

var minimist = require('minimist');

var argv = minimist(process.argv.slice(2));

var cmd = argv._[0];

// generate a random nucleotide sequence of length length.
function random_sequence(length) {
  var sequence = "";
  var nucleotides = "GATC";
  for (var i = 0; i < length; i++) {
    sequence += nucleotides.charAt(Math.floor(Math.random() * nucleotides.length));
  }
  return sequence
}

switch(cmd) {
  case "seqs":
    console.log('i,sequence');
    var i = 0;
    while (true) {
      console.log(i + ',' + random_sequence(100));
      i++;
    }
    break
}
