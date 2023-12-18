import { overridableComponent } from "@latticexyz/recs";
import { SetupNetworkResult } from "./setupNetwork";

export type ClientComponents = ReturnType<typeof createClientComponents>;

export function createClientComponents({
  contractComponents,
}: SetupNetworkResult) {
  return {
    ...contractComponents,
    Board_state: overridableComponent(contractComponents.Board_state),
    ERC20Allowance: overridableComponent(contractComponents.ERC20Allowance),
    ERC20Balance: overridableComponent(contractComponents.ERC20Balance),
    ERC20Meta: overridableComponent(contractComponents.ERC20Meta),
    Game: overridableComponent(contractComponents.Game),
    Gate: overridableComponent(contractComponents.Gate),
    Moves: overridableComponent(contractComponents.Moves),
    Players: overridableComponent(contractComponents.Players),
    Fixedkey: overridableComponent(contractComponents.Fixedkey)
  };
}
