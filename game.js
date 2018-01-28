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

    var rodzajGry = 'intro';

    function preload() {
        minigame.game = game;
        aster.game = game;
        snake.game = game;
        pasek.game = game;
        intro.game = game;
        shop.game = game;
        kot.game = game;
        snake.canvasWidth = canvasWidth;
        snake.canvasHeight = canvasHeight;
        minigame.preload();
        pasek.preload();
        aster.preload();
        snake.preload();
        intro.preload();
        shop.preload();
        kot.preload();

        intro.powrot = wrocDoGlownegoMenu;
        snake.powrot = wrocDoGlownegoMenu;
        snake.przegrana = przegranaMiniGry;
        snake.wygrana = wygranaMiniGry;
    }

    function przegranaMiniGry() {
        //wrocDoGlownegoMenu();
        doKota();
    }

    function wygranaMiniGry() {
        //wrocDoGlownegoMenu();
        doKota();
    }

    function doKota() {
        rodzajGry = 'kot';
        kot.pokaz();
        //shop.wystartuj();
    }

    function create() {
            snake.create();
            pasek.create();
            intro.create();
            shop.create();
            kot.create();

            game.input.onDown.add(kliknij, this);
    }

    function kliknij(pointer) {
        /*if ((rodzajGry !== 'shop')) {
            zmienScene();
            return;
        }
        shop.kliknij();
*/
        zmienScene();
    }


    function zmienScene(pointer) {
        // the player is moving now!
        console.log('y:::'+rodzajGry);
        if ((rodzajGry !== 'snake'))
        {
            rodzajGry = 'snake';
            snake.pokaz();
        }
    }

    function wrocDoGlownegoMenu() {
        rodzajGry = 'shop';
        shop.pokaz();
        shop.wystartuj();
    }

    function update() {
        //snake.update();
        switch (rodzajGry) {
            case 'snake':
                console.log('kryjemy');
                snake.update();
                pasek.ukryj();
                intro.ukryj();
                shop.ukryj();
                kot.ukryj();
                break;
            case 'pasek':
                pasek.update();
                break;
            case 'intro':
                snake.ukryj();
                pasek.ukryj();
                shop.ukryj();
                intro.update();
                kot.ukryj();
                break;
            case 'shop':
                shop.update();
                snake.ukryj();
                pasek.ukryj();
                kot.ukryj();
                break;
            case 'kot':
                shop.ukryj();
                snake.ukryj();
                pasek.ukryj();
                kot.update();
                break;
        }
    }
};
