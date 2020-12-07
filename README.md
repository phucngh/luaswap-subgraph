# LuaSwap Subgraph

Aims to deliver analytics & historical data for LuaSwap. Still a work in progress. Feel free to contribute!

The Graph exposes a GraphQL endpoint to query the events and entities within the LuaSwap ecosytem.

**LuaSwap**: Currently only has support for current MasterFarmer and MasterFarmerPool data: https://thegraph.com/explorer/subgraph/minatofund/lua-swap

## Example Queries

We will add to this as development progresses.

### Maker

```graphql
{
  depositCollections(first: 5) {
    id
    user
    pid
    amount
  }
  emergencyWithdrawCollections(first: 5) {
    id
    user
    pid
    amount
  }
}
```
