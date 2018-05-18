app.factory("colorPalette", function() {
    var COLORS = [
        "#f06548", // poppy red
        "#fdc766", // chicky yellow
        "#7bc9a6", // turquoisy green
        "#4ec5da", // sky blue
        "#548ecb", // sea blue
        "#97668f", // lilas
        "#5e2974", // dark purple
    ];
    return function(i) {
        return COLORS[i % COLORS.length];
    }
});

//注入"colorPalette", 调用colorPalette(i)
