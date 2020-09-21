import { elements } from './views/base';
import colorElement from './views/colorElement'
import * as buttonCodesView from './views/buttonCodesView'
import jQuery from 'jquery';
import 'jquery-color';

window.$ = window.jQuery = jQuery;

// If codes are displayed
let codesState = false;

// ONLOAD button color animation
$(colorElement());

// Keyboard keys controller
$(document).on('keydown', event => {
    event.preventDefault();
    if (!codesState) {
        codesState = true;
        buttonCodesView.renderCodeTable(event);
    } else {
        buttonCodesView.deleteCodeTable();
        buttonCodesView.renderCodeTable(event);
    }
});