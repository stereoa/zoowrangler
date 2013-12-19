var game = new Phaser.Game(
    1280, 720,
    Phaser.CANVAS, '',
    {
        preload: preload,
        create: create,
        update: update,
        render: render
    }
);

//game variables
var score;
var gameIsStarted;
//sound variables

//load in game assets
function preload() {
    //screens
    //game.load.image('exampleTag', 'assets/images/example.png');
    /*
     game.load.image("titleScreen", "assets/images/titleScreen.png");
     game.load.image("startButton", "assets/images/startButton.png");
     game.load.image("winScreen", "assets/images/winScreen.png");
     game.load.image("loseScreen", "assets/images/loseScreen.png");
     game.load.image("retryButton", "assets/images/retryButton.png");

     */
    //in-game sprites
    //animations
    //game.load.spritesheet('exampleAnim', 'assets/animations/example_50x23.png', 50, 23, 4);
    //sounds
    //game.load.audio('exampleSound', ['assets/audio/soundEffects/example.mp3', 'assets/audio/soundEffects/example.ogg']);
}

function create() {
    game.time.fps = 60;
    game.stage.backgroundColor = '#FFFFFF';
    fullScreenKey = game.input.keyboard.addKey(Phaser.Keyboard.F);
    fullScreenKey.onDown.add(toggleFullScreen, this);
    //create screens and buttons
    /*
    titleScreen = game.add.tileSprite(0, 0, 1280, 720, 'titleScreen');
    startButton = game.add.button(316, 387, 'startButton', startButtonClicked, this, 2, 1, 0);
    winScreen = game.add.tileSprite(0, 0, 1280, 720, 'winScreen');
    winScreen.visible = false;
    loseScreen = game.add.tileSprite(0, 0, 800, 600, 'loseScreen');
    loseScreen.visible = false;
    retryButton = game.add.button(316, 387, 'retryButton', restartGame, this, 2, 1, 0);
    retryButton.visible = false;
    */
    //sounds
    //example = game.add.audio('example',1,false);
    gameIsStarted = false;
}

//game logic (updates every frame)
function update() {
    if (gameIsStarted) {
        //check for collisions
        //game.physics.collide(exampleGroup1, exampleGroup2, examplesCollide, null, this);

        //check if game is over
        //if (gameIsOver) gameOver('lose');
        //else if (gameIsOver) gameOver('win');

    }
}
function toggleFullScreen()
{
        if (!game.stage.scale.isFullScreen) game.stage.scale.startFullScreen();
        else game.stage.scale.stopFullScreen();
}

function startGame() {
    score = 0;
    //water background
    background = game.add.tileSprite(0, 0, 1280, 720, 'background');

    //add score text
    var style = { font: "30px Arial", fill: "#FFFF00", fontWeight: "bold", textAlign: "right" };
    txtScore = game.add.text(745, 20, score, style);

    //create entity pools
    animals = game.add.group();
    sceneryObjects = game.add.group();

    //set the game to started for update loop
    gameIsStarted = true;
}

//hides titleScreen once start button clicked

    function startButtonClicked() {
    /*
    titleScreen.visible = false;
    startButton.visible = false;
    startGame();
    */
}

//add "x" amount to score
function changeScore(changeAmount) {
    score += changeAmount;
    txtScore.setText(score.toString());
}

function playSound(x,y,sound,volume)
{
    var volume = 1;
    //if only one argument is supplied (aka we don't care about distance)
    if(typeof x === "object")
    {
        sound = x;
        volume = y;
    }
    else
    {
    var distance = game.physics.distanceToXY(shark,x,y);
    var maxDistance = 300;
    if (distance>maxDistance) distance=maxDistance;
    volume = (maxDistance-distance)/maxDistance;
    }
    if (volume == 0) volume = 0.01;
    sound.play();
    sound.volume = volume;
}
//handle end game
function gameOver(result) {
    gameIsStarted = false;

    //destroy all game assets
    animals.destroy();
    sceneryObjects.destroy();

    //show corresponding screen
    //if (result == 'win') winScreen.visible = true;
    //else loseScreen.visible = true;
    //retryButton.visible = true;

}

function restartGame() {
    //turn off screens and set up new game
    /*
    winScreen.visible = false;
    loseScreen.visible = false;
    retryButton.visible = false;
     */
    startGame();
}

function render() {
}