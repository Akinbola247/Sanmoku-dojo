import { GraphQLClient } from 'graphql-request';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
import { print } from 'graphql'
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  ContractAddress: { input: any; output: any; }
  Cursor: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  bool: { input: any; output: any; }
  felt252: { input: any; output: any; }
  u32: { input: any; output: any; }
  u256: { input: any; output: any; }
};

export type Board_State = {
  __typename?: 'Board_state';
  a_1?: Maybe<Scalars['felt252']['output']>;
  a_2?: Maybe<Scalars['felt252']['output']>;
  a_3?: Maybe<Scalars['felt252']['output']>;
  b_1?: Maybe<Scalars['felt252']['output']>;
  b_2?: Maybe<Scalars['felt252']['output']>;
  b_3?: Maybe<Scalars['felt252']['output']>;
  c_1?: Maybe<Scalars['felt252']['output']>;
  c_2?: Maybe<Scalars['felt252']['output']>;
  c_3?: Maybe<Scalars['felt252']['output']>;
  entity?: Maybe<World__Entity>;
  game_id?: Maybe<Scalars['felt252']['output']>;
};

export type Board_StateConnection = {
  __typename?: 'Board_stateConnection';
  edges?: Maybe<Array<Maybe<Board_StateEdge>>>;
  pageInfo: World__PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Board_StateEdge = {
  __typename?: 'Board_stateEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<Board_State>;
};

export type Board_StateOrder = {
  direction: OrderDirection;
  field: Board_StateOrderField;
};

export enum Board_StateOrderField {
  A_1 = 'A_1',
  A_2 = 'A_2',
  A_3 = 'A_3',
  B_1 = 'B_1',
  B_2 = 'B_2',
  B_3 = 'B_3',
  C_1 = 'C_1',
  C_2 = 'C_2',
  C_3 = 'C_3',
  GameId = 'GAME_ID'
}

export type Board_StateWhereInput = {
  a_1?: InputMaybe<Scalars['felt252']['input']>;
  a_1EQ?: InputMaybe<Scalars['felt252']['input']>;
  a_1GT?: InputMaybe<Scalars['felt252']['input']>;
  a_1GTE?: InputMaybe<Scalars['felt252']['input']>;
  a_1LT?: InputMaybe<Scalars['felt252']['input']>;
  a_1LTE?: InputMaybe<Scalars['felt252']['input']>;
  a_1NEQ?: InputMaybe<Scalars['felt252']['input']>;
  a_2?: InputMaybe<Scalars['felt252']['input']>;
  a_2EQ?: InputMaybe<Scalars['felt252']['input']>;
  a_2GT?: InputMaybe<Scalars['felt252']['input']>;
  a_2GTE?: InputMaybe<Scalars['felt252']['input']>;
  a_2LT?: InputMaybe<Scalars['felt252']['input']>;
  a_2LTE?: InputMaybe<Scalars['felt252']['input']>;
  a_2NEQ?: InputMaybe<Scalars['felt252']['input']>;
  a_3?: InputMaybe<Scalars['felt252']['input']>;
  a_3EQ?: InputMaybe<Scalars['felt252']['input']>;
  a_3GT?: InputMaybe<Scalars['felt252']['input']>;
  a_3GTE?: InputMaybe<Scalars['felt252']['input']>;
  a_3LT?: InputMaybe<Scalars['felt252']['input']>;
  a_3LTE?: InputMaybe<Scalars['felt252']['input']>;
  a_3NEQ?: InputMaybe<Scalars['felt252']['input']>;
  b_1?: InputMaybe<Scalars['felt252']['input']>;
  b_1EQ?: InputMaybe<Scalars['felt252']['input']>;
  b_1GT?: InputMaybe<Scalars['felt252']['input']>;
  b_1GTE?: InputMaybe<Scalars['felt252']['input']>;
  b_1LT?: InputMaybe<Scalars['felt252']['input']>;
  b_1LTE?: InputMaybe<Scalars['felt252']['input']>;
  b_1NEQ?: InputMaybe<Scalars['felt252']['input']>;
  b_2?: InputMaybe<Scalars['felt252']['input']>;
  b_2EQ?: InputMaybe<Scalars['felt252']['input']>;
  b_2GT?: InputMaybe<Scalars['felt252']['input']>;
  b_2GTE?: InputMaybe<Scalars['felt252']['input']>;
  b_2LT?: InputMaybe<Scalars['felt252']['input']>;
  b_2LTE?: InputMaybe<Scalars['felt252']['input']>;
  b_2NEQ?: InputMaybe<Scalars['felt252']['input']>;
  b_3?: InputMaybe<Scalars['felt252']['input']>;
  b_3EQ?: InputMaybe<Scalars['felt252']['input']>;
  b_3GT?: InputMaybe<Scalars['felt252']['input']>;
  b_3GTE?: InputMaybe<Scalars['felt252']['input']>;
  b_3LT?: InputMaybe<Scalars['felt252']['input']>;
  b_3LTE?: InputMaybe<Scalars['felt252']['input']>;
  b_3NEQ?: InputMaybe<Scalars['felt252']['input']>;
  c_1?: InputMaybe<Scalars['felt252']['input']>;
  c_1EQ?: InputMaybe<Scalars['felt252']['input']>;
  c_1GT?: InputMaybe<Scalars['felt252']['input']>;
  c_1GTE?: InputMaybe<Scalars['felt252']['input']>;
  c_1LT?: InputMaybe<Scalars['felt252']['input']>;
  c_1LTE?: InputMaybe<Scalars['felt252']['input']>;
  c_1NEQ?: InputMaybe<Scalars['felt252']['input']>;
  c_2?: InputMaybe<Scalars['felt252']['input']>;
  c_2EQ?: InputMaybe<Scalars['felt252']['input']>;
  c_2GT?: InputMaybe<Scalars['felt252']['input']>;
  c_2GTE?: InputMaybe<Scalars['felt252']['input']>;
  c_2LT?: InputMaybe<Scalars['felt252']['input']>;
  c_2LTE?: InputMaybe<Scalars['felt252']['input']>;
  c_2NEQ?: InputMaybe<Scalars['felt252']['input']>;
  c_3?: InputMaybe<Scalars['felt252']['input']>;
  c_3EQ?: InputMaybe<Scalars['felt252']['input']>;
  c_3GT?: InputMaybe<Scalars['felt252']['input']>;
  c_3GTE?: InputMaybe<Scalars['felt252']['input']>;
  c_3LT?: InputMaybe<Scalars['felt252']['input']>;
  c_3LTE?: InputMaybe<Scalars['felt252']['input']>;
  c_3NEQ?: InputMaybe<Scalars['felt252']['input']>;
  game_id?: InputMaybe<Scalars['felt252']['input']>;
  game_idEQ?: InputMaybe<Scalars['felt252']['input']>;
  game_idGT?: InputMaybe<Scalars['felt252']['input']>;
  game_idGTE?: InputMaybe<Scalars['felt252']['input']>;
  game_idLT?: InputMaybe<Scalars['felt252']['input']>;
  game_idLTE?: InputMaybe<Scalars['felt252']['input']>;
  game_idNEQ?: InputMaybe<Scalars['felt252']['input']>;
};

export type Erc20Allowance = {
  __typename?: 'ERC20Allowance';
  amount?: Maybe<Scalars['u256']['output']>;
  entity?: Maybe<World__Entity>;
  owner?: Maybe<Scalars['ContractAddress']['output']>;
  spender?: Maybe<Scalars['ContractAddress']['output']>;
  token?: Maybe<Scalars['ContractAddress']['output']>;
};

export type Erc20AllowanceConnection = {
  __typename?: 'ERC20AllowanceConnection';
  edges?: Maybe<Array<Maybe<Erc20AllowanceEdge>>>;
  pageInfo: World__PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Erc20AllowanceEdge = {
  __typename?: 'ERC20AllowanceEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<Erc20Allowance>;
};

export type Erc20AllowanceOrder = {
  direction: OrderDirection;
  field: Erc20AllowanceOrderField;
};

export enum Erc20AllowanceOrderField {
  Amount = 'AMOUNT',
  Owner = 'OWNER',
  Spender = 'SPENDER',
  Token = 'TOKEN'
}

export type Erc20AllowanceWhereInput = {
  amount?: InputMaybe<Scalars['u256']['input']>;
  amountEQ?: InputMaybe<Scalars['u256']['input']>;
  amountGT?: InputMaybe<Scalars['u256']['input']>;
  amountGTE?: InputMaybe<Scalars['u256']['input']>;
  amountLT?: InputMaybe<Scalars['u256']['input']>;
  amountLTE?: InputMaybe<Scalars['u256']['input']>;
  amountNEQ?: InputMaybe<Scalars['u256']['input']>;
  owner?: InputMaybe<Scalars['ContractAddress']['input']>;
  ownerEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  ownerGT?: InputMaybe<Scalars['ContractAddress']['input']>;
  ownerGTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  ownerLT?: InputMaybe<Scalars['ContractAddress']['input']>;
  ownerLTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  ownerNEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  spender?: InputMaybe<Scalars['ContractAddress']['input']>;
  spenderEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  spenderGT?: InputMaybe<Scalars['ContractAddress']['input']>;
  spenderGTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  spenderLT?: InputMaybe<Scalars['ContractAddress']['input']>;
  spenderLTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  spenderNEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  token?: InputMaybe<Scalars['ContractAddress']['input']>;
  tokenEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  tokenGT?: InputMaybe<Scalars['ContractAddress']['input']>;
  tokenGTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  tokenLT?: InputMaybe<Scalars['ContractAddress']['input']>;
  tokenLTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  tokenNEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
};

export type Erc20Balance = {
  __typename?: 'ERC20Balance';
  account?: Maybe<Scalars['ContractAddress']['output']>;
  amount?: Maybe<Scalars['u256']['output']>;
  entity?: Maybe<World__Entity>;
  token?: Maybe<Scalars['ContractAddress']['output']>;
};

export type Erc20BalanceConnection = {
  __typename?: 'ERC20BalanceConnection';
  edges?: Maybe<Array<Maybe<Erc20BalanceEdge>>>;
  pageInfo: World__PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Erc20BalanceEdge = {
  __typename?: 'ERC20BalanceEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<Erc20Balance>;
};

export type Erc20BalanceOrder = {
  direction: OrderDirection;
  field: Erc20BalanceOrderField;
};

export enum Erc20BalanceOrderField {
  Account = 'ACCOUNT',
  Amount = 'AMOUNT',
  Token = 'TOKEN'
}

export type Erc20BalanceWhereInput = {
  account?: InputMaybe<Scalars['ContractAddress']['input']>;
  accountEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  accountGT?: InputMaybe<Scalars['ContractAddress']['input']>;
  accountGTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  accountLT?: InputMaybe<Scalars['ContractAddress']['input']>;
  accountLTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  accountNEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  amount?: InputMaybe<Scalars['u256']['input']>;
  amountEQ?: InputMaybe<Scalars['u256']['input']>;
  amountGT?: InputMaybe<Scalars['u256']['input']>;
  amountGTE?: InputMaybe<Scalars['u256']['input']>;
  amountLT?: InputMaybe<Scalars['u256']['input']>;
  amountLTE?: InputMaybe<Scalars['u256']['input']>;
  amountNEQ?: InputMaybe<Scalars['u256']['input']>;
  token?: InputMaybe<Scalars['ContractAddress']['input']>;
  tokenEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  tokenGT?: InputMaybe<Scalars['ContractAddress']['input']>;
  tokenGTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  tokenLT?: InputMaybe<Scalars['ContractAddress']['input']>;
  tokenLTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  tokenNEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
};

export type Erc20Meta = {
  __typename?: 'ERC20Meta';
  entity?: Maybe<World__Entity>;
  name?: Maybe<Scalars['felt252']['output']>;
  symbol?: Maybe<Scalars['felt252']['output']>;
  token?: Maybe<Scalars['ContractAddress']['output']>;
  total_supply?: Maybe<Scalars['u256']['output']>;
};

export type Erc20MetaConnection = {
  __typename?: 'ERC20MetaConnection';
  edges?: Maybe<Array<Maybe<Erc20MetaEdge>>>;
  pageInfo: World__PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Erc20MetaEdge = {
  __typename?: 'ERC20MetaEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<Erc20Meta>;
};

export type Erc20MetaOrder = {
  direction: OrderDirection;
  field: Erc20MetaOrderField;
};

export enum Erc20MetaOrderField {
  Name = 'NAME',
  Symbol = 'SYMBOL',
  Token = 'TOKEN',
  TotalSupply = 'TOTAL_SUPPLY'
}

export type Erc20MetaWhereInput = {
  name?: InputMaybe<Scalars['felt252']['input']>;
  nameEQ?: InputMaybe<Scalars['felt252']['input']>;
  nameGT?: InputMaybe<Scalars['felt252']['input']>;
  nameGTE?: InputMaybe<Scalars['felt252']['input']>;
  nameLT?: InputMaybe<Scalars['felt252']['input']>;
  nameLTE?: InputMaybe<Scalars['felt252']['input']>;
  nameNEQ?: InputMaybe<Scalars['felt252']['input']>;
  symbol?: InputMaybe<Scalars['felt252']['input']>;
  symbolEQ?: InputMaybe<Scalars['felt252']['input']>;
  symbolGT?: InputMaybe<Scalars['felt252']['input']>;
  symbolGTE?: InputMaybe<Scalars['felt252']['input']>;
  symbolLT?: InputMaybe<Scalars['felt252']['input']>;
  symbolLTE?: InputMaybe<Scalars['felt252']['input']>;
  symbolNEQ?: InputMaybe<Scalars['felt252']['input']>;
  token?: InputMaybe<Scalars['ContractAddress']['input']>;
  tokenEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  tokenGT?: InputMaybe<Scalars['ContractAddress']['input']>;
  tokenGTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  tokenLT?: InputMaybe<Scalars['ContractAddress']['input']>;
  tokenLTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  tokenNEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  total_supply?: InputMaybe<Scalars['u256']['input']>;
  total_supplyEQ?: InputMaybe<Scalars['u256']['input']>;
  total_supplyGT?: InputMaybe<Scalars['u256']['input']>;
  total_supplyGTE?: InputMaybe<Scalars['u256']['input']>;
  total_supplyLT?: InputMaybe<Scalars['u256']['input']>;
  total_supplyLTE?: InputMaybe<Scalars['u256']['input']>;
  total_supplyNEQ?: InputMaybe<Scalars['u256']['input']>;
};

export type Fixedkey = {
  __typename?: 'Fixedkey';
  entity?: Maybe<World__Entity>;
  fixed_key?: Maybe<Scalars['ContractAddress']['output']>;
  worldcount?: Maybe<Scalars['felt252']['output']>;
};

export type FixedkeyConnection = {
  __typename?: 'FixedkeyConnection';
  edges?: Maybe<Array<Maybe<FixedkeyEdge>>>;
  pageInfo: World__PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type FixedkeyEdge = {
  __typename?: 'FixedkeyEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<Fixedkey>;
};

export type FixedkeyOrder = {
  direction: OrderDirection;
  field: FixedkeyOrderField;
};

export enum FixedkeyOrderField {
  FixedKey = 'FIXED_KEY',
  Worldcount = 'WORLDCOUNT'
}

export type FixedkeyWhereInput = {
  fixed_key?: InputMaybe<Scalars['ContractAddress']['input']>;
  fixed_keyEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  fixed_keyGT?: InputMaybe<Scalars['ContractAddress']['input']>;
  fixed_keyGTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  fixed_keyLT?: InputMaybe<Scalars['ContractAddress']['input']>;
  fixed_keyLTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  fixed_keyNEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  worldcount?: InputMaybe<Scalars['felt252']['input']>;
  worldcountEQ?: InputMaybe<Scalars['felt252']['input']>;
  worldcountGT?: InputMaybe<Scalars['felt252']['input']>;
  worldcountGTE?: InputMaybe<Scalars['felt252']['input']>;
  worldcountLT?: InputMaybe<Scalars['felt252']['input']>;
  worldcountLTE?: InputMaybe<Scalars['felt252']['input']>;
  worldcountNEQ?: InputMaybe<Scalars['felt252']['input']>;
};

export type Game = {
  __typename?: 'Game';
  entity?: Maybe<World__Entity>;
  game_id?: Maybe<Scalars['felt252']['output']>;
  player_one_?: Maybe<Scalars['ContractAddress']['output']>;
  player_two_?: Maybe<Scalars['ContractAddress']['output']>;
  winner?: Maybe<Scalars['felt252']['output']>;
};

export type GameConnection = {
  __typename?: 'GameConnection';
  edges?: Maybe<Array<Maybe<GameEdge>>>;
  pageInfo: World__PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type GameEdge = {
  __typename?: 'GameEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<Game>;
};

export type GameOrder = {
  direction: OrderDirection;
  field: GameOrderField;
};

export enum GameOrderField {
  GameId = 'GAME_ID',
  PlayerOne = 'PLAYER_ONE_',
  PlayerTwo = 'PLAYER_TWO_',
  Winner = 'WINNER'
}

export type GameWhereInput = {
  game_id?: InputMaybe<Scalars['felt252']['input']>;
  game_idEQ?: InputMaybe<Scalars['felt252']['input']>;
  game_idGT?: InputMaybe<Scalars['felt252']['input']>;
  game_idGTE?: InputMaybe<Scalars['felt252']['input']>;
  game_idLT?: InputMaybe<Scalars['felt252']['input']>;
  game_idLTE?: InputMaybe<Scalars['felt252']['input']>;
  game_idNEQ?: InputMaybe<Scalars['felt252']['input']>;
  player_one_?: InputMaybe<Scalars['ContractAddress']['input']>;
  player_one_EQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  player_one_GT?: InputMaybe<Scalars['ContractAddress']['input']>;
  player_one_GTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  player_one_LT?: InputMaybe<Scalars['ContractAddress']['input']>;
  player_one_LTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  player_one_NEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  player_two_?: InputMaybe<Scalars['ContractAddress']['input']>;
  player_two_EQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  player_two_GT?: InputMaybe<Scalars['ContractAddress']['input']>;
  player_two_GTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  player_two_LT?: InputMaybe<Scalars['ContractAddress']['input']>;
  player_two_LTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  player_two_NEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  winner?: InputMaybe<Scalars['felt252']['input']>;
  winnerEQ?: InputMaybe<Scalars['felt252']['input']>;
  winnerGT?: InputMaybe<Scalars['felt252']['input']>;
  winnerGTE?: InputMaybe<Scalars['felt252']['input']>;
  winnerLT?: InputMaybe<Scalars['felt252']['input']>;
  winnerLTE?: InputMaybe<Scalars['felt252']['input']>;
  winnerNEQ?: InputMaybe<Scalars['felt252']['input']>;
};

export type Gate = {
  __typename?: 'Gate';
  constantkey?: Maybe<Scalars['ContractAddress']['output']>;
  entity?: Maybe<World__Entity>;
  owner?: Maybe<Scalars['ContractAddress']['output']>;
  token_address?: Maybe<Scalars['ContractAddress']['output']>;
};

export type GateConnection = {
  __typename?: 'GateConnection';
  edges?: Maybe<Array<Maybe<GateEdge>>>;
  pageInfo: World__PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type GateEdge = {
  __typename?: 'GateEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<Gate>;
};

export type GateOrder = {
  direction: OrderDirection;
  field: GateOrderField;
};

export enum GateOrderField {
  Constantkey = 'CONSTANTKEY',
  Owner = 'OWNER',
  TokenAddress = 'TOKEN_ADDRESS'
}

export type GateWhereInput = {
  constantkey?: InputMaybe<Scalars['ContractAddress']['input']>;
  constantkeyEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  constantkeyGT?: InputMaybe<Scalars['ContractAddress']['input']>;
  constantkeyGTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  constantkeyLT?: InputMaybe<Scalars['ContractAddress']['input']>;
  constantkeyLTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  constantkeyNEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  owner?: InputMaybe<Scalars['ContractAddress']['input']>;
  ownerEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  ownerGT?: InputMaybe<Scalars['ContractAddress']['input']>;
  ownerGTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  ownerLT?: InputMaybe<Scalars['ContractAddress']['input']>;
  ownerLTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  ownerNEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  token_address?: InputMaybe<Scalars['ContractAddress']['input']>;
  token_addressEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  token_addressGT?: InputMaybe<Scalars['ContractAddress']['input']>;
  token_addressGTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  token_addressLT?: InputMaybe<Scalars['ContractAddress']['input']>;
  token_addressLTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  token_addressNEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
};

export type ModelUnion = Board_State | Erc20Allowance | Erc20Balance | Erc20Meta | Fixedkey | Game | Gate | Moves | Players;

export type Moves = {
  __typename?: 'Moves';
  avatar_choice?: Maybe<Scalars['felt252']['output']>;
  counter?: Maybe<Scalars['u32']['output']>;
  entity?: Maybe<World__Entity>;
  game_id?: Maybe<Scalars['felt252']['output']>;
  move_five?: Maybe<Scalars['u32']['output']>;
  move_four?: Maybe<Scalars['u32']['output']>;
  move_one?: Maybe<Scalars['u32']['output']>;
  move_three?: Maybe<Scalars['u32']['output']>;
  move_two?: Maybe<Scalars['u32']['output']>;
  opponent?: Maybe<Scalars['ContractAddress']['output']>;
  player?: Maybe<Scalars['ContractAddress']['output']>;
  turn?: Maybe<Scalars['bool']['output']>;
};

export type MovesConnection = {
  __typename?: 'MovesConnection';
  edges?: Maybe<Array<Maybe<MovesEdge>>>;
  pageInfo: World__PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type MovesEdge = {
  __typename?: 'MovesEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<Moves>;
};

export type MovesOrder = {
  direction: OrderDirection;
  field: MovesOrderField;
};

export enum MovesOrderField {
  AvatarChoice = 'AVATAR_CHOICE',
  Counter = 'COUNTER',
  GameId = 'GAME_ID',
  MoveFive = 'MOVE_FIVE',
  MoveFour = 'MOVE_FOUR',
  MoveOne = 'MOVE_ONE',
  MoveThree = 'MOVE_THREE',
  MoveTwo = 'MOVE_TWO',
  Opponent = 'OPPONENT',
  Player = 'PLAYER',
  Turn = 'TURN'
}

export type MovesWhereInput = {
  avatar_choice?: InputMaybe<Scalars['felt252']['input']>;
  avatar_choiceEQ?: InputMaybe<Scalars['felt252']['input']>;
  avatar_choiceGT?: InputMaybe<Scalars['felt252']['input']>;
  avatar_choiceGTE?: InputMaybe<Scalars['felt252']['input']>;
  avatar_choiceLT?: InputMaybe<Scalars['felt252']['input']>;
  avatar_choiceLTE?: InputMaybe<Scalars['felt252']['input']>;
  avatar_choiceNEQ?: InputMaybe<Scalars['felt252']['input']>;
  counter?: InputMaybe<Scalars['u32']['input']>;
  counterEQ?: InputMaybe<Scalars['u32']['input']>;
  counterGT?: InputMaybe<Scalars['u32']['input']>;
  counterGTE?: InputMaybe<Scalars['u32']['input']>;
  counterLT?: InputMaybe<Scalars['u32']['input']>;
  counterLTE?: InputMaybe<Scalars['u32']['input']>;
  counterNEQ?: InputMaybe<Scalars['u32']['input']>;
  game_id?: InputMaybe<Scalars['felt252']['input']>;
  game_idEQ?: InputMaybe<Scalars['felt252']['input']>;
  game_idGT?: InputMaybe<Scalars['felt252']['input']>;
  game_idGTE?: InputMaybe<Scalars['felt252']['input']>;
  game_idLT?: InputMaybe<Scalars['felt252']['input']>;
  game_idLTE?: InputMaybe<Scalars['felt252']['input']>;
  game_idNEQ?: InputMaybe<Scalars['felt252']['input']>;
  move_five?: InputMaybe<Scalars['u32']['input']>;
  move_fiveEQ?: InputMaybe<Scalars['u32']['input']>;
  move_fiveGT?: InputMaybe<Scalars['u32']['input']>;
  move_fiveGTE?: InputMaybe<Scalars['u32']['input']>;
  move_fiveLT?: InputMaybe<Scalars['u32']['input']>;
  move_fiveLTE?: InputMaybe<Scalars['u32']['input']>;
  move_fiveNEQ?: InputMaybe<Scalars['u32']['input']>;
  move_four?: InputMaybe<Scalars['u32']['input']>;
  move_fourEQ?: InputMaybe<Scalars['u32']['input']>;
  move_fourGT?: InputMaybe<Scalars['u32']['input']>;
  move_fourGTE?: InputMaybe<Scalars['u32']['input']>;
  move_fourLT?: InputMaybe<Scalars['u32']['input']>;
  move_fourLTE?: InputMaybe<Scalars['u32']['input']>;
  move_fourNEQ?: InputMaybe<Scalars['u32']['input']>;
  move_one?: InputMaybe<Scalars['u32']['input']>;
  move_oneEQ?: InputMaybe<Scalars['u32']['input']>;
  move_oneGT?: InputMaybe<Scalars['u32']['input']>;
  move_oneGTE?: InputMaybe<Scalars['u32']['input']>;
  move_oneLT?: InputMaybe<Scalars['u32']['input']>;
  move_oneLTE?: InputMaybe<Scalars['u32']['input']>;
  move_oneNEQ?: InputMaybe<Scalars['u32']['input']>;
  move_three?: InputMaybe<Scalars['u32']['input']>;
  move_threeEQ?: InputMaybe<Scalars['u32']['input']>;
  move_threeGT?: InputMaybe<Scalars['u32']['input']>;
  move_threeGTE?: InputMaybe<Scalars['u32']['input']>;
  move_threeLT?: InputMaybe<Scalars['u32']['input']>;
  move_threeLTE?: InputMaybe<Scalars['u32']['input']>;
  move_threeNEQ?: InputMaybe<Scalars['u32']['input']>;
  move_two?: InputMaybe<Scalars['u32']['input']>;
  move_twoEQ?: InputMaybe<Scalars['u32']['input']>;
  move_twoGT?: InputMaybe<Scalars['u32']['input']>;
  move_twoGTE?: InputMaybe<Scalars['u32']['input']>;
  move_twoLT?: InputMaybe<Scalars['u32']['input']>;
  move_twoLTE?: InputMaybe<Scalars['u32']['input']>;
  move_twoNEQ?: InputMaybe<Scalars['u32']['input']>;
  opponent?: InputMaybe<Scalars['ContractAddress']['input']>;
  opponentEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  opponentGT?: InputMaybe<Scalars['ContractAddress']['input']>;
  opponentGTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  opponentLT?: InputMaybe<Scalars['ContractAddress']['input']>;
  opponentLTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  opponentNEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  player?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerGT?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerGTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerLT?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerLTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerNEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  turn?: InputMaybe<Scalars['bool']['input']>;
};

export enum OrderDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type Players = {
  __typename?: 'Players';
  entity?: Maybe<World__Entity>;
  name_?: Maybe<Scalars['felt252']['output']>;
  player_address?: Maybe<Scalars['ContractAddress']['output']>;
};

export type PlayersConnection = {
  __typename?: 'PlayersConnection';
  edges?: Maybe<Array<Maybe<PlayersEdge>>>;
  pageInfo: World__PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type PlayersEdge = {
  __typename?: 'PlayersEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<Players>;
};

export type PlayersOrder = {
  direction: OrderDirection;
  field: PlayersOrderField;
};

export enum PlayersOrderField {
  Name = 'NAME_',
  PlayerAddress = 'PLAYER_ADDRESS'
}

export type PlayersWhereInput = {
  name_?: InputMaybe<Scalars['felt252']['input']>;
  name_EQ?: InputMaybe<Scalars['felt252']['input']>;
  name_GT?: InputMaybe<Scalars['felt252']['input']>;
  name_GTE?: InputMaybe<Scalars['felt252']['input']>;
  name_LT?: InputMaybe<Scalars['felt252']['input']>;
  name_LTE?: InputMaybe<Scalars['felt252']['input']>;
  name_NEQ?: InputMaybe<Scalars['felt252']['input']>;
  player_address?: InputMaybe<Scalars['ContractAddress']['input']>;
  player_addressEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  player_addressGT?: InputMaybe<Scalars['ContractAddress']['input']>;
  player_addressGTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  player_addressLT?: InputMaybe<Scalars['ContractAddress']['input']>;
  player_addressLTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  player_addressNEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
};

export type World__Content = {
  __typename?: 'World__Content';
  coverUri?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  iconUri?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  socials?: Maybe<Array<Maybe<World__Social>>>;
  website?: Maybe<Scalars['String']['output']>;
};

export type World__Entity = {
  __typename?: 'World__Entity';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  eventId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  keys?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  models?: Maybe<Array<Maybe<ModelUnion>>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type World__EntityConnection = {
  __typename?: 'World__EntityConnection';
  edges?: Maybe<Array<Maybe<World__EntityEdge>>>;
  pageInfo: World__PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type World__EntityEdge = {
  __typename?: 'World__EntityEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<World__Entity>;
};

export type World__Event = {
  __typename?: 'World__Event';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  data?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  id?: Maybe<Scalars['ID']['output']>;
  keys?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  transactionHash?: Maybe<Scalars['String']['output']>;
};

export type World__EventConnection = {
  __typename?: 'World__EventConnection';
  edges?: Maybe<Array<Maybe<World__EventEdge>>>;
  pageInfo: World__PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type World__EventEdge = {
  __typename?: 'World__EventEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<World__Event>;
};

export type World__Metadata = {
  __typename?: 'World__Metadata';
  content?: Maybe<World__Content>;
  coverImg?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  iconImg?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  uri?: Maybe<Scalars['String']['output']>;
  worldAddress: Scalars['String']['output'];
};

export type World__MetadataConnection = {
  __typename?: 'World__MetadataConnection';
  edges?: Maybe<Array<Maybe<World__MetadataEdge>>>;
  pageInfo: World__PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type World__MetadataEdge = {
  __typename?: 'World__MetadataEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<World__Metadata>;
};

export type World__Model = {
  __typename?: 'World__Model';
  classHash?: Maybe<Scalars['felt252']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  transactionHash?: Maybe<Scalars['felt252']['output']>;
};

export type World__ModelConnection = {
  __typename?: 'World__ModelConnection';
  edges?: Maybe<Array<Maybe<World__ModelEdge>>>;
  pageInfo: World__PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type World__ModelEdge = {
  __typename?: 'World__ModelEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<World__Model>;
};

export type World__PageInfo = {
  __typename?: 'World__PageInfo';
  endCursor?: Maybe<Scalars['Cursor']['output']>;
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  hasPreviousPage?: Maybe<Scalars['Boolean']['output']>;
  startCursor?: Maybe<Scalars['Cursor']['output']>;
};

export type World__Query = {
  __typename?: 'World__Query';
  board_stateModels?: Maybe<Board_StateConnection>;
  entities?: Maybe<World__EntityConnection>;
  entity: World__Entity;
  erc20allowanceModels?: Maybe<Erc20AllowanceConnection>;
  erc20balanceModels?: Maybe<Erc20BalanceConnection>;
  erc20metaModels?: Maybe<Erc20MetaConnection>;
  events?: Maybe<World__EventConnection>;
  fixedkeyModels?: Maybe<FixedkeyConnection>;
  gameModels?: Maybe<GameConnection>;
  gateModels?: Maybe<GateConnection>;
  metadatas?: Maybe<World__MetadataConnection>;
  model: World__Model;
  models?: Maybe<World__ModelConnection>;
  movesModels?: Maybe<MovesConnection>;
  playersModels?: Maybe<PlayersConnection>;
  transaction: World__Transaction;
  transactions?: Maybe<World__TransactionConnection>;
};


export type World__QueryBoard_StateModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Board_StateOrder>;
  where?: InputMaybe<Board_StateWhereInput>;
};


export type World__QueryEntitiesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  keys?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type World__QueryEntityArgs = {
  id: Scalars['ID']['input'];
};


export type World__QueryErc20allowanceModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Erc20AllowanceOrder>;
  where?: InputMaybe<Erc20AllowanceWhereInput>;
};


export type World__QueryErc20balanceModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Erc20BalanceOrder>;
  where?: InputMaybe<Erc20BalanceWhereInput>;
};


export type World__QueryErc20metaModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Erc20MetaOrder>;
  where?: InputMaybe<Erc20MetaWhereInput>;
};


export type World__QueryEventsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  keys?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type World__QueryFixedkeyModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<FixedkeyOrder>;
  where?: InputMaybe<FixedkeyWhereInput>;
};


export type World__QueryGameModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<GameOrder>;
  where?: InputMaybe<GameWhereInput>;
};


export type World__QueryGateModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<GateOrder>;
  where?: InputMaybe<GateWhereInput>;
};


export type World__QueryMetadatasArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type World__QueryModelArgs = {
  id: Scalars['ID']['input'];
};


export type World__QueryModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type World__QueryMovesModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<MovesOrder>;
  where?: InputMaybe<MovesWhereInput>;
};


export type World__QueryPlayersModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<PlayersOrder>;
  where?: InputMaybe<PlayersWhereInput>;
};


export type World__QueryTransactionArgs = {
  id: Scalars['ID']['input'];
};


export type World__QueryTransactionsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type World__Social = {
  __typename?: 'World__Social';
  name?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type World__Subscription = {
  __typename?: 'World__Subscription';
  entityUpdated: World__Entity;
  eventEmitted: World__Event;
  modelRegistered: World__Model;
};


export type World__SubscriptionEntityUpdatedArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type World__SubscriptionEventEmittedArgs = {
  keys?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type World__SubscriptionModelRegisteredArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type World__Transaction = {
  __typename?: 'World__Transaction';
  calldata?: Maybe<Array<Maybe<Scalars['felt252']['output']>>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  maxFee?: Maybe<Scalars['felt252']['output']>;
  nonce?: Maybe<Scalars['felt252']['output']>;
  senderAddress?: Maybe<Scalars['felt252']['output']>;
  signature?: Maybe<Array<Maybe<Scalars['felt252']['output']>>>;
  transactionHash?: Maybe<Scalars['felt252']['output']>;
};

export type World__TransactionConnection = {
  __typename?: 'World__TransactionConnection';
  edges?: Maybe<Array<Maybe<World__TransactionEdge>>>;
  pageInfo: World__PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type World__TransactionEdge = {
  __typename?: 'World__TransactionEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<World__Transaction>;
};

export type GetEntitiesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetEntitiesQuery = { __typename?: 'World__Query', entities?: { __typename?: 'World__EntityConnection', edges?: Array<{ __typename?: 'World__EntityEdge', node?: { __typename?: 'World__Entity', keys?: Array<string | null> | null, models?: Array<{ __typename: 'Board_state', a_1?: any | null, a_2?: any | null, a_3?: any | null, b_1?: any | null, b_2?: any | null, b_3?: any | null, c_1?: any | null, c_2?: any | null, c_3?: any | null } | { __typename: 'ERC20Allowance' } | { __typename: 'ERC20Balance' } | { __typename: 'ERC20Meta' } | { __typename: 'Fixedkey', worldcount?: any | null } | { __typename: 'Game', winner?: any | null, player_one_?: any | null, player_two_?: any | null } | { __typename: 'Gate', owner?: any | null, token_address?: any | null } | { __typename: 'Moves', opponent?: any | null, game_id?: any | null, avatar_choice?: any | null, move_one?: any | null, move_two?: any | null, move_three?: any | null, move_four?: any | null, move_five?: any | null, counter?: any | null, turn?: any | null } | { __typename: 'Players', name_?: any | null } | null> | null } | null } | null> | null } | null };


export const GetEntitiesDocument = gql`
    query getEntities {
  entities(keys: ["*"]) {
    edges {
      node {
        keys
        models {
          __typename
          ... on Moves {
            opponent
            game_id
            avatar_choice
            move_one
            move_two
            move_three
            move_four
            move_five
            counter
            turn
          }
          ... on Board_state {
            a_1
            a_2
            a_3
            b_1
            b_2
            b_3
            c_1
            c_2
            c_3
          }
          ... on Game {
            winner
            player_one_
            player_two_
          }
          ... on Gate {
            owner
            token_address
          }
          ... on Players {
            name_
          }
          ... on Fixedkey {
            worldcount
          }
        }
      }
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();
const GetEntitiesDocumentString = print(GetEntitiesDocument);
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getEntities(variables?: GetEntitiesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: GetEntitiesQuery; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GetEntitiesQuery>(GetEntitiesDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getEntities', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;