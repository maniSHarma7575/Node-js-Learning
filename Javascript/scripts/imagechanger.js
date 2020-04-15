let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg') {
        myImage.setAttribute('src', 'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg');
    } else {
        myImage.setAttribute('src', 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg');

    }
}