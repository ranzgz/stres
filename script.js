//  This script only adds basic functionality and placeholder pixelation effect.
//  For a true pixelation, a canvas-based solution or more complex CSS is needed.

document.addEventListener('DOMContentLoaded', function() {
    const profileImage = document.querySelector('.profile-image img');

    // Function to apply/remove pixelation class
    function togglePixelation() {
        profileImage.classList.toggle('pixelate');
    }

    // Simple animation: Pixelate on mouseover, unpixelate on mouseout
    profileImage.addEventListener('mouseover', togglePixelation);
    profileImage.addEventListener('mouseout', togglePixelation);

});