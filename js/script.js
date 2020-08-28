// Script for animating colors in an element using jQuery Color (https://github.com/jquery/jquery-color)
// A random color is picked from the palette and applied to this element

(function colorElement() {
    const element = '.keyboard-keys>.btn';
    const colors = ['#ff0000', '#158000', '#ddbc00', '#ab00c2', '#0059ff'];
    const defaultColor = '#bbbbbb';
    let currentColor = colors[0];

    $(element).hover(function () {
        currentColor = colors[Math.floor(Math.random() * colors.length)];

        $(this).animate({
            borderColor: currentColor,
            color: currentColor,
        }, 50);

    }, function () {
        $(this).animate({
            borderColor: defaultColor,
            color: defaultColor,
        }, 50);
    });
})();