$(document).ready(function() {
    const images = [
        { src: 'path_to_jug.jpg', caption: 'J for Jug' },
        { src: 'path_to_icecream.jpg', caption: 'I for Ice cream' },
        { src: 'path_to_moon.jpg', caption: 'First M for Moon' },
        { src: 'path_to_mirror.jpg', caption: 'Second M for Mirror' },
        { src: 'path_to_yacht.jpg', caption: 'Y for Yacht' },
        { src: 'path_to_lion.jpg', caption: 'L for Lion' }, // Updated to Lion
        { src: 'path_to_umbrella.jpg', caption: 'U for Umbrella' },
        { src: 'path_to_book.jpg', caption: 'B for Book' },
        { src: 'path_to_elephant.jpg', caption: 'E for Elephant' },
        { src: 'path_to_tree.jpg', caption: 'T for Tree' },
        { src: 'path_to_apple.jpg', caption: 'A for Apple' }
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
