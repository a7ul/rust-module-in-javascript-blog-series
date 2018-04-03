const ffi = require('ffi');
const libPath = '../web/target/release/libweb.dylib';

const libWeb = ffi.Library(libPath, {
    'add': [ 'int32', [ 'int32', 'int32' ] ],
    'subtract': [ 'int32', [ 'int32', 'int32' ] ],
    'multiply': [ 'int32', [ 'int32', 'int32' ] ]
});


const { add, subtract, multiply } = libWeb;
console.log('4 + 2 = ', add(4, 2));
console.log('4 - 2 = ', subtract(4, 2));
console.log('4 * 2 = ', multiply(4, 2));
