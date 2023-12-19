#!/bin/bash
set -euo pipefail
pushd $(dirname "$0")/..

export RPC_URL="http://localhost:5050";

export WORLD_ADDRESS=$(cat /Users/kenzman/Desktop/dojojam/Sanmoku-dojo/target/dev/manifest.json | jq -r '.world.address')

export ACTIONS_ADDRESS=$(cat /Users/kenzman/Desktop/dojojam/Sanmoku-dojo/target/dev/manifest.json | jq -r '.contracts[] | select(.name == "sanmoku::actions::actions" ).address')

echo "---------------------------------------------------------------------------"
echo world : $WORLD_ADDRESS 
echo " "
echo actions : $ACTIONS_ADDRESS
echo "---------------------------------------------------------------------------"

# enable system -> component authorizations
COMPONENTS=("Position" "Moves" )

for component in ${COMPONENTS[@]}; do
    sozo auth writer $component $ACTIONS_ADDRESS --world $WORLD_ADDRESS --rpc-url $RPC_URL
done

echo "Default authorizations have been successfully set."