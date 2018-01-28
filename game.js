window.onload = function() {

    var canvasWidth = 600, canvasHeight = 600;

    var game = new Phaser.Game(
        canvasWidth,
        canvasHeight,
        Phaser.AUTO,
        '',
        {
            preload: preload,
            create: create,
            update: update },
        true
        );

    // var rodzajGry = 'snake';
    // var rodzajGry = 'pasek';
    var rodzajGry = 'intro';

    function preload() {
        minigame.game = game;
        aster.game = game;
        snake.game = game;
        pasek.game = game;
        intro.game = game;
        snake.canvasWidth = canvasWidth;
        snake.canvasHeight = canvasHeight;
        minigame.preload();
        pasek.preload();
        aster.preload();
        snake.preload();
        intro.preload();
    }

    function create() {
        // snake.create();
            snake.create();
            pasek.create();
            intro.create();

            game.input.onDown.add(zmienScene, this);
    }

    function zmienScene(pointer) {
        // the player is moving now!
        //console.log('ytstrdytguiojk');
        if (rodzajGry === 'intro') {
            rodzajGry = 'snake';
            snake.pokaz();
        }
    }

    function update() {
        //snake.update();
        switch (rodzajGry) {
            case 'snake':
                snake.update();
                pasek.ukryj();
                intro.ukryj();
                break;
            case 'pasek':
                pasek.update();
                break;
            case 'intro':
                snake.ukryj();
                pasek.ukryj();
                intro.update();
                break;
        }
    }
};
