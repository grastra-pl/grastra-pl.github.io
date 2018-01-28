intro = {

    tlaIntra: [],
    czasStartu: 0,
    czasySlajdow: [
        3000,
        6000,
        3000
    ],

    ktorySlajd: 0,

    preload: function () {
        this.czasStartu = Date.now();
        console.log('tlo intra');
        this.game.load.image('medium', 'assets/intro/medium.jpeg');
        this.game.load.image('longTime', 'assets/intro/long_time_ago.jpg');
        this.game.load.image('miasto', 'assets/intro/miasto.jpg');
    },

    create: function () {
        console.log('intro create');
        // tloIntra = this.game.add.image(0, 0, 'planszaStartowa');
        this.dodajSlajd(this.game.add.image(0, 0, 'medium'));
        this.dodajSlajd(this.game.add.image(0, 0, 'longTime'));
        this.dodajSlajd(this.game.add.image(0, 0, 'miasto'));
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
