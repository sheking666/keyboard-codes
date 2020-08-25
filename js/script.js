console.log("It's alive!");

const colors = ['ff0000', '158000', 'ddbc00', 'ab00c2', '0059ff'];
const defColor = 'bbbbbb';
let curColor = colors[0];

$(".keyboard-keys>.btn").hover(function () {
    curColor = colors[Math.floor(Math.random() * colors.length)];

    $(this).animate({
        borderColor: `#${curColor}`,
        color: `#${curColor}`,
    }, 50);

}, function () {
    $(this).animate({
        borderColor: `#${defColor}`,
        color: `#${defColor}`
    }, 50);
});