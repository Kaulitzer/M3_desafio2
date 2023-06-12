const image = document.getElementById('myImage');

image.addEventListener('click', function() {
    if (image.classList.contains('red-border')) {
    image.classList.remove('red-border');
    } else {
    image.classList.add('red-border');
    }
});