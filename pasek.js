pasek = {

    tloPaska: {},

    preload: function () {
        console.log('pasek preload');
        this.game.load.image('tloPaska', 'assets/pasek/ouija_mg_bg.png');
        this.game.load.image('kostka', 'assets/pasek/kostka.png');
    },

    create: function () {
        console.log('pasek create');
        tloPaska = this.game.add.image(0, 0, 'tloPaska');
    },

    update: function () {
        var timeInMs = Date.now();
        //console.log('pasek update - wywolywane co klatke:' + timeInMs);
    },

    ukryj: function () {
        tloPaska.position= {x:-1000,y:-1000};
    }
};
