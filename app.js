const form = document.querySelector('#logoform');
const brandInput = document.querySelector('input[name="brandname"]');
const colorInput = document.querySelector('input[name="color"]');
const fontSizeInput = document.querySelector('input[name="fontsize"]');
form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log('submit')
    console.log(brandInput.value, colorInput.value, fontSizeInput.value)
})