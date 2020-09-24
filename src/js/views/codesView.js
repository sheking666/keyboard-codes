import { elements } from './base'
import jQuery from 'jquery';
import 'jquery-color';

window.$ = window.jQuery = jQuery;

export const renderCodeTable = event => {
    const markup = `
        <article class="container codes">
            <a href="#" title="Click - copy to clipboard"><section class="code-cell">
                <div class="code-name">event.keyCode</div>
                <div class="code">${event.keyCode}</div>
            </section></a>
            <a href="#" title="Click - copy to clipboard"><section class="code-cell">
                <div class="code-name">event.key</div>
                <div class="code">${event.key}</div>
            </section></a>
            <a href="#" title="Click - copy to clipboard"><section class="code-cell">
                <div class="code-name">event.which</div>
                <div class="code">${event.which}</div>
            </section></a>
            <a href="#" title="Click - copy to clipboard"><section class="code-cell">
                <div class="code-name">event.code</div>
                <div class="code">${event.code}</div>
            </section></a>
            <div class="clearfix"></div>
        </article>
    `;
    $(markup).insertAfter(elements.keyboardContainer);
};

export const deleteCodeTable = () => {
    $(elements.containerCodes).remove();
};