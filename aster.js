aster = {

    preload: function () {
        console.log('aster preload');
    },

    create: function () {
        console.log('aster create');
    },

    update: function () {
        var timeInMs = Date.now();
        console.log('aster update - wywolywane co klatke:' + timeInMs);
    }
};
