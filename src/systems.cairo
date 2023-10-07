#[system]
mod spawn {
    use dojo::world::Context;
    use tictactoe::components::Moves;
    use tictactoe::components::Board_state;
    use tictactoe::components::Player_turn;
    use tictactoe::components::Game;
    use traits::TryInto;
    use option::OptionTrait;
    use debug::PrintTrait;
    use starknet::ContractAddress;

    #[event]
    use tictactoe::events::{Event, Spawn};

    fn execute(ctx: Context, avatar: felt252, game_id : felt252, player : ContractAddress) -> () { 
    let (mut board_state, mut game) = get!(ctx.world, game_id, (Board_state,Game));   
    let mut moves = get!(ctx.world, player, (Moves));   
//spawning players
        if avatar == 'X' {
            assert(player == game.player_one_, 'wrong_input');
            moves.player = game.player_one_; 
            moves.opponent = game.player_two_;
            moves.game_id = game.game_id;
            moves.avatar_choice = avatar;
            moves.move_one = 404;   
            moves.move_two = 404;   
            moves.move_three = 404;   
            moves.move_four = 404;   
            moves.move_five = 404;   
            board_state.game_id = game.game_id;              
            set!(ctx.world, (moves, board_state, game));
            'player X spawned'.print();
              
        } else if avatar == 'O' {    
            assert(player == game.player_two_, 'wrong_input');
            moves.player = game.player_two_; 
            moves.opponent = game.player_one_;
            moves.game_id = game.game_id;
            moves.avatar_choice = avatar;
            moves.move_one = 404;   
            moves.move_two = 404;   
            moves.move_three = 404;   
            moves.move_four = 404;   
            moves.move_five = 404;   
            board_state.game_id = game.game_id;              
            set!(ctx.world, (moves, board_state, game));
            'player O spawned'.print();
        }      
        emit!(ctx.world, Spawn { player_1: game.player_one_, player_2: game.player_two_, game_id:game.game_id}); 
        // (game.game_id).print();
        // (moves.avatar_choice).print();
        // (moves.player).print();
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
    use starknet::ContractAddress;

fn execute(ctx: Context, player_one : ContractAddress, player_two : ContractAddress ) -> felt252{
    let game_id = pedersen::pedersen(player_one.into(),player_two.into());    
    game_id.print();
    set!(ctx.world, (Game {
        game_id: game_id,
        winner: '',
        player_one_: player_one,
        player_two_: player_two,
    }));
    game_id
}

}

#[system]
mod play_game {
    use core::traits::Into;
    use traits::TryInto;
    use core::debug::PrintTrait;
    use dojo::world::Context;
    use tictactoe::components::Board_state;
    use tictactoe::components::Player_turn;
    use tictactoe::components::Moves;
    use tictactoe::components::Game;
    use array::ArrayTrait;
    use starknet::ContractAddress;
    use option::OptionTrait;



    #[derive(Serde, Drop)]
    enum Square {
        Top_Left: (),
        Tops: (),
        Top_Right: (),
        Left: (),
        Centre: (),
        Right: (),
        Bottom_Left: (),
        Bottom: (),
        Bottom_Right: (),

    }
    #[derive(Serde, Copy, Drop)]
    enum Winning_tuple {
       winning_moves : (u32, u32, u32),
    }


    impl DirectionIntoFelt252 of Into<Square, felt252> {
        fn into(self: Square) -> felt252 {
            match self {
                Square::Top_Left(()) => 0,
                Square::Tops(()) => 1,
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

    #[generate_trait]
    impl BoardImpl of board_state_ {
            fn printing(self: Board_state) {
                (self.a_1).print();
                (self.a_2).print();
                (self.a_3).print();
                (self.b_1).print();
                (self.b_2).print();
                (self.b_3).print();
                (self.c_1).print();
                (self.c_2).print();
                (self.c_3).print();
            }
        }

    #[generate_trait]
    impl MoveImpl of move_state_ {
            fn printing_move(self: Moves) {
              (self.move_one).print();
              (self.move_two).print();
              (self.move_three).print();
              (self.move_four).print();
              (self.move_five).print();
            }
        }


    fn execute(ctx: Context, game_id : felt252, square: Square, player : ContractAddress){
     //obtain current board state
    let (mut board_state, mut game, mut next_player) = get!(ctx.world, game_id, (Board_state,Game,Player_turn));   
    let mut moves = get!(ctx.world, player, (Moves)); 
    let mut opponent_move = get!(ctx.world, moves.opponent, (Moves)); 

    // assert(ctx.origin == game.player_one_ || ctx.origin == game.player_two_, 'Not_player');  
    //check player turn
    if moves.avatar_choice == 'X'{
        assert(next_player.X == false, 'Not_your_turn');
    } else if moves.avatar_choice == 'O' {
        assert(next_player.O == false, 'Not_your_turn');
    } 

    assert(moves.turn == false, 'Not_your_turn');         
    moves.turn = true;
    opponent_move.turn = false;
    let (played_move, current_move_state) = compute_board_state(board_state, moves, square);
    
      //call victory state function here
    let result = check_victory(current_move_state);
    
    if result == 1 && moves.avatar_choice == 'X'{
            'player X wins'.print(); 
            'player O lost'.print(); 
    } else if result == 1 && moves.avatar_choice == 'O' {
            'player wins O'.print(); 
            'player X lost'.print(); 
    }

    //update/set board state here
    set!(ctx.world, (current_move_state, played_move, opponent_move));
    
    // played_move.printing();
    // current_move_state.printing_move();
    // result.print();
    
    }

   
    fn compute_board_state(mut board_state : Board_state, mut player_moves_state: Moves, square : Square) -> (Board_state,Moves){        
        //handle square selected here
        match square {
                Square::Top_Left(()) => {
                    assert(board_state.a_1 == '', 'non_empty');
                    board_state.a_1 = player_moves_state.avatar_choice;
                    //check current move count to set the moved piece accordingly here
                    if player_moves_state.counter == 0 {
                        player_moves_state.move_one = 0;
                    }else if player_moves_state.counter == 1{
                        player_moves_state.move_two = 0;
                    }else if player_moves_state.counter == 2 {
                        player_moves_state.move_three = 0;
                    }else if player_moves_state.counter == 3 {
                        player_moves_state.move_four = 0;
                    }else if player_moves_state.counter == 4 {
                        player_moves_state.move_five = 0;
                    }
                },
                Square::Tops(()) => {
                    assert(board_state.a_2 == '', 'non_empty');
                    board_state.a_2 = player_moves_state.avatar_choice;
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
                Square::Top_Right(()) => {
                    assert(board_state.a_3 == '', 'non_empty');
                    board_state.a_3 = player_moves_state.avatar_choice;
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
                Square::Left(()) => {
                    assert(board_state.b_1 == '', 'non_empty');
                    board_state.b_1 = player_moves_state.avatar_choice;
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
                Square::Centre(()) => {
                    assert(board_state.b_2 == '', 'non_empty');
                    board_state.b_2 = player_moves_state.avatar_choice;
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
                Square::Right(()) => {
                    assert(board_state.b_3 == '', 'non_empty');
                    board_state.b_3 = player_moves_state.avatar_choice;
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
                Square::Bottom_Left(()) => {
                    assert(board_state.c_1 == '', 'non_empty');
                    board_state.c_1 = player_moves_state.avatar_choice;
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
                Square::Bottom(()) => {
                    assert(board_state.c_2 == '', 'non_empty');
                    board_state.c_2 = player_moves_state.avatar_choice;
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
                Square::Bottom_Right(()) => {
                    assert(board_state.c_3 == '', 'non_empty');
                    board_state.c_3 = player_moves_state.avatar_choice;
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
        };
         //set move count after playing here
        player_moves_state.counter += 1;
        //return computed board and moves
        (board_state,player_moves_state)
    }
  
    fn check_victory(mut current_moves_state : Moves) -> felt252{
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
        let mut moves_array: Array<u32> = ArrayTrait::new();
        moves_array.append(current_moves_state.move_one);
        moves_array.append(current_moves_state.move_two);
        moves_array.append(current_moves_state.move_three);
        moves_array.append(current_moves_state.move_four);
        moves_array.append(current_moves_state.move_five);

        //find a way to return a winning array_tupple, arranged in an ascending order
        let mut loop_count = 0;
        let mut loop_two_count = 0;
        let hol = moves_array.span();
        let true_rep : felt252 = 1.into();
        let false_rep : felt252 = 2.into();
       let res  = loop {
                if loop_two_count > 7{
                    break false_rep;
                };
                let tuple_returned = *winning_array.at(loop_two_count);
                let (res1, res2, res3 ) = tuple_returned.process();
                let mut won: Array<u32> = ArrayTrait::new();    
            
                // 'running'.print();       
                    let inner_check = loop {
                        if loop_count > 4{
                            loop_count = 0;
                            break;
                        };
                        let item = *hol.at(loop_count); 
                            if item == res1 {
                                    won.append(item);
                            }
                            else if item == res2 {
                                    won.append(item);
                            }else if item == res3 {
                                    won.append(item);
                            }

                      loop_count += 1;
                    };
                if won.len() == 3 {
                     break true_rep;
                }  
                loop_two_count += 1;
             };
          res
    }

        #[generate_trait]
        impl ProcessingImpl of Processing {
            fn process(self: Winning_tuple) -> (u32, u32, u32){
                match self {
                    Winning_tuple::winning_moves((x, y, z)) => {
                        (x, y, z)
                    },
                }
            }
        }

}