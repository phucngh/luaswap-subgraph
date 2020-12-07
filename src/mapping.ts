import { BigInt, log } from "@graphprotocol/graph-ts"
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
  WithdrawCollection
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
  deposits.save()
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
  emergencyWithdraws.save()
}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {
  let ownershipTransferreds = OwnershipTransferredCollection.load(event.transaction.hash.toHex() + "-" + event.logIndex.toString())
  if (ownershipTransferreds == null) {
    ownershipTransferreds = new OwnershipTransferredCollection(event.transaction.hash.toHex() + "-" + event.logIndex.toString())
  }
  ownershipTransferreds.id = event.transaction.hash.toHex() + "-" + event.logIndex.toString();
  ownershipTransferreds.previousOwner = event.params.previousOwner
  ownershipTransferreds.newOwner = event.params.newOwner
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
  sendLuaRewards.lockAmount = event.params.lockAmount
  sendLuaRewards.save()
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
  withdraws.save()
}