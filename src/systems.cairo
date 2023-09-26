#[system]
mod spawn {
    use dojo::world::Context;
    use tictactoe::components::Moves;
    use tictactoe::components::Board_state;
    use tictactoe::components::Player_turn;
    use tictactoe::components::Game;
    use traits::TryInto;
    use option::OptionTrait;

    #[event]
    use tictactoe::events::{Event, Spawn};

    fn execute(ctx: Context, avatar: felt252, game_id : felt252) { 
    let (mut moves, mut board_state, mut game) = get!(ctx.world, game_id, (Moves,Board_state,Game));   
//spawning players
        if avatar == 'X' {
            assert(game.X == starknet::contract_address_const::<0x0>(), 'Opponent_is_X');
            game.X = ctx.origin;
            moves.player = ctx.origin; 
            moves.game_id = game.game_id;
            moves.avatar_choice = avatar;   
            board_state.game_id = game.game_id;              
            set!(ctx.world, (moves, board_state, game));
               
        } else if avatar == 'O' {
            assert(game.O == starknet::contract_address_const::<0x0>(), 'Opponent_is_O');
            game.O = ctx.origin;           
            moves.player = ctx.origin; 
            moves.game_id = game.game_id;
            moves.avatar_choice = avatar;   
            board_state.game_id = game.game_id;              
            set!(ctx.world, (moves, board_state, game));
        }      
        emit!(ctx.world, Spawn { player_1: game.X, player_2: game.O, game_id:game.game_id});
        return ();
    }
}

#[system]
mod initiate_game {
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

#[system]
mod play_game {
    use core::debug::PrintTrait;
    use dojo::world::Context;
    use tictactoe::components::Board_state;
    use tictactoe::components::Player_turn;
    use tictactoe::components::Moves;
    use tictactoe::components::Game;
    use array::ArrayTrait;



    #[derive(Serde, Drop)]
    enum Square {
        Top_Left: (),
        Top: (),
        Top_Right: (),
        Left: (),
        Centre: (),
        Right: (),
        Bottom_Left: (),
        Bottom: (),
        Bottom_Right: (),

    }
    #[derive(Serde, Drop)]
    enum Winning_tuple {
       winning_moves : (u32, u32, u32),
    }


    impl DirectionIntoFelt252 of Into<Square, felt252> {
        fn into(self: Square) -> felt252 {
            match self {
                Square::Top_Left(()) => 0,
                Square::Top(()) => 1,
                Square::Top_Right(()) => 2,
                Square::Left(()) => 3,
                Square::Centre(()) => 4,
                Square::Right(()) => 5,
                Square::Bottom_Left(()) => 6,
                Square::Bottom(()) => 7,
                Square::Bottom_Right(()) => 8,
            }
        }
    }


    fn execute(ctx: Context, game_id : felt252, square: Square){
     //obtain current board state
    let (mut moves, mut board_state, mut game) = get!(ctx.world, game_id, (Moves,Board_state,Game));   
        //update/set board state here

        //call victory state function here

    }

   
    fn compute_board_state(mut board_state : Board_state, square : Square) -> Board_state{        
        //handle square selected here
        board_state
    }

    fn check_victory(){
        let mut winning_array: Array<Winning_tuple> = ArrayTrait::new();
        winning_array.append(Winning_tuple::winning_moves((0, 1, 2)));
        winning_array.append(Winning_tuple::winning_moves((3, 4, 5)));
        winning_array.append(Winning_tuple::winning_moves((6, 7, 8)));
        winning_array.append(Winning_tuple::winning_moves((0, 3, 6)));
        winning_array.append(Winning_tuple::winning_moves((1, 4, 7)));
        winning_array.append(Winning_tuple::winning_moves((2, 5, 8)));
        winning_array.append(Winning_tuple::winning_moves((0, 4, 8)));
        winning_array.append(Winning_tuple::winning_moves((2, 4, 6)));

        //check if combination matches any of the tuple
    }

}


}