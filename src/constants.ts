import { Address, BigDecimal, BigInt } from '@graphprotocol/graph-ts'

export const ADDRESS_ZERO = Address.fromString('0x0000000000000000000000000000000000000000')

export const BIG_DECIMAL_1E6 = BigDecimal.fromString('1e6')

export const BIG_DECIMAL_1E12 = BigDecimal.fromString('1e12')

export const BIG_DECIMAL_1E18 = BigDecimal.fromString('1e18')

export const BIG_DECIMAL_ZERO = BigDecimal.fromString('0')

export const BIG_DECIMAL_ONE = BigDecimal.fromString('1')

export const BIG_INT_ONE = BigInt.fromI32(1)

export const BIG_INT_ONE_DAY_SECONDS = BigInt.fromI32(86400)

export const BIG_INT_ZERO = BigInt.fromI32(0)

export const LOCKUP_POOL_NUMBER = BigInt.fromI32(29)

export const FACTORY_ADDRESS = Address.fromString('0xc0aee478e3658e2610c5f7a4a2e1777ce9e4f2ac')

export const LOCKUP_BLOCK_NUMBER = BigInt.fromI32(10959148)

export const MASTER_FARMER_ADDRESS = Address.fromString('0xb67D7a6644d9E191Cac4DA2B88D6817351C7fF62')

export const LUA_MAKER_ADDRESS = Address.fromString('0x0fcb3b6232a2ad0af2f0602acd759d634743579f')

export const LUA_TOKEN_ADDRESS = Address.fromString('0xB1f66997A5760428D3a87D68b90BfE0aE64121cC')

export const WETH_ADDRESS = Address.fromString('0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2')

export const USDT_ADDRESS = Address.fromString('0xdac17f958d2ee523a2206206994597c13d831ec7')

export const MASTER_FARMER_START_BLOCK = BigInt.fromI32(10940000)

export const UNISWAP_LUA_ETH_PAIR_FIRST_LIQUDITY_BLOCK = BigInt.fromI32(10940005)
export const UNISWAP_FACTORY_ADDRESS = Address.fromString('0x5c69bee701ef814a2b6a3edd4b1652cb9cc5aa6f')
export const UNISWAP_WETH_USDT_PAIR_ADDRESS = Address.fromString('0x0d4a11d5eeaac28ec3f61d100daf4d40471f1852')
export const UNISWAP_LUA_ETH_PAIR_ADDRESS = Address.fromString('0xc5d3c66133a6264b0f2e712b8e10ef96efb93eb2')
export const UNISWAP_LUA_USDT_PAIR_ADDRESS = Address.fromString('0x1ed17bd61d062d63913065499ee147b2f154c49b')
