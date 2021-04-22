import {  Address, BigDecimal, BigInt, dataSource, ethereum, log } from "@graphprotocol/graph-ts"
import {
  BIG_DECIMAL_1E12,
  BIG_DECIMAL_1E18,
  BIG_DECIMAL_ZERO,
  BIG_INT_ONE,
  BIG_INT_ONE_DAY_SECONDS,
  BIG_INT_ZERO,
  LOCKUP_BLOCK_NUMBER,
  MASTER_FARMER_ADDRESS,
  MASTER_FARMER_START_BLOCK,
  LUA_TOKEN_ADDRESS,
} from './constants'
import {
  Contract,
  Deposit,
  EmergencyWithdraw,
  OwnershipTransferred,
  SendLuaReward,
  Withdraw
} from "../generated/Contract/Contract"
import { 
  DepositCollection, 
  EmergencyWithdrawCollection,
  OwnershipTransferredCollection,
  SendLuaRewardCollection,
  WithdrawCollection,
  User
} from "../generated/schema"

export function handleDeposit(event: Deposit): void {
  let deposits = DepositCollection.load(event.transaction.hash.toHex() + "-" + event.logIndex.toString())
  if (deposits == null) {
    deposits = new DepositCollection(event.transaction.hash.toHex() + "-" + event.logIndex.toString())
  }
  deposits.id = event.transaction.hash.toHex() + "-" + event.logIndex.toString();
  deposits.user = event.params.user
  deposits.pid = event.params.pid
  deposits.amount = event.params.amount
  deposits.timestamp = event.block.timestamp
  deposits.save()

  const user = getUser(event.params.pid, event.params.user, event.block)
  user.amount = user.amount.plus(deposits.amount)
  user.save()
}

export function handleEmergencyWithdraw(event: EmergencyWithdraw): void {
  let emergencyWithdraws = EmergencyWithdrawCollection.load(event.transaction.hash.toHex() + "-" + event.logIndex.toString())
  if (emergencyWithdraws == null) {
    emergencyWithdraws = new EmergencyWithdrawCollection(event.transaction.hash.toHex() + "-" + event.logIndex.toString())
  }
  emergencyWithdraws.id = event.transaction.hash.toHex() + "-" + event.logIndex.toString();
  emergencyWithdraws.user = event.params.user
  emergencyWithdraws.pid = event.params.pid
  emergencyWithdraws.amount = event.params.amount
  emergencyWithdraws.timestamp = event.block.timestamp
  emergencyWithdraws.save()

  const user = getUser(event.params.pid, event.params.user, event.block)
  user.amount = user.amount.minus(emergencyWithdraws.amount)
  user.save()
}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {
  let ownershipTransferreds = OwnershipTransferredCollection.load(event.transaction.hash.toHex() + "-" + event.logIndex.toString())
  if (ownershipTransferreds == null) {
    ownershipTransferreds = new OwnershipTransferredCollection(event.transaction.hash.toHex() + "-" + event.logIndex.toString())
  }
  ownershipTransferreds.id = event.transaction.hash.toHex() + "-" + event.logIndex.toString();
  ownershipTransferreds.previousOwner = event.params.previousOwner
  ownershipTransferreds.newOwner = event.params.newOwner
  ownershipTransferreds.timestamp = event.block.timestamp
  ownershipTransferreds.save()
}

export function handleSendLuaReward(event: SendLuaReward): void {
  let sendLuaRewards = SendLuaRewardCollection.load(event.transaction.hash.toHex() + "-" + event.logIndex.toString())
  if (sendLuaRewards == null) {
    sendLuaRewards = new SendLuaRewardCollection(event.transaction.hash.toHex() + "-" + event.logIndex.toString())
  }
  sendLuaRewards.id = event.transaction.hash.toHex() + "-" + event.logIndex.toString();
  sendLuaRewards.user = event.params.user
  sendLuaRewards.pid = event.params.pid
  sendLuaRewards.amount = event.params.amount
  // sendLuaRewards.lockAmount = event.params.lockAmount
  sendLuaRewards.timestamp = event.block.timestamp
  sendLuaRewards.save()

  const user = getUser(event.params.pid, event.params.user, event.block)
  user.amount = user.amount.plus(sendLuaRewards.amount)
  user.save()
}

export function handleWithdraw(event: Withdraw): void {
  let withdraws = WithdrawCollection.load(event.transaction.hash.toHex() + "-" + event.logIndex.toString())
  if (withdraws == null) {
    withdraws = new WithdrawCollection(event.transaction.hash.toHex() + "-" + event.logIndex.toString())
  }
  withdraws.id = event.transaction.hash.toHex() + "-" + event.logIndex.toString();
  withdraws.user = event.params.user
  withdraws.pid = event.params.pid
  withdraws.amount = event.params.amount
  withdraws.timestamp = event.block.timestamp
  withdraws.save()

  const user = getUser(event.params.pid, event.params.user, event.block)
  user.amount = user.amount.minus(withdraws.amount)
  user.save()
}

export function getUser(pid: BigInt, address: Address, block: ethereum.Block): User {
  const uid = address.toHex()
  const id = pid.toString().concat('-').concat(uid)

  let user = User.load(id)

  if (user === null) {
    user = new User(id)
    user.address = address
    user.amount = BIG_INT_ZERO
    user.timestamp = block.timestamp
    user.save()
  }

  return user as User
}