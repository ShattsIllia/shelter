"use strict";

let slider = tns({
    container: '#slider',
    items: 1,
    slideBy: 1,
    controlsContainer: '.slider-controls',
    mouseDrag: true,
    responsive: {
        965: {
            items: 2,
        },
        1280: {
            items: 3,
        }
    }
});