kot = {

    slajdySklepu: [],
    slajdyWidoczne: [],
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
    bigDoor: {},
    muzykaLuka: {},
    granaMuzyka: false,

    wiedzma: {},
    czyStart: false,


    preload: function () {
        // this.game.load.audio('bigDoor', 'assets/shop/bigDoor.mp3');
        // this.game.load.audio('luke2', 'assets/shop/luke2.mp3');

        // this.czasStartu = Date.now();

        // this.game.load.image('wiedzma', 'assets/shop/shoppCallNight.png');
        this.game.load.image('kot', 'assets/kot/pls.png');

        // this.game.load.image('luke000', 'assets/shop/luke/luke000.png');
/*
        this.game.load.image('medium', 'assets/intro/medium.jpeg');
        this.game.load.image('longTime', 'assets/intro/long_time_ago.jpg');
        this.game.load.image('miasto', 'assets/intro/miasto.jpg');
        this.game.load.image('dom', 'assets/intro/house.png');
        this.game.load.image('shopday', 'assets/intro/shopp_dawn.png');
        this.game.load.image('shopnight', 'assets/intro/shopp_night.png');*/
    },

    create: function () {
        this.wiedzma =this.game.add.image(0, 0, 'kot');
        this.wiedzma.width = 600;
        this.wiedzma.height = 600;


        // this.dodajSlajd(this.game.add.image(0, 0, 'luke000'));
        // console.log('intro create');
        /* this.dodajSlajd(this.game.add.image(0, 0, 'medium'));
        this.dodajSlajd(this.game.add.image(0, 0, 'longTime'));
        this.dodajSlajd(this.game.add.image(0, 0, 'miasto'));
        this.dodajSlajd(this.game.add.image(0, 0, 'dom'));
        this.dodajSlajd(this.game.add.image(0, 0, 'shopday'));
        this.dodajSlajd(this.game.add.image(0, 0, 'shopnight'));*/

        // this.bigDoor = this.game.add.audio('bigDoor');
        // this.muzykaLuka = this.game.add.audio('luke2');
    },

    dodajSlajd: function(slajd) {
        this.slajdySklepu.push(slajd);
        this.slajdySklepu[this.slajdySklepu.length-1].height = 200;
        this.slajdySklepu[this.slajdySklepu.length-1].width = 600;
        this.slajdySklepu[this.slajdySklepu.length-1].visible = false;
        this.slajdySklepu[this.slajdySklepu.length-1].position = {x:0, y:400};
        this.slajdySklepu[this.slajdySklepu.length-1].alpha = 0;
        this.slajdyWidoczne.push(false);


    },

    zacznijGracMuzyke: function () {
        if (this.granaMuzyka)  {
            return;
        }

        this.granaMuzyka = true;
        this.muzykaLuka.play();

    },

    pokazLuka: function () {
        this.slajdySklepu[0].visible = true;
        this.slajdySklepu[0].alpha = 1;
        this.slajdyWidoczne[0]=true;
    },

    wystartuj: function () {
        this.czyStart = true;
        this.bigDoor.play();
        this.czasStartu = Date.now();
    },

    update: function () {
        if (!this.czyStart) return;
        var timeInMs = Date.now();
        if (timeInMs-this.czasStartu > 6000) {
            this.zacznijGracMuzyke();
            this.pokazLuka();
        }
        /*
                if (timeInMs-this.czasStartu > this.czasySlajdow[this.ktorySlajd]) {
                    if (this.ktorySlajd<this.slajdySklepu.length) {
                        this.slajdySklepu[this.ktorySlajd].alpha = 1;
                        this.slajdySklepu[this.ktorySlajd].visible = true;
                        this.czasStartu = Date.now();
                        this.ktorySlajd++;
                    }
                } else if (timeInMs-this.czasStartu > this.czasySlajdow[this.ktorySlajd]-1000) {
                    if (this.ktorySlajd<this.slajdySklepu.length) {

                        this.slajdySklepu[this.ktorySlajd].alpha = (timeInMs-this.czasStartu-this.czasySlajdow[this.ktorySlajd]+1000)/1000;
                        this.slajdySklepu[this.ktorySlajd].visible = true;
                    }
                }*/
    },

    ukryj: function () {
        console.log('kryjemy kota');
        this.wiedzma.visible = false;
        // for (var i=0; i<this.slajdySklepu.length; i++) {
        //     console.log('i:'+i);
        //     this.slajdySklepu[i].visible = false;
        // }
    },

    pokaz: function () {
        console.log('pokazijemy kota');
        this.wiedzma.visible = true;
        this.wiedzma.alpha = 1;
        /*for (var i=0; i<this.slajdySklepu.length; i++) {
            if (this.slajdyWidoczne[i]) {
                this.slajdySklepu[i].visible = true;
                this.slajdySklepu[i].alpha = 1;
            }
        }*/
    },

    kliknij: function () {

    }
};
