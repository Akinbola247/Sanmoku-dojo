use starknet::ContractAddress;

#[derive(Drop, Clone, Serde, PartialEq, starknet::Event)]
struct Spawn {
    player_1: ContractAddress,
    player_2: ContractAddress,
    game_id : felt252
}

#[derive(Drop, Clone, Serde, PartialEq, starknet::Event)]
enum Event {
    Moved: Spawn,
}