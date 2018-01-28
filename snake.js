snake = {

    head: {},
    cursors: {},
    apple: {},
    gameText: {},
    playerDirection: {},
    directions: Object.freeze({up: 0, down: 1, right: 2, left: 3}),
    canvasWidth: 0,
    canvasHeight: 0,
    skala: 2,
    playerSize: 12,
    x: 0,
    y: 0,
    frameCounter: 0,
    gameSpeed: 12,
    score: 0,
    playerRotation: Math.PI,
    game: {},
    tail: [],
    dlOgona: 5,
    tolerancjaX: 15,
    tolerancjaY: 22,
    przesuniecieX: 20,
    kratekWPoziomie: 20,
    kratekWPionie: 20,
    ileDodacDoOgona: 1,

    tloSnake: {},

    updateScale: function () {
        this.tolerancjaX = 15 * this.skala;
        this.tolerancjaY = 22 * this.skala;
        this.przesuniecieX = 20 * this.skala;
        this.playerSize= 12 * this.skala;
    },

    preload: function () {
        this.game.load.image('glowa', 'assets/snake/snake_glit.png');
        this.game.load.image('ogon', 'assets/snake/glit.png');
        this.game.load.image('apple', 'assets/snake/kocimjentka.png');
        this.game.load.image('tlo', 'assets/snake/sky2bg.png');

        this.updateScale();

    },

    ukryj: function() {
        this.tloSnake.visible = false;
        this.head.position = {x:-1500,y:-1500};
        this.apple.position = {x:-1500,y:-1500};
        this.gameText.visible = false;
        if (this.tail.length>0) {
            for (var i = 0; i < this.tail.length; i++) {
                this.tail[i].position = {x:-1500,y:-1500};
            }
        }
    },
    pokaz: function() {
        this.tloSnake.visible = true
        this.gameText.visible = true;
        this.placeRandomApple();
    },

    create: function () {
        this.tloSnake = this.game.add.image(0, 0, 'tlo');
        this.gameText = this.game.add.text(this.canvasWidth, 0, "0", {
            font: "28px Arial",
            fill: "#ffda8e"
        });
        this.gameText.anchor.setTo(1, 0);
        this.initSnake();
        this.placeRandomApple();
        this.playerDirection = this.directions.right;
        this.cursors = this.game.input.keyboard.createCursorKeys();
    },

    update: function() {
        this.gameText.text = this.score;
        this.updateDirection();
        this.updateTail();
        this.frameCounter++;
        if (this.frameCounter >= this.gameSpeed) {
            this.movePlayer();
            this.checkCollisions();
            this.frameCounter = 0;
        }
    },

    checkCollisions: function () {
        this.checkAppleCollisions();
        this.checkTailCollisions();
    },

    checkAppleCollisions: function () {
        if ((this.apple.position.x>this.x-this.tolerancjaX+this.przesuniecieX) && (this.apple.position.x<this.x+this.tolerancjaX+this.przesuniecieX) && (this.apple.position.y>this.y-this.tolerancjaY) && (this.apple.position.y<this.y+this.tolerancjaY) )
        {
            this.score++;
            this.apple.destroy();
            this.placeRandomApple();
            this.gameSpeed-=0.5;
            if (this.gameSpeed <= 2) this.gameSpeed = 2;
            this.dlOgona+=this.ileDodacDoOgona;
        }
    },

    checkTailCollisions: function () {
        if (this.tail.length<3) {
            return;
        }

        for (var i=this.tail.length-2; i>0; i--) {
            if ((this.tail[i].position.x===this.x) && (this.tail[i].position.y===this.y) )
            {
                console.log('zderzenie z ogonem:'+i+' x='+this.x+' y'+this.y);
            }
        }
    },

    initSnake: function () {
        this.head = this.game.add.image(0, 0, 'glowa');
        this.head.position={x: this.x, y: this.y};
        this.newTail(this.x,this.y);
    },

    newTail: function() {
        var dym = this.game.add.image(0, 0, 'ogon');
        dym.position={x: this.x, y: this.y};
        dym.alpha=1;
        this.tail.push(dym);
    },

    placeRandomApple: function() {
        // if (this.apple !== undefined) this.apple.destroy();
        this.apple = this.game.add.image(0, 0, 'apple');
        this.apple.position.x = (2+Math.floor(Math.random() * (this.kratekWPoziomie-4)) * this.playerSize);
        this.apple.position.y = (2+Math.floor(Math.random() * (this.kratekWPionie-4)) * this.playerSize);
    },

    updateTail: function() {
        while(this.tail.length>this.dlOgona) {
            var doUsuniecia = this.tail.shift();
            doUsuniecia.destroy();
        }

        if (this.tail.length>0) {
            var tl = this.tail.length;

            for (var i = tl - 1; i > 0; i--) {
                if (i > this.tail.length * .25) {
                    this.tail[i].alpha = 1;
                } else {
                    this.tail[i].alpha = 0.5+ 2 * i / this.tail.length;
                }
            }
        }
    },

    updateDirection: function() {
        if (this.cursors.right.isDown && this.playerDirection !== this.directions.left) {
            this.playerDirection = this.directions.right;
        }
        if (this.cursors.left.isDown && this.playerDirection !== this.directions.right) {
            this.playerDirection = this.directions.left;
        }
        if (this.cursors.up.isDown && this.playerDirection !== this.directions.down) {
            this.playerDirection = this.directions.up;
        }
        if (this.cursors.down.isDown && this.playerDirection !== this.directions.up) {
            this.playerDirection = this.directions.down;
        }
    },

    movePlayer: function() {

        if (this.playerDirection === this.directions.right) {
            this.x += this.playerSize;
            this.playerRotation = Math.PI*1.5;
            this.head.x=this.x+13 * this.skala;
            this.head.y=this.y+51 * this.skala;
        } else if (this.playerDirection === this.directions.left) {
            this.x -= this.playerSize;
            this.playerRotation = Math.PI*.5;
            this.head.x=this.x+53 * this.skala;
            this.head.y=this.y-12 * this.skala;
        } else if (this.playerDirection === this.directions.up) {
            this.y -= this.playerSize;
            this.head.x=this.x+63 * this.skala;
            this.head.y=this.y+44 * this.skala;
            this.playerRotation = Math.PI;
        } else if (this.playerDirection === this.directions.down) {
            this.y += this.playerSize;
            this.playerRotation = 0;
            this.head.x=this.x;
            this.head.y=this.y;
        }
        if (this.x <= 0 - 3*this.playerSize) {
            this.x = this.canvasWidth - this.playerSize - 2*this.playerSize;
        } else if (this.x >= this.canvasWidth - 2*this.playerSize) {
            this.x = - 2*this.playerSize;
        } else if (this.y <= 0 - 2*this.playerSize) {
            this.y = this.canvasHeight - this.playerSize - 2*this.playerSize;
        } else if (this.y >= this.canvasHeight - this.playerSize) {
            this.y = - this.playerSize;
        }

        this.head.rotation = this.playerRotation;

        if (this.playerDirection !== undefined) {
            this.newTail();
        }
    }
};
