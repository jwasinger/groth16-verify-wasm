import { groth16_verify } from "./groth16_verify";

const SIZE_F = 32;
const result_failure: Array<u64> = [ 0x0, 0x0, 0x0, 0x0];
const result_success: Array<u64> = [ 0x0, 0x0, 0x0, 0x1];

@external("env", "debug_printMemHex")
export declare function debug_mem(pos: i32, len: i32): void;

@external("env", "eth2_blockDataSize")
export declare function input_size(): i32;

@external("env", "eth2_blockDataCopy")
export declare function input_data_copy(outputOffset: i32, srcOffset: i32, length: i32): void;

@external("env", "eth2_loadPreStateRoot")
export declare function prestate_copy(dst: i32): void;

@external("env", "eth2_savePostStateRoot")
export declare function save_output(offset: i32): void;

export function main(): i32 {
    let input_data_len = input_size();
    let input_data_buff = new ArrayBuffer(input_data_len);
    input_data_copy(input_data_buff as usize, 0, input_data_len);

    //debug_mem(input_data_buff as usize, SIZE_F * 32);

    if(groth16_verify(input_data_buff as usize) != 0) {
        save_output(result_failure.buffer as usize);
    } else {
        save_output(result_success.buffer as usize);
    }

    return 0;
}
