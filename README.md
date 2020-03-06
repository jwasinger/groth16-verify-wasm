# Groth16 Verify Wasm

Implementation of Groth16 Proof Verification in Assemblyscript

## Usage

`npm install && npm run build`

See `package.json` for various benchmarking options.  Proof used for benchmarking is from a Tornado Cash withdrawal.

## Proof Serialization Format

```
Verification Key:
    A - 96 bytes
    B - 192 bytes
    C - 192 Bytes

Proof:
    A - 96 bytes
    B - 192 bytes
    G - 192 bytes
    D - 192 bytes

Input Constraints:
    Number of input constraints - 32 bit unsigned integer (little endian)
    Input Constraints - number of input constraints * 96 bytes

Public Inputs:
    Number of public inputs - 32 bit unsigned integer (little endian) 
    Public Inputs - number of public inputs * 32 bytes
```
