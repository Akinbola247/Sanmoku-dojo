use starknet::ContractAddress;
use debug::PrintTrait;

#[derive(Component, Copy, Drop, Serde, SerdeLen)]
struct Moves {
    #[key]
    player: ContractAddress,
    game_id: felt252,
    avatar_choice: felt252,
    move_one: u32,
    move_two: u32,
    move_three: u32,
    move_four: u32,
    move_five: u32,
}

#[derive(Component, Copy, Drop, Serde, SerdeLen)]
struct Position {
    #[key]
    player: ContractAddress,
    game_id: felt252,
    a_1: u32,
    a_2: u32,
    a_3: u32,
    b_1: u32,
    b_2: u32,
    b_3: u32,
    c_1: u32,
    c_2: u32,
    c_3: u32,
}

#[derive(Component, Copy, Drop, Serde, SerdeLen)]
struct Player_turn {
    #[key]
    game_id: felt252,
    X: bool,
    O: bool,
}

#[derive(Component, Copy, Drop, Serde, SerdeLen)]
struct Game {
    #[key]
    game_id: felt252,
    winner: felt252,
    X: ContractAddress,
    O: ContractAddress
}















// trait PositionTrait {
//     fn is_zero(self: Position) -> bool;
//     fn is_equal(self: Position, b: Position) -> bool;
// }

// impl PositionImpl of PositionTrait {
//     fn is_zero(self: Position) -> bool {
//         if self.x - self.y == 0 {
//             return true;
//         }
//         false
//     }

//     fn is_equal(self: Position, b: Position) -> bool {
//         self.x == b.x && self.y == b.y
//     }
// }

// #[cfg(test)]
// mod tests {
//     use super::{Position, PositionTrait};

//     #[test]
//     #[available_gas(100000)]
//     fn test_position_is_zero() {
//         let player = starknet::contract_address_const::<0x0>();
//         assert(PositionTrait::is_zero(Position { player, x: 0, y: 0 }), 'not zero');
//     }

//     #[test]
//     #[available_gas(100000)]
//     fn test_position_is_equal() {
//         let player = starknet::contract_address_const::<0x0>();
//         let position = Position { player, x: 420, y: 0 };
//         assert(PositionTrait::is_equal(position, Position { player, x: 420, y: 0 }), 'not equal');
//     }
// }
