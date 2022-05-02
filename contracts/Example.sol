// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// In order to use library without external calls, function visibility should
// be changed to 'internal'. External calls are much more expensive in terms of gas.
library BitUtils {

    function setBitAssembly(uint256 value, uint8 position)
        pure
        internal
        returns (uint256)
    {
        uint256 result;
        assembly {
            let mask := shl(position, 1)
            result := or(value, mask)
        }
        return result;
    }

    function isBitSetAssembly(uint256 value, uint8 position)
        pure
        internal
        returns (bool)
    {
        bool result;
        assembly {
            let mask := shl(position, 1)
            result := gt(and(value, mask), 0)
        }
        return result;
    }

    function setBit(uint256 value, uint8 position)
        pure
        internal
        returns (uint256)
    {
        uint256 mask = 1 << position;
        return value | mask;
    }

    function isBitSet(uint256 value, uint8 position)
        pure
        internal
        returns (bool)
    {
        uint256 mask = 1 << position;
        return (value & mask) > 0;
    }
}

contract Example {

    function callSetBit(uint256 value, uint8 position, uint256 times) external {
        for (uint256 i = 0; i < times; i++) {
            uint256 result = BitUtils.setBit(value, position);
        }
    }

    function callSetBitAssembly(uint256 value, uint8 position, uint256 times) external {
        for (uint256 i = 0; i < times; i++) {
            uint256 result = BitUtils.setBitAssembly(value, position);
        }
    }

    function callIsBitSet(uint256 value, uint8 position, uint256 times) external {
        for (uint256 i = 0; i < times; i++) {
            bool result = BitUtils.isBitSet(value, position);
        }
    }

    function callIsBitSetAssembly(uint256 value, uint8 position, uint256 times) external {
        for (uint256 i = 0; i < times; i++) {
            bool result = BitUtils.isBitSetAssembly(value, position);
        }
    }
}