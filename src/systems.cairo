#[system]
mod spawn {
    use dojo::world::Context;

    use tictactoe::components::Moves;
    use tictactoe::components::Position;
    use tictactoe::components::Player_turn;
    use tictactoe::components::Game;

    // #[event]
    // use tictactoe::events::{Event, Moved};


    fn execute(ctx: Context) {      
        let game_id = ctx.world.uuid();

        // set!(
        //     ctx.world,
        //     (
        //         Moves { player: ctx.origin, remaining: 100 },
        //         Position { player: ctx.origin, x: offset, y: offset },
        //         Player_turn { player: ctx.origin, x: offset, y: offset },
        //         Game { player: ctx.origin, x: offset, y: offset },
        //     )
        // );

        // // emit!(ctx.world, Moved { player: ctx.origin, x: offset, y: offset, });

        // return ();
    }
}

// #[system]
// mod move {
//     use dojo::world::Context;

//     use dojo_examples::components::Position;
//     use dojo_examples::components::Moves;

//     #[event]
//     use dojo_examples::events::{Event, Moved};

//     #[derive(Serde, Drop)]
//     enum Direction {
//         Left: (),
//         Right: (),
//         Up: (),
//         Down: (),
//     }

//     impl DirectionIntoFelt252 of Into<Direction, felt252> {
//         fn into(self: Direction) -> felt252 {
//             match self {
//                 Direction::Left(()) => 0,
//                 Direction::Right(()) => 1,
//                 Direction::Up(()) => 2,
//                 Direction::Down(()) => 3,
//             }
//         }
//     }

//     fn execute(ctx: Context, direction: Direction) {
//         let (mut position, mut moves) = get!(ctx.world, ctx.origin, (Position, Moves));
//         moves.remaining -= 1;
//         let next = next_position(position, direction);
//         set!(ctx.world, (moves, next));
//         emit!(ctx.world, Moved { player: ctx.origin, x: next.x, y: next.y, });
//         return ();
//     }

//     fn next_position(mut position: Position, direction: Direction) -> Position {
//         match direction {
//             Direction::Left(()) => {
//                 position.x -= 1;
//             },
//             Direction::Right(()) => {
//                 position.x += 1;
//             },
//             Direction::Up(()) => {
//                 position.y -= 1;
//             },
//             Direction::Down(()) => {
//                 position.y += 1;
//             },
//         };

//         position
//     }
// }

