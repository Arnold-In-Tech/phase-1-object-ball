
// Part 1: Building the Object

function gameObject(){
    return  {home: {teamName:'Brooklyn Nets', 
                    colors: ['Black', 'White'], 
                    players:{'Alan Anderson': {'number': 0, 'shoe': 16, 'points': 22, 'rebounds': 12, 'assists':12, 'steals': 3, 'blocks': 1, 'slamDunks': 1},
                            'Reggie Evans': {'number': 30, 'shoe': 14, 'points': 12, 'rebounds': 12, 'assists':12, 'steals': 12, 'blocks': 12, 'slamDunks': 7},
                            'Brook Lopez': {'number': 11, 'shoe': 17, 'points': 17, 'rebounds': 19, 'assists':10, 'steals': 3, 'blocks': 1, 'slamDunks': 15},
                            'Mason Plumlee': {'number': 1, 'shoe': 19, 'points': 26, 'rebounds': 12, 'assists':6, 'steals':3, 'blocks': 8, 'slamDunks': 5},
                            'Jason Terry': {'number': 31, 'shoe': 15, 'points': 19, 'rebounds': 2, 'assists':2, 'steals': 4, 'blocks': 11, 'slamDunks': 1}
                            }
                    },
            away: {teamName:'Charlotte Hornets', 
                    colors:['Turquoise', 'Purple'], 
                    players:{'Jeff Adrien': {'number':4, 'shoe':18, 'points':10, 'rebounds':1, 'assists':1, 'steals':2, 'blocks':7, 'slamDunks':2 },
                            'Bismak Biyombo': {'number':0, 'shoe':16, 'points':12, 'rebounds':4, 'assists':7, 'steals':7, 'blocks':15, 'slamDunks':10 },
                            'DeSagna Diop': {'number':2, 'shoe':14, 'points':24, 'rebounds':12, 'assists':12, 'steals':4, 'blocks':5, 'slamDunks':5 },
                            'Ben Gordon': {'number':8, 'shoe':15, 'points':33, 'rebounds':3, 'assists':2, 'steals':1, 'blocks':1, 'slamDunks':0 },
                            'Brendan Haywood': {'number':33, 'shoe':15, 'points':6, 'rebounds':12, 'assists':12, 'steals':22, 'blocks':5, 'slamDunks':12}
                            }
                    }
            }
}

// console.log(gameObject());


// ===========================
// Step 2: Building Functions
// ===========================


function numPointsScored(player) {
    
    // takes in an argument of a player's name and returns 

    let game = gameObject();
    let pointsScored;
    for (let gameKey in game) {         // gameKey === home/away
      let teamObj = game[gameKey];
      for (let teamKey in teamObj) {    // teamKey ==== teamName/colours/players
        let data = teamObj.players;
        for (let key in data) {         // key === allan, regie, brendan etc
            if (key === player){
                pointsScored = data[key].points;
            }
        }
      }
    }
    return pointsScored;
}

// console.log(numPointsScored('Jason Terry'));  



// ===========================

function shoeSize(player) {

    // takes in an argument of a player's name 
    // and returns the shoe size for that player

    let game = gameObject();
    let pointsScored;
    for (let gameKey in game) {         // gameKey === home/away
      let teamObj = game[gameKey];
      for (let teamKey in teamObj) {    // teamKey ==== teamName/colours/players
        let data = teamObj.players;
        for (let key in data) {         // key === allan, regie, brendan etc
            if (key === player){
                shoesz = data[key].shoe;
            }
        }
      }
    }
    return shoesz;
}

// console.log(shoeSize('Jason Terry'));  


// ===========================

function teamColors(inpName){

    // takes in an argument of the team name and 
    // returns an array of that teams colors

    let game = gameObject();
    let teamCols;
    for (let gameKey in game){
        let data = game[gameKey];      // temName,colors, players
        for (let key in data){
            if ( data[key] === inpName){
                teamCols = data.colors;
            }
        } 
    }
    return teamCols;
}

// console.log(teamColors('Charlotte Hornets'));  


// ===========================

function teamNames(){

    // operates on the game object to 
    // return an array of the team names.

    let game = gameObject();
    let nameArr = []
    for (let gameKey in game){
        data = game[gameKey]
        if (data.teamName){
            nameArr.push(data.teamName);
        }
    }
    return nameArr;
} 

// console.log(teamNames());


// ===========================

function playerNumbers(inpName){

    // takes in an argument of a team name and 
    // returns an array of the jersey number's for that team.

    let game = gameObject();
    let jNum = [];

    for (let gameKey in game){
        let gameObject = game[gameKey];  // home / away
        if (gameObject.teamName === inpName){
            data = gameObject.players;
            for (key in data){
                jNum.push(data[key].number);
            }
        }
    }
    return jNum;
}

// console.log(playerNumbers('Charlotte Hornets'));  


// ===========================

function playerStats(inpName){

    //  takes in an argument of a player's name and 
    // returns a object of that player's stats.

    let game = gameObject();
    let pStats;

    for (let gameKey in game){
        let gameObject = game[gameKey];  // home / away
        for (let gameKey in gameObject){
            data = gameObject.players;
            for (let key in data){
                if (key === inpName){
                    pStats = data[key];
                }
            }
        }
    }
    return pStats;
}

// console.log(playerStats('Mason Plumlee'));



// ===========================
                            
function bigShoePlayer(dataObj){
    
    let shoeObj = {};  // this is an Object with all playerNames and respective shoe sizes
    let sizeArr = [];  // this is an array with all shoe sizes
    for (let key in dataObj){
        shoeObj[key] = dataObj[key].shoe;
        sizeArr.push(dataObj[key].shoe);
    }

    // obtain the maximum shoe size
    const sizeMax = Math.max(...sizeArr);

    // obtain the name of player with max shoe
    const playerName = Object.keys(shoeObj).find((key) => shoeObj[key] === sizeMax);
    
    return playerName;
}


function bigShoeRebounds(){

    // return the number of rebounds associated with 
    // the player that has the largest shoe size.

    let game = gameObject();
    let playerName;
    let rebs = {};

    for (let gameKey in game){
        let gameObject = game[gameKey];  // home / away
        for (let gameKey in gameObject){
            data = gameObject.players;
            playerName = bigShoePlayer(data);      // call the function to return playerName with largest shoesize
            for (let key in data){
                if (key === playerName){
                    rebs[key] = data[playerName].rebounds; // return player name and rebounds for both home and away
                }
            }
        }
    }
    return rebs;    
}

// console.log(bigShoeRebounds());

