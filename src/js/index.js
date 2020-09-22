import { elements } from './views/base';
import colorElement from './views/colorElement';
import ClickCodes from './models/ClickCodes';
import * as codesView from './views/codesView';
import jQuery from 'jquery';
import 'jquery-color';

// ------------- JQUERY INIT -------------
window.$ = window.jQuery = jQuery;

// ------------- BUTTON COLOR ANIMATION -------------
$(colorElement());

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
// some code


// ------------- EVENT LISTENERS -------------
$(document).on('keydown', event => {
    event.preventDefault();
    showCodes(event);
});

$(elements.keyboardContainer).on('click', event => {
    try {
        const id = event.target.closest(elements.button).id;
        if (id) {
            const e = new ClickCodes(id).codesEventGenerator();
            showCodes(e);
        }
    } catch (error) {
        console.log('You clicked on an empty space on the keyboard.');
    }
});