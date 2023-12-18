/* Autogenerated file. Do not edit manually. */

import { defineComponent, Type as RecsType, World } from "@latticexyz/recs";

export function defineContractComponents(world: World) {
  return {
	  Board_state: (() => {
	    return defineComponent(
	      world,
	      { game_id: RecsType.BigInt, a_1: RecsType.BigInt, a_2: RecsType.BigInt, a_3: RecsType.BigInt, b_1: RecsType.BigInt, b_2: RecsType.BigInt, b_3: RecsType.BigInt, c_1: RecsType.BigInt, c_2: RecsType.BigInt, c_3: RecsType.BigInt },
	      {
	        metadata: {
	          name: "Board_state",
	          types: [],
	        },
	      }
	    );
	  })(),
	  ERC20Allowance: (() => {
	    return defineComponent(
	      world,
	      { token: RecsType.String, owner: RecsType.String, spender: RecsType.String, amount: RecsType.BigInt },
	      {
	        metadata: {
	          name: "ERC20Allowance",
	          types: [],
	        },
	      }
	    );
	  })(),
	  ERC20Balance: (() => {
	    return defineComponent(
	      world,
	      { token: RecsType.String, account: RecsType.String, amount: RecsType.BigInt },
	      {
	        metadata: {
	          name: "ERC20Balance",
	          types: [],
	        },
	      }
	    );
	  })(),
	  ERC20Meta: (() => {
	    return defineComponent(
	      world,
	      { token: RecsType.String, name: RecsType.BigInt, symbol: RecsType.BigInt, total_supply: RecsType.BigInt },
	      {
	        metadata: {
	          name: "ERC20Meta",
	          types: [],
	        },
	      }
	    );
	  })(),
	  Fixedkey: (() => {
	    return defineComponent(
	      world,
	      { fixed_key: RecsType.String, counter: RecsType.BigInt },
	      {
	        metadata: {
	          name: "Fixedkey",
	          types: [],
	        },
	      }
	    );
	  })(),
	  Game: (() => {
	    return defineComponent(
	      world,
	      { game_id: RecsType.BigInt, winner: RecsType.BigInt, player_one_: RecsType.String, player_two_: RecsType.String },
	      {
	        metadata: {
	          name: "Game",
	          types: [],
	        },
	      }
	    );
	  })(),
	  Gate: (() => {
	    return defineComponent(
	      world,
	      { constantkey: RecsType.String, owner: RecsType.String, token_address: RecsType.String },
	      {
	        metadata: {
	          name: "Gate",
	          types: [],
	        },
	      }
	    );
	  })(),
	  Moves: (() => {
	    return defineComponent(
	      world,
	      { player: RecsType.String, opponent: RecsType.String, game_id: RecsType.BigInt, avatar_choice: RecsType.BigInt, move_one: RecsType.Number, move_two: RecsType.Number, move_three: RecsType.Number, move_four: RecsType.Number, move_five: RecsType.Number, counter: RecsType.Number, turn: RecsType.Boolean },
	      {
	        metadata: {
	          name: "Moves",
	          types: [],
	        },
	      }
	    );
	  })(),
	  Players: (() => {
	    return defineComponent(
	      world,
	      { player_address: RecsType.String, name_: RecsType.BigInt },
	      {
	        metadata: {
	          name: "Players",
	          types: [],
	        },
	      }
	    );
	  })(),
  };
}