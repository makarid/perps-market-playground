// import {SettlementStrategy} from "./generated/schema";
// import {SettlementStrategySet} from "./generated/PerpsMarketProxy/PerpsMarketProxy";
//
//
// export function handleSettlementStrategyEnabled(event: SettlementStrategySet): void {
//   const id = event.params.strategyId.toString() + '-' + event.params.marketId.toString();
//   const strategy = SettlementStrategy.load(id);
//
//   if (!strategy) {
//     return;
//   }
//     event.params
//   strategy.strategyId = event.params.strategyId;
//   strategy.save();
// }
