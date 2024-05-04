$(document).ready(function() {
    const images = [
        { src: '../images/jug.jpg', caption: 'J for Jug' },  // Update as per actual image name
        { src: '../images/icecream.jpg', caption: 'I for Ice cream' },  // Update as per actual image name
        { src: '../images/moon.jpg', caption: 'First M for Moon' },
        { src: '../images/mirror.jpg', caption: 'Second M for Mirror' },  // Update as per actual image name
        { src: '../images/yacht.jpg', caption: 'Y for Yacht' },
        { src: '../images/lion.jpg', caption: 'L for Lion' },  // Update as per actual image name
        { src: '../images/umbrella.jpg', caption: 'U for Umbrella' },
        { src: '../images/book.jpg', caption: 'B for Book' },  // Update as per actual image name
        { src: '../images/elephant.jpg', caption: 'E for Elephant' },  // Update as per actual image name
        { src: '../images/tree.jpg', caption: 'T for Tree' },
        { src: '../images/apple.jpg', caption: 'A for Apple' }  // Update as per actual image name
    ];

    let currentImage = 0;

    function showImage(index) {
        currentImage = index < 0 ? images.length - 1 : index % images.length;
        const image = images[currentImage];
        
        $('.slides').html(`<img src="${image.src}" alt="${image.caption}"> <div>${image.caption}</div>`);
        
        $('.image-list li').removeClass('selected').eq(currentImage).addClass('selected');
    }

    const imageListHTML = images.map((img, idx) => 
        `<li onclick="showImage(${idx})">${img.caption}</li>`).join('');
    $('.image-list').html(imageListHTML);

    showImage(currentImage);

    $('#prev').click(function() { showImage(currentImage - 1); });
    $('#next').click(function() { showImage(currentImage + 1); });
});
