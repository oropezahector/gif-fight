$( document ).ready(function() {
    
	//Fighters Available
		// "https://s-media-cache-ak0.pinimg.com/originals/62/cf/0a/62cf0aee1178b18ecb4297363a702081.gif",
	    // "https://media.giphy.com/media/zQR7qMJ3Esh0Y/giphy.gif",
	    // "https://media.giphy.com/media/vFKqnCdLPNOKc/giphy.gif",
    var gifFighters = {
    	fighter1 :['http://bestanimations.com/Animals/Mammals/Cats/catgif/funny-cat-gif-3.gif',100,5,6],
    	fighter2 :['http://viralgifs.com/wp-content/uploads/2014/03/Cat_Bread_Face.gif?fb43fe',100,3,2],
    	fighter3 :['https://media.giphy.com/media/fAT2Db0j0Mblu/giphy.gif',100,8,3],
    	fighter4 :['https://media.giphy.com/media/freTElrZl4zaU/giphy.gif',100,8,3]
    };

    console.log(gifFighters.fighter1);


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

    var state = {
    	wins:null,
    	loss:null,
    	playerHealth:null,
    	enemyHealth:null,
    	playerAttackPower:null,
    	playerCounterPower:null,
    	enemyAttackPower:null,
    	enemyCounterPower:1
    }

    function selectRandomPlayer(selectionArray,) {
    	var selectedPlayer = fighter1[1];
    	return selectedPlayer;
    }
    function playerAttack() {
    	// pass in player or enemy variabls and 
    }

	//Select Fighter & Insert into background image
	function setBackground(elementSelector,imageSource) {
		$(elementSelector).each(function() {
			var player = selectRandomPlayer(imageSource);
			$(elementSelector).css('background-image', 'url(' + player + ')'); 
		});
	}

	function renderImage(selector,imageValue){
		if(imageValue) {
			$(imageValue).css('background-image', 'url(' + player + ')'); 
	   }
	}
	setBackground('.player',gifFighters);
	setBackground('.user',gifFighters);
	// setBackground('body',gifAttacks);
	selectRandomPlayer(gifFighters);
	console.log(selectRandomPlayer(gifFighters));

});


