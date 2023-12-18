
#[cfg(test)]
mod tests {
    use core::debug::PrintTrait;
    use dojo::world::{IWorldDispatcherTrait, IWorldDispatcher};
    use dojo::test_utils::{spawn_test_world, deploy_contract};
    use starknet::{contract_address_const, get_contract_address, ContractAddress};



    // project imports
    use sanmoku::models::{board_state,moves,game,gate,players,fixedkey};
    use sanmoku::models::{Moves,Board_state,Square,Game,Players,Fixedkey};
    use sanmoku::actions::{actions,IActionsDispatcher, IActionsDispatcherTrait};
    use sanmoku::erc20_dojo::erc20::{erc_systems, IERC20Dispatcher, IERC20DispatcherTrait};
    use sanmoku::erc20_dojo::erc20_models::{erc_20_balance, erc_20_allowance, erc_20_meta};
    use sanmoku::erc20_dojo::erc20_models::{ERC20Balance, ERC20Allowance, ERC20Meta};
    


    

  // reusable function for tests
    fn setup_world() -> (IWorldDispatcher, IActionsDispatcher, ContractAddress) {
        // models
        let models = array![erc_20_allowance::TEST_CLASS_HASH, erc_20_balance::TEST_CLASS_HASH, erc_20_meta::TEST_CLASS_HASH, game::TEST_CLASS_HASH, moves::TEST_CLASS_HASH, board_state::TEST_CLASS_HASH, players::TEST_CLASS_HASH, fixedkey::TEST_CLASS_HASH];
        // deploy world with models
        let world = spawn_test_world(models);
        starknet::testing::set_contract_address(world.executor());

        // deploy systems contract
        let contract_address = world
            .deploy_contract('salt', actions::TEST_CLASS_HASH.try_into().unwrap());
        let sanmoku_ = IActionsDispatcher { contract_address };

        // deploy erc20 contract
        let erc20_address = world.deploy_contract('salt', erc_systems::TEST_CLASS_HASH.try_into().unwrap());
        let erc20_system = IERC20Dispatcher { contract_address: erc20_address };

        // initialize ERC20
        let name: felt252 = '0xabcd';
        let symbol: felt252 = '0x1111';
        let res = erc20_system.initialize(name, symbol, world.contract_address);
        assert(res, 'ERC20 initialize failed');

        // initialize actions
        sanmoku_.init(erc20_address);

        // initialize the token
        (world, sanmoku_, erc20_address)
    }


    #[test]
    #[available_gas(30000000000)]
    fn test_winning_move(){
        let player_one = starknet::contract_address_const::<0x01>();
        let player_two = starknet::contract_address_const::<0x02>();

        let (world, sanmoku_, erc20_address ) = setup_world(); 
        let avatar_one : felt252 = 1;  
        let avatar_two : felt252 = 2;  

        let gameID = sanmoku_.initiate_game(player_one,player_two);
        gameID.print();
        let gameID2 = sanmoku_.initiate_game(player_one,player_two);
        gameID2.print();

        starknet::testing::set_contract_address(player_one);
        sanmoku_.spawn(avatar_one,gameID,player_one);
         'player X spawned'.print();

        starknet::testing::set_contract_address(player_two);
        sanmoku_.spawn(avatar_two,gameID,player_two);
        'player O spawned'.print();

        //winning scenario
        starknet::testing::set_contract_address(player_one);
        sanmoku_.play_game(gameID,Square::Top_Left(()).into());

        starknet::testing::set_contract_address(player_two);
        sanmoku_.play_game(gameID,Square::Tops(()).into());

        starknet::testing::set_contract_address(player_one);
        sanmoku_.play_game(gameID,Square::Centre(()).into());

        starknet::testing::set_contract_address(player_two);
        sanmoku_.play_game(gameID,Square::Left(()).into());

        starknet::testing::set_contract_address(player_one);
        let response = sanmoku_.play_game(gameID,Square::Bottom_Right(()).into());
        response.print();

        let token_dispatcher = IERC20Dispatcher {contract_address : erc20_address};
        let balance = token_dispatcher.balance_of(player_one);
        assert(balance == 200, 'invalid_amount');
    }

     #[test]
    #[available_gas(30000000000)]
    fn test_draw_restart_move(){
        let player_one = starknet::contract_address_const::<0x01>();
        let player_two = starknet::contract_address_const::<0x02>();

        let (world, sanmoku_, erc20_address ) = setup_world(); 
        let avatar_one : felt252 = 1;  
        let avatar_two : felt252 = 2;  

        let gameID = sanmoku_.initiate_game(player_one,player_two);
        gameID.print();

        starknet::testing::set_contract_address(player_one);
        sanmoku_.spawn(avatar_one,gameID,player_one);
         'player X spawned'.print();

        starknet::testing::set_contract_address(player_two);
        sanmoku_.spawn(avatar_two,gameID,player_two);
        'player O spawned'.print();

            //draw scenario && restart
         starknet::testing::set_contract_address(player_one);
        sanmoku_.play_game(gameID,Square::Top_Left(()).into());

        starknet::testing::set_contract_address(player_two);
        sanmoku_.play_game(gameID,Square::Tops(()).into());

        starknet::testing::set_contract_address(player_one);
        sanmoku_.play_game(gameID,Square::Centre(()).into());

        starknet::testing::set_contract_address(player_two);
        sanmoku_.play_game(gameID,Square::Bottom_Right(()).into());

        starknet::testing::set_contract_address(player_one);
        sanmoku_.play_game(gameID,Square::Bottom(()).into());

        starknet::testing::set_contract_address(player_two);
        sanmoku_.play_game(gameID,Square::Left(()).into());

        starknet::testing::set_contract_address(player_one);
        sanmoku_.play_game(gameID,Square::Right(()).into());

        starknet::testing::set_contract_address(player_two);
        sanmoku_.play_game(gameID,Square::Bottom_Left(()).into());

        starknet::testing::set_contract_address(player_one);
       let response2 = sanmoku_.play_game(gameID,Square::Top_Right(()).into());
       response2.print();

       sanmoku_.restart_game(gameID,player_one,player_two);
        'restarting...'.print();

        starknet::testing::set_contract_address(player_two);
        sanmoku_.play_game(gameID,Square::Top_Left(()).into());

        starknet::testing::set_contract_address(player_one);
        sanmoku_.play_game(gameID,Square::Tops(()).into());

        starknet::testing::set_contract_address(player_two);
        sanmoku_.play_game(gameID,Square::Centre(()).into());

        starknet::testing::set_contract_address(player_one);
        sanmoku_.play_game(gameID,Square::Left(()).into());

        starknet::testing::set_contract_address(player_two);
        let response = sanmoku_.play_game(gameID,Square::Bottom_Right(()).into());
        response.print();

        let token_dispatcher = IERC20Dispatcher {contract_address : erc20_address};
        let balance = token_dispatcher.balance_of(player_two);
        assert(balance == 200, 'invalid_amount');

    }

}