import jQuery from 'jquery';
import 'jquery-color';

window.$ = window.jQuery = jQuery;

const animateElement = (el, curColor) => {
    $(el).animate({
        borderColor: curColor,
        color: curColor,
    }, 35);
};

export default function (el) {
    const colors = ['#ff0000', '#158000', '#ddbc00', '#ab00c2', '#0059ff'];
    const defaultColor = '#bbbbbb';
    let currentColor = colors[0];

    $(el).on('mouseenter', function () {
        currentColor = colors[Math.floor(Math.random() * colors.length)];
        animateElement(this, currentColor);
    }).on('mouseleave', function () {
        currentColor = defaultColor;
        animateElement(this, currentColor);
    });
};