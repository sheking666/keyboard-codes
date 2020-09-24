import { elements } from './views/base';
import colorElement from './views/colorElement';
import ClickCodes from './models/ClickCodes';
import * as codesView from './views/codesView';
import jQuery from 'jquery';
import 'jquery-color';

// ------------- JQUERY INIT -------------
window.$ = window.jQuery = jQuery;

// ------------- BUTTON COLOR ANIMATION -------------
$(colorElement(elements.keyboardButton));

// ------------- CODES DISPLAY CONTROLLER -------------
let codesState = false;
const showCodes = e => {
    if (!codesState) {
        codesState = true;
        codesView.renderCodeTable(e);
    } else {
        codesView.deleteCodeTable();
        codesView.renderCodeTable(e);
    }
};

// ------------- CLIPBOARD CONTROLLER -------------
const controlCopy = text => {
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    console.log(`${text} copied to clipboard.`);
};


// ------------- EVENT LISTENERS -------------
$(document).on('keydown', event => {
    event.preventDefault();
    showCodes(event);
});

$(elements.keyboardContainer).on('click', e => {
    try {
        const id = e.target.closest(elements.button).id;
        if (id) {
            const e = new ClickCodes(id).codesEventGenerator();
            showCodes(e);
        }
    } catch (error) {

    }
});

$(elements.main).on('click', e => {
    try {
        const code = e.target.closest(elements.codeCell).innerHTML;
        if (code) {
            let codeHtml = $.parseHTML(code);
            const text = codeHtml[3].innerText;
            controlCopy(text);
        }
    } catch (error) {

    }
});