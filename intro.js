intro = {

    tlaIntra: [],
    czasStartu: 0,
    czasySlajdow: [
        3000,
        6000,
        3000,
        3000,
        3000,
        3000,
        3000
    ],

    ktorySlajd: 0,
    muzykaMenu: {},

    powrot: function() {},

    preload: function () {
        this.game.load.audio('muzykaMenu', 'assets/intro/muzyka_menu.mp3');

        this.czasStartu = Date.now();
        console.log('tlo intra');
        this.game.load.image('medium', 'assets/intro/medium.jpeg');
        this.game.load.image('longTime', 'assets/intro/long_time_ago.jpg');
        this.game.load.image('miasto', 'assets/intro/miasto.jpg');
        this.game.load.image('dom', 'assets/intro/house.png');
        this.game.load.image('shopday', 'assets/intro/shopp_dawn.png');
        this.game.load.image('shopnight', 'assets/intro/shopp_night.png');


    },

    create: function () {
        console.log('intro create');
        this.dodajSlajd(this.game.add.image(0, 0, 'medium'));
        this.dodajSlajd(this.game.add.image(0, 0, 'longTime'));
        this.dodajSlajd(this.game.add.image(0, 0, 'miasto'));
        this.dodajSlajd(this.game.add.image(0, 0, 'dom'));
        this.dodajSlajd(this.game.add.image(0, 0, 'shopday'));
        this.dodajSlajd(this.game.add.image(0, 0, 'shopnight'));

        this.muzykaMenu = this.game.add.audio('muzykaMenu');
        this.muzykaMenu.play();
    },

    dodajSlajd: function(slajd) {
        this.tlaIntra.push(slajd);
        this.tlaIntra[this.tlaIntra.length-1].height = this.game.height;
        this.tlaIntra[this.tlaIntra.length-1].width = this.game.width;
        this.tlaIntra[this.tlaIntra.length-1].visible = false;
        this.tlaIntra[this.tlaIntra.length-1].alpha = 0;
    },

    update: function () {
        var timeInMs = Date.now();

        if (timeInMs-this.czasStartu > this.czasySlajdow[this.ktorySlajd]) {
            if (this.ktorySlajd<this.tlaIntra.length) {
                // this.tlaIntra[this.ktorySlajd].visible = true;
                this.tlaIntra[this.ktorySlajd].alpha = 1;
                this.tlaIntra[this.ktorySlajd].visible = true;
                this.czasStartu = Date.now();
                this.ktorySlajd++;
            } else {
                this.powrot();
            }
        } else if (timeInMs-this.czasStartu > this.czasySlajdow[this.ktorySlajd]-1000) {
            if (this.ktorySlajd<this.tlaIntra.length) {

                this.tlaIntra[this.ktorySlajd].alpha = (timeInMs-this.czasStartu-this.czasySlajdow[this.ktorySlajd]+1000)/1000;
                this.tlaIntra[this.ktorySlajd].visible = true;
            }
        }
        //console.log('pasek update - wywolywane co klatke:' + timeInMs);
    },

    ukryj: function () {
        for (var i=0; i<this.tlaIntra.length; i++) {
            this.tlaIntra[i].visible = false;
        }
    },

    pokaz: function () {
        for (var i=0; i<this.tlaIntra.length; i++) {
            this.tlaIntra[i].visible = false;
        }
    }
};
