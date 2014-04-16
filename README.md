# bio-dat

Examples of using https://github.com/maxogden/dat for bioinformatics (sequence) data.

## Usage

```bash

# initialize data store
dat init

# import some data
./cli.js seqs -n 1000 | dat import --csv --primary sequences 

```
