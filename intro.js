intro = {

    tloIntra: {},

    preload: function () {
        console.log('tlo intra');
        // this.game.load.image('planszaStartowa', 'assets/intro/planszaStartowa.jpeg');
    },

    create: function () {
        console.log('intro create');
        // tloIntra = this.game.add.image(0, 0, 'planszaStartowa');
    },

    update: function () {
        var timeInMs = Date.now();
        //console.log('pasek update - wywolywane co klatke:' + timeInMs);
    },

    ukryj: function () {
        // tloIntra.position= {x:-1000,y:-1000};
    }
};
