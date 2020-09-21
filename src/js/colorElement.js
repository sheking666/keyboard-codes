import jQuery from 'jquery';
import 'jquery-color';

window.$ = window.jQuery = jQuery;

export default function () {
    const element = '.keyboard-keys>.btn';
    const colors = ['#ff0000', '#158000', '#ddbc00', '#ab00c2', '#0059ff'];
    const defaultColor = '#bbbbbb';
    let currentColor = colors[0];

    $(element).on('mouseenter', function () {
        currentColor = colors[Math.floor(Math.random() * colors.length)];

        $(this).animate({
            borderColor: currentColor,
            color: currentColor,
        }, 35);

    }).on('mouseleave', function () {
        currentColor = defaultColor;

        $(this).animate({
            borderColor: currentColor,
            color: currentColor,
        }, 35);
    });
};