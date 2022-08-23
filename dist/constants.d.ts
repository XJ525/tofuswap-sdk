import JSBI from 'jsbi';
export declare type BigintIsh = JSBI | bigint | string;
export declare enum ChainId {
    MAINNET = 11111,
    NILE = 201910292,
    SHASTA = 1
}
export declare enum TradeType {
    EXACT_INPUT = 0,
    EXACT_OUTPUT = 1
}
export declare enum Rounding {
    ROUND_DOWN = 0,
    ROUND_HALF_UP = 1,
    ROUND_UP = 2
}
export declare const FACTORY_ADDRESS = "0xc31f30448cb48d0822c0e94573b1fb7671883e09";
export declare const TOFU_FREEZER_ADDRESS = "0x4B51442c89d2A87480F29A5470FDc3f9619869E1";
export declare const INIT_CODE_HASH = "0x9a276da79c5556bb068dcd272cffa5b6a813c757c1d161722caaf65234be463b";
export declare const MINIMUM_LIQUIDITY: JSBI;
export declare const ZERO: JSBI;
export declare const ONE: JSBI;
export declare const TWO: JSBI;
export declare const THREE: JSBI;
export declare const FIVE: JSBI;
export declare const TEN: JSBI;
export declare const _100: JSBI;
export declare const _9970: JSBI;
export declare const _9975: JSBI;
export declare const _9980: JSBI;
export declare const _9985: JSBI;
export declare const _9990: JSBI;
export declare const _10000: JSBI;
export declare const _100000000: JSBI;
export declare const _1000000000: JSBI;
export declare const _10000000000: JSBI;
export declare const _100000000000: JSBI;
export declare enum SolidityType {
    uint8 = "uint8",
    uint256 = "uint256"
}
export declare const SOLIDITY_TYPE_MAXIMA: {
    uint8: JSBI;
    uint256: JSBI;
};
