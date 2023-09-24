#[system]
mod spawn {
    use dojo::world::Context;
    use tictactoe::components::Moves;
    use tictactoe::components::Position;
    use tictactoe::components::Player_turn;
    use tictactoe::components::Game;
    use traits::TryInto;
    use option::OptionTrait;

    #[event]
    use tictactoe::events::{Event, Spawn};

    fn execute(ctx: Context, avatar: felt252, game_id : felt252) { 
    let (mut moves, mut position, mut game) = get!(ctx.world, game_id, (Moves,Position,Game));   
//spawning players
        if avatar == 'X' {
            assert(game.X == starknet::contract_address_const::<0x0>(), 'Opponent_is_X');
            game.X = ctx.origin;
            moves.player = ctx.origin; 
            moves.game_id = game.game_id;
            moves.avatar_choice = avatar;   
            position.game_id = game.game_id;              
            set!(ctx.world, (moves, position, game));
               
        } else if avatar == 'O' {
            assert(game.O == starknet::contract_address_const::<0x0>(), 'Opponent_is_O');
            game.O = ctx.origin;           
            moves.player = ctx.origin; 
            moves.game_id = game.game_id;
            moves.avatar_choice = avatar;   
            position.game_id = game.game_id;              
            set!(ctx.world, (moves, position, game));
        }      
        emit!(ctx.world, Spawn { player_1: game.X, player_2: game.O, game_id:game.game_id});
        return ();
    }
}

#[system]
mod create_Game {
    use core::debug::PrintTrait;
use dojo::world::Context;
    use tictactoe::components::Game;
    use traits::TryInto;
    use option::OptionTrait;

fn execute(ctx: Context) -> felt252{
    let time_now: u64 = starknet::get_block_timestamp();
    let game_id = pedersen::pedersen(time_now.into(), 'players');    
    game_id.print();
    set!(ctx.world, (Game {
        game_id: game_id,
        winner: '',
        X: starknet::contract_address_const::<0x0>(),
        O: starknet::contract_address_const::<0x0>(),
    }));
    game_id
}

}