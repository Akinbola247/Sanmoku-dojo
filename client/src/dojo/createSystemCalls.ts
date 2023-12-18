import { SetupNetworkResult } from "./setupNetwork";
import { Account } from "starknet";
import { Entity, getComponentValue } from "@dojoengine/recs";
import { uuid } from "@latticexyz/utils";
import { ClientComponents } from "./createClientComponents";
// import { Direction, updatePositionWithDirection } from "../utils";
import {getEntityIdFromKeys, getEvents, setComponentsFromEvents } from "@dojoengine/utils";

export type SystemCalls = ReturnType<typeof createSystemCalls>;

export function createSystemCalls(
  { execute, contractComponents, provider, }: SetupNetworkResult,
  { Board_state, ERC20Allowance,ERC20Balance,ERC20Meta,Game,Gate,Moves,Players }: ClientComponents
 ) {
  
  const initiate = async (signer: Account, player1 : string, player2: string ) => {
      
    try {
      const tx = await execute(signer, "actions", "initiate_game", [
        player1,
        player2,
      ]);
      const events = setComponentsFromEvents(
        contractComponents,
        getEvents(
          await signer.waitForTransaction(tx.transaction_hash, {
            retryInterval: 100,
          })
        )
      );
      console.log('initiate is',events)
      console.log('tx', tx)
      // return events[0].data[2]
    } catch (e) {
      console.log(e);
    }

  };

  const spawnavatar = async (signer: Account, avatar : string, gameid: string, playeraddress : string) => {
    // mint
    try {
      const tx = await execute(signer, "actions", "spawn", [
        avatar,
        gameid,
        playeraddress,
      ]);
      let events = setComponentsFromEvents(
        contractComponents,
        getEvents(
          await signer.waitForTransaction(tx.transaction_hash, {
            retryInterval: 100,
          })
        )
      );
      console.log('spawn is',events)
      console.log('tx', tx)
      // return events[0].data[2]
    } catch (e) {
      console.log(e);
    }

  };

  const registerPlayer = async (signer: Account, name : string) => {
    // mint
    try {
      const tx = await execute(signer, "actions", "register_player", [
        name
      ]);
      const events = setComponentsFromEvents(
        contractComponents,
        getEvents(
          await signer.waitForTransaction(tx.transaction_hash, {
            retryInterval: 100,
          })
        )
      );
      console.log('register is',events)
      console.log('tx', tx)
      // return events[0].data[2]
    } catch (e) {
      console.log(e);
    }

  };

  const restart = async (signer: Account, gameid : string, player1 : string, player2: string) => {
    // mint
    try {
      const tx = await execute(signer, "actions", "restart_game", [
        gameid,
        player1,
        player2
      ]);
      const events = getEvents(
        await signer.waitForTransaction(tx.transaction_hash, {
          retryInterval: 100,
        })
      );
      console.log(tx)
      console.log('restart',events)
      // return events[0].data[2]
    } catch (e) {
      console.log(e);
    }

  };

  return {
    initiate,
    spawnavatar,
    registerPlayer,
    restart
  };
}
