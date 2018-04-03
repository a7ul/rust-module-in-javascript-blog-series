((function(){
  console.log('loading...');
  fetch('./assets/web.wasm')
  .then(response => response.arrayBuffer())
  .then(bytes => WebAssembly.instantiate(bytes, {}))
  .then(wasmContainer => {
    const {add,subtract,multiply} = wasmContainer.instance.exports;
    console.log('4 + 2 = ', add(4, 2));
    console.log('4 - 2 = ', subtract(4, 2));
    console.log('4 * 2 = ', multiply(4, 2));
  }).catch(err=>console.log(err));
})())