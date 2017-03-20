$(document).ready(function() {

    //Fighters Available
    // "https://s-media-cache-ak0.pinimg.com/originals/62/cf/0a/62cf0aee1178b18ecb4297363a702081.gif",
    // "https://media.giphy.com/media/zQR7qMJ3Esh0Y/giphy.gif",
    // "https://media.giphy.com/media/vFKqnCdLPNOKc/giphy.gif",

    //Available Players
    var gifFighters = {
        fighter1: ['http://bestanimations.com/Animals/Mammals/Cats/catgif/funny-cat-gif-3.gif', 100, 5, 6],
        fighter2: ['http://viralgifs.com/wp-content/uploads/2014/03/Cat_Bread_Face.gif?fb43fe', 100, 3, 2],
        fighter3: ['https://media.giphy.com/media/fAT2Db0j0Mblu/giphy.gif', 100, 8, 3]
    };

    console.log(gifFighters.fighter1);

    //Available Attack Gifs
    var gifAttacks = [
        "https://media.giphy.com/media/o2Lwy4g7Dzptu/giphy.gif",
        "https://media.giphy.com/media/3o6UB65bfF8P1anIZ2/giphy.gif",
        "https://media.giphy.com/media/e4BoeNGwaTvYk/giphy.gif",
        "https://media.giphy.com/media/M9PTHlXW7gJ9K/giphy.gif",
        "https://media.giphy.com/media/l41lTn1liPDzkv0Zi/giphy.gif",
        "https://media.giphy.com/media/BN6E2Z78AzjOM/giphy.gif",
        "https://media.giphy.com/media/ibWtFBCHunMPu/giphy.gif",
        "https://media.giphy.com/media/aAjYwWfAA1llu/giphy.gif",
        "https://media.giphy.com/media/8TpEwyNgVypZm/giphy.gif",
        "https://media.giphy.com/media/ZSeWgTmE3cboQ/giphy.gif",
        "https://media.giphy.com/media/VTVkjiRwO4LgA/giphy.gif",
        "https://media.giphy.com/media/pj676aer4NlMQ/source.gif",
        "https://media.giphy.com/media/1Kk5OkbEQhmhi/giphy.gif"
    ];

    //Game State
    var state = {
        wins: 0,
        loss: 0,
        playerHealth: null,
        enemyHealth: null,
        playerAttackPower: null,
        playerCounterPower: null,
        enemyAttackPower: null,
        enemyCounterPower: 1
    }
    $('.player1').css('background-image', 'url(' + gifFighters.fighter1[0] + ')');
    $('.player2').css('background-image', 'url(' + gifFighters.fighter2[0] + ')');
    $('.player3').css('background-image', 'url(' + gifFighters.fighter3[0] + ')');

    $('.player1').click(function() {
        // Move player 2, 3 to other side
        // populate game state
        if (state.playerHealth === null) {
        	state.playerHealth = gifFighters.fighter1[1];
        	state.playerAttackPower = gifFighters.fighter1[2];
        	state.playerCounterPower = gifFighters.fighter1[3];
        	
        	console.log(state.playerHealth);
        	console.log(state.playerAttackPower);
        	console.log(state.playerCounterPower);
        }
        else{
        	state.enemyHealth = gifFighters.fighter1[1];
        	state.enemyAttackPower = gifFighters.fighter1[2];
        	
        	console.log(state.enemyHealth);
        	console.log(state.enemyAttackPower);
        	console.log(state.enemyCounterPower);
        }
    });

    $('.player2').click(function() {
        // Move player 1, 3 to other side
        // populate game state
        if (state.playerHealth === null) {
        	state.playerHealth = gifFighters.fighter2[1];
        	state.playerAttackPower = gifFighters.fighter2[2];
        	state.playerCounterPower = gifFighters.fighter2[3];

        	console.log(state.playerHealth);
        	console.log(state.playerAttackPower);
        	console.log(state.playerCounterPower);
        }
        else{
        	state.enemyHealth = gifFighters.fighter2[1];
        	state.enemyAttackPower = gifFighters.fighter2[2];

        	console.log(state.enemyHealth);
        	console.log(state.enemyAttackPower);
        	console.log(state.enemyCounterPower);
        }
    });

    $('.player3').click(function() {
        // Move player 1, 2 to other side
    });

    // function selectRandomPlayer(selectionArray) {
    // 	var selectedPlayer = selectionArray.fighter1[0];
    // 	console.log(selectedPlayer);
    // 	return selectedPlayer;
    // }
    // selectRandomPlayer(gifFighters);


    function playerAttack() {
        // pass in player or enemy variables and 
    }

    //Select Fighter & Insert into background image
    function setBackground(elementSelector, imageSource) {
        $(elementSelector).each(function() {
            var player = selectRandomPlayer(imageSource);
            $(elementSelector).css('background-image', 'url(' + player + ')');
        });
    }

    function renderImage(selector, imageValue) {
        if (imageValue) {
            $(imageValue).css('background-image', 'url(' + player + ')');
        }
    }
    // setBackground('.player', gifFighters);
    // setBackground('.user', gifFighters);
    // setBackground('body',gifAttacks);
    // selectRandomPlayer(gifFighters);
    // console.log(selectRandomPlayer(gifFighters));

});
