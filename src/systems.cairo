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
                Square::Top_Left(()) => 1,
                Square::Top(()) => 2,
                Square::Top_Right(()) => 3,
                Square::Left(()) => 4,
                Square::Centre(()) => 5,
                Square::Right(()) => 6,
                Square::Bottom_Left(()) => 7,
                Square::Bottom(()) => 8,
                Square::Bottom_Right(()) => 9,
            }
        }
    }


    fn execute(ctx: Context, game_id : felt252, square: Square){
     //obtain current board state
    let (mut board_state, mut game, mut next_player) = get!(ctx.world, game_id, (Board_state,Game,Player_turn));   
    let mut moves = get!(ctx.world, ctx.origin, (Moves)); 
    assert(ctx.origin == game.X || ctx.origin == game.X, 'Not_player');  
    //check player turn
    if moves.avatar_choice == 'X'{
        assert(next_player.X == false, 'Not_your_turn');
    } else if moves.avatar_choice == 'O' {
        assert(next_player.O == false, 'Not_your_turn');
    }          
    let (played_move, current_move_state) = compute_board_state(board_state, moves, square);
    //update turn state here
    if moves.avatar_choice == 'X'{
        next_player.X = true;
        next_player.O = false;
    } else if moves.avatar_choice == 'O' {
        next_player.X = false;
        next_player.O = true;
    }
    //update/set board state here
    set!(ctx.world, (current_move_state, played_move, next_player));
    
    //call victory state function here


    }

   
    fn compute_board_state(mut board_state : Board_state, mut player_moves_state: Moves, square : Square) -> (Board_state,Moves){        
        //handle square selected here
        match square {
                Square::Top_Left(()) => {
                    board_state.a_1 = player_moves_state.avatar_choice;
                    //check current move count to set the moved piece accordingly here
                    if player_moves_state.counter == 0 {
                        player_moves_state.move_one = 1;
                    }else if player_moves_state.counter == 1{
                        player_moves_state.move_two = 1;
                    }else if player_moves_state.counter == 2 {
                        player_moves_state.move_three = 1;
                    }else if player_moves_state.counter == 3 {
                        player_moves_state.move_four = 1;
                    }else if player_moves_state.counter == 4 {
                        player_moves_state.move_five = 1;
                    }
                },
                Square::Top(()) => {
                    board_state.a_2 = player_moves_state.avatar_choice;
                    //check current move count to set the moved piece accordingly here
                    if player_moves_state.counter == 0 {
                        player_moves_state.move_one = 2;
                    }else if player_moves_state.counter == 1{
                        player_moves_state.move_two = 2;
                    }else if player_moves_state.counter == 2 {
                        player_moves_state.move_three = 2;
                    }else if player_moves_state.counter == 3 {
                        player_moves_state.move_four = 2;
                    }else if player_moves_state.counter == 4 {
                        player_moves_state.move_five = 2;
                    }
                },
                Square::Top_Right(()) => {
                    board_state.a_3 = player_moves_state.avatar_choice;
                    //check current move count to set the moved piece accordingly here
                    if player_moves_state.counter == 0 {
                        player_moves_state.move_one = 3;
                    }else if player_moves_state.counter == 1{
                        player_moves_state.move_two = 3;
                    }else if player_moves_state.counter == 2 {
                        player_moves_state.move_three = 3;
                    }else if player_moves_state.counter == 3 {
                        player_moves_state.move_four = 3;
                    }else if player_moves_state.counter == 4 {
                        player_moves_state.move_five = 3;
                    }
                },
                Square::Left(()) => {
                    board_state.b_1 = player_moves_state.avatar_choice;
                    //check current move count to set the moved piece accordingly here
                    if player_moves_state.counter == 0 {
                        player_moves_state.move_one = 4;
                    }else if player_moves_state.counter == 1{
                        player_moves_state.move_two = 4;
                    }else if player_moves_state.counter == 2 {
                        player_moves_state.move_three = 4;
                    }else if player_moves_state.counter == 3 {
                        player_moves_state.move_four = 4;
                    }else if player_moves_state.counter == 4 {
                        player_moves_state.move_five = 4;
                    }
                },
                Square::Centre(()) => {
                    board_state.b_2 = player_moves_state.avatar_choice;
                    //check current move count to set the moved piece accordingly here
                    if player_moves_state.counter == 0 {
                        player_moves_state.move_one = 5;
                    }else if player_moves_state.counter == 1{
                        player_moves_state.move_two = 5;
                    }else if player_moves_state.counter == 2 {
                        player_moves_state.move_three = 5;
                    }else if player_moves_state.counter == 3 {
                        player_moves_state.move_four = 5;
                    }else if player_moves_state.counter == 4 {
                        player_moves_state.move_five = 5;
                    }
                },
                Square::Right(()) => {
                    board_state.b_3 = player_moves_state.avatar_choice;
                    //check current move count to set the moved piece accordingly here
                    if player_moves_state.counter == 0 {
                        player_moves_state.move_one = 6;
                    }else if player_moves_state.counter == 1{
                        player_moves_state.move_two = 6;
                    }else if player_moves_state.counter == 2 {
                        player_moves_state.move_three = 6;
                    }else if player_moves_state.counter == 3 {
                        player_moves_state.move_four = 6;
                    }else if player_moves_state.counter == 4 {
                        player_moves_state.move_five = 6;
                    }
                },
                Square::Bottom_Left(()) => {
                    board_state.c_1 = player_moves_state.avatar_choice;
                    //check current move count to set the moved piece accordingly here
                    if player_moves_state.counter == 0 {
                        player_moves_state.move_one = 7;
                    }else if player_moves_state.counter == 1{
                        player_moves_state.move_two = 7;
                    }else if player_moves_state.counter == 2 {
                        player_moves_state.move_three = 7;
                    }else if player_moves_state.counter == 3 {
                        player_moves_state.move_four = 7;
                    }else if player_moves_state.counter == 4 {
                        player_moves_state.move_five = 7;
                    }
                },
                Square::Bottom(()) => {
                    board_state.c_2 = player_moves_state.avatar_choice;
                    if player_moves_state.counter == 0 {
                        player_moves_state.move_one = 8;
                    }else if player_moves_state.counter == 1{
                        player_moves_state.move_two = 8;
                    }else if player_moves_state.counter == 2 {
                        player_moves_state.move_three = 8;
                    }else if player_moves_state.counter == 3 {
                        player_moves_state.move_four = 8;
                    }else if player_moves_state.counter == 4 {
                        player_moves_state.move_five = 8;
                    }
                },
                Square::Bottom_Right(()) => {
                    board_state.c_3 = player_moves_state.avatar_choice;
                    if player_moves_state.counter == 0 {
                        player_moves_state.move_one = 9;
                    }else if player_moves_state.counter == 1{
                        player_moves_state.move_two = 9;
                    }else if player_moves_state.counter == 2 {
                        player_moves_state.move_three = 9;
                    }else if player_moves_state.counter == 3 {
                        player_moves_state.move_four = 9;
                    }else if player_moves_state.counter == 4 {
                        player_moves_state.move_five = 9;
                    }
                },
        };
         //set move count after playing here
        player_moves_state.counter += 1;
        //return computed board and moves
        (board_state,player_moves_state)
    }
  
    fn check_victory(mut current_moves_state : Moves){
        let mut winning_array: Array<Winning_tuple> = ArrayTrait::new();
        winning_array.append(Winning_tuple::winning_moves((1, 2, 3)));
        winning_array.append(Winning_tuple::winning_moves((4, 5, 6)));
        winning_array.append(Winning_tuple::winning_moves((7, 8, 9)));
        winning_array.append(Winning_tuple::winning_moves((1, 4, 7)));
        winning_array.append(Winning_tuple::winning_moves((2, 5, 8)));
        winning_array.append(Winning_tuple::winning_moves((3, 6, 9)));
        winning_array.append(Winning_tuple::winning_moves((1, 5, 9)));
        winning_array.append(Winning_tuple::winning_moves((3, 5, 7)));

        //check if combination matches any of the tuple
        let mut moves_array: Array<u32> = ArrayTrait::new();
        moves_array.append(current_moves_state.move_one);
        moves_array.append(current_moves_state.move_two);
        moves_array.append(current_moves_state.move_three);
        moves_array.append(current_moves_state.move_four);
        moves_array.append(current_moves_state.move_five);

        //find a way to return a winning array_tupple, arranged in an ascending order
        let mut loop_count = 0;
       let res  = loop {
                if loop_count > winning_array.len(){
                    break;
                };
                // let tuple_returned = *winning_array.at(loop_count);
                // let (tuple_member_one, tuple_member_one, tuple_member_one) = tuple_returned;
        

                loop_count += 1;
             };

    }

}


}
