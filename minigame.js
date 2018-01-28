minigame = {

    preload: function () {
        console.log('preload');
    },

    create: function () {
        console.log('create');
    },

    update: function () {
        var timeInMs = Date.now();
        console.log('update - wywolywane co klatke:' + timeInMs);
    }
};
