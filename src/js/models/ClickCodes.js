export default class ClickCodes {
    constructor(id) {
        this.id = parseInt(id.slice(1)); // 'k1' --> 1, 'k23' --> 23
    }

    codesEventGenerator() {
        const keyTable = [
            ['192', '`', '192', 'Backquote'],
            ['49', '1', '49', 'Digit1'],
            ['50', '2', '50', 'Digit2'],
            ['51', '3', '51', 'Digit3'],
            ['52', '4', '52', 'Digit4'],
            ['53', '5', '53', 'Digit5'],
            ['54', '6', '54', 'Digit6'],
            ['55', '7', '55', 'Digit7'],
            ['56', '8', '56', 'Digit8'],
            ['57', '9', '57', 'Digit9'],
            ['48', '0', '48', 'Digit0'],
            ['189', '-', '189', 'Minus'],
            ['187', '=', '187', 'Equal'],
            ['8', 'Backspace', '8', 'Backspace'],
            ['9', 'Tab', '9', 'Tab'],
            ['81', 'q', '81', 'KeyQ'],
            ['87', 'w', '87', 'KeyW'],
            ['69', 'e', '69', 'KeyE'],
            ['82', 'r', '82', 'KeyR'],
            ['84', 't', '84', 'KeyT'],
            ['89', 'y', '89', 'KeyY'],
            ['85', 'u', '85', 'KeyU'],
            ['73', 'i', '73', 'KeyI'],
            ['79', 'o', '79', 'KeyO'],
            ['80', 'p', '80', 'KeyP'],
            ['219', '[', '219', 'BracketLeft'],
            ['221', ']', '221', 'BracketRight'],
            ['220', '\\', '220', 'Backslash'],
            ['20', 'CapsLock', '20', 'CapsLock'],
            ['65', 'a', '65', 'KeyA'],
            ['83', 's', '83', 'KeyS'],
            ['68', 'd', '68', 'KeyD'],
            ['70', 'f', '70', 'KeyF'],
            ['71', 'g', '71', 'KeyG'],
            ['72', 'h', '72', 'KeyH'],
            ['74', 'j', '74', 'KeyJ'],
            ['75', 'k', '75', 'KeyK'],
            ['76', 'l', '76', 'KeyL'],
            ['186', ';', '186', 'Semicolon'],
            ['222', '\'', '222', 'Quote'],
            ['13', 'Enter', '13', 'Enter'],
            ['16', 'Shift', '16', 'ShiftLeft'],
            ['90', 'z', '90', 'KeyZ'],
            ['88', 'x', '88', 'KeyX'],
            ['67', 'c', '67', 'KeyC'],
            ['86', 'v', '86', 'KeyV'],
            ['66', 'b', '66', 'KeyB'],
            ['78', 'n', '78', 'KeyN'],
            ['77', 'm', '77', 'KeyM'],
            ['188', ',', '188', 'Comma'],
            ['190', '.', '190', 'Period'],
            ['191', '/', '191', 'Slash'],
            ['16', 'Shift', '16', 'ShiftRight'],
            ['17', 'Control', '17', 'ControlLeft'],
            ['91', 'Meta', '91', 'MetaLeft'],
            ['18', 'Alt', '18', 'AltLeft'],
            ['32', ' ', '32', 'Space'],
            ['18', 'AltGraph', '18', 'AltRight'],
            ['92', 'Meta', '92', 'MetaRight'],
            ['93', 'ContextMenu', '93', 'ContextMenu'],
            ['17', 'Control', '17', 'ControlRight']
        ];

        const codes = keyTable[this.id];

        const event = {
            keyCode: codes[0],
            key: codes[1],
            which: codes[2],
            code: codes[3]
        };

        return event;
    }
}