const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    /* iteration by 10 symbols */
    let word = '';
    for (let i = 0; i < expr.length/10; i++) {
        let sum = expr.substr(i*10, 10);
        if (sum === '**********') {
            word = word + ' ';
        }
        else {
            word = word + sign(sum);
        }
    }

/* from 10&11 to .&- in table */
function sign(res) {
    let result = '';
    for (let i = 0; i < res.length/2; i++ ) {
        let iter = res.substr(i*2, 2);
        if (iter == 10) {
            result = result + '.';
        }
        else if (iter == 11) {
            result = result + '-';
        }
        else {
            result = result + '';
        }
    }
    return MORSE_TABLE[result];
}
return word;
}

module.exports = {
    decode
}