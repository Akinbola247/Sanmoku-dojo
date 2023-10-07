
#[cfg(test)]
mod tests {
    use core::debug::PrintTrait;
    use dojo::world::{IWorldDispatcherTrait, IWorldDispatcher};
    use dojo::test_utils::spawn_test_world;

    // project imports
    use tictactoe::components::{board_state, Board_state};
    use tictactoe::components::{moves, Moves};
    
    
    use tictactoe::systems::spawn;
    use tictactoe::systems::initiate_game;
    use tictactoe::systems::play_game;

    #[event]
    use tictactoe::events::{Event, Spawn};


    // helper setup function
    // reuse this function for all tests
    fn setup_world() -> IWorldDispatcher {
        // components
        let mut components = array![board_state::TEST_CLASS_HASH, moves::TEST_CLASS_HASH];

        // systems
        let mut systems = array![spawn::TEST_CLASS_HASH, initiate_game::TEST_CLASS_HASH, play_game::TEST_CLASS_HASH];

        // deploy executor, world and register components/systems
        spawn_test_world(components, systems)
    }

    #[test]
    #[available_gas(30000000000)]
    fn test_player_one_move(){
        let player_one = starknet::contract_address_const::<0x01>();
        let player_two = starknet::contract_address_const::<0x02>();

        let world = setup_world(); 
        let avatar_one : felt252 = 1;  
        let avatar_two : felt252 = 2;  
        let id : felt252 = 0x5bb9440e27889a364bcb678b1f679ecd1347acdedcbf36e83494f857cc58026.into();
        world.execute('initiate_game', array![player_one.into(), player_two.into()]);
        world.execute('spawn', array![avatar_one, id, player_one.into()]);
        world.execute('spawn', array![avatar_two, id, player_two.into()]);      
        world.execute('play_game', array![id, play_game::Square::Top_Left(()).into(), player_one.into()]);    
        world.execute('play_game', array![id, play_game::Square::Tops(()).into(), player_two.into()]);    
        world.execute('play_game', array![id, play_game::Square::Centre(()).into(), player_one.into()]);
        world.execute('play_game', array![id, play_game::Square::Left(()).into(), player_two.into()]);     
        world.execute('play_game', array![id, play_game::Square::Bottom_Right(()).into(), player_one.into()]);
        // world.execute('play_game', array![id, play_game::Square::Right(()).into(), player_two.into()]);
        // world.execute('play_game', array![id, play_game::Square::Bottom_Left(()).into(), player_one.into()]);
        // world.execute('play_game', array![id, play_game::Square::Bottom(()).into(), player_two.into()]);
        // world.execute('play_game', array![id, play_game::Square::Bottom_Right(()).into(), player_one.into()]);

        
    }

}