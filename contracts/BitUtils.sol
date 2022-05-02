// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

library BitUtils {

    function setBitAssembly(uint256 value, uint8 position)
        pure
        public
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
        public
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
        public
        returns (uint256)
    {
        uint256 mask = 1 << position;
        return value | mask;
    }

    function isBitSet(uint256 value, uint8 position)
        pure
        public
        returns (bool)
    {
        uint256 mask = 1 << position;
        return (value & mask) > 0;
    }
}