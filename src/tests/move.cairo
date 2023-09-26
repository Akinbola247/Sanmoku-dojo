#[cfg(test)]
mod tests {
    use dojo::world::{IWorldDispatcherTrait, IWorldDispatcher};
    use dojo::test_utils::spawn_test_world;

    // project imports
    use tictactoe::components::{board_state, Board_state};
    use tictactoe::components::{moves, Moves};
    
    
    use tictactoe::systems::spawn;
    use tictactoe::systems::create_Game;

    #[event]
    use tictactoe::events::{Event, Spawn};


    // helper setup function
    // reuse this function for all tests
    fn setup_world() -> IWorldDispatcher {
        // components
        let mut components = array![board_state::TEST_CLASS_HASH, moves::TEST_CLASS_HASH];

        // systems
        let mut systems = array![spawn::TEST_CLASS_HASH, initiate_game::TEST_CLASS_HASH];

        // deploy executor, world and register components/systems
        spawn_test_world(components, systems)
    }

    #[test]
    #[available_gas(300000000)]
    fn test_move(){
        let world = setup_world();     
        world.execute('create_Game', array![]);
    }
}