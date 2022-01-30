function towerBuilder(nFloors) {
    // build here
    let tower = [];
    for(let i = 0; i < nFloors; i++){
        tower.push(" ".repeat(nFloors - i - 1) + "*".repeat((i * 2) + 1) + " ".repeat(nFloors - i - 1))
     
    }
    return tower;
  }


// console.log(towerBuilder(10));
// 0: "         *         "
// 1: "        ***        "
// 2: "       *****       "
// 3: "      *******      "
// 4: "     *********     "
// 5: "    ***********    "
// 6: "   *************   "
// 7: "  ***************  "
// 8: " ***************** "
// 9: "*******************"