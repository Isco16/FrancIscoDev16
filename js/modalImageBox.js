// script.js

document.addEventListener('DOMContentLoaded', () => {
    const imageBoxes = document.querySelectorAll('.image-box');
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.close');

    imageBoxes.forEach(box => {
        box.addEventListener('click', () => {
            const modalId = box.getAttribute('data-modal');
            document.getElementById(modalId).style.display = 'flex';
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modalId = button.getAttribute('data-close');
            const modal = document.getElementById(modalId);
            const iframe = modal.querySelector('iframe');
            if(iframe != null){
                iframe.src = iframe.src; // Reset the iframe src to stop the video
            }
            modal.style.display = 'none';
            // const modalId = button.getAttribute('data-close');
            // document.getElementById(modalId).style.display = 'none';
            // var frame = document.getElementsByClassName('youtube-video');
            // frame[0].contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
        });
    });

    window.addEventListener('click', (event) => {
        if (event.target.classList.contains('modal')) {
            const modal = event.target;
            const iframe = modal.querySelector('iframe');
            if(iframe != null){
                iframe.src = iframe.src; // Reset the iframe src to stop the video
            }
            modal.style.display = 'none';
            // event.target.style.display = 'none';
            // var frame = document.getElementsByClassName('youtube-video');
            // frame[0].contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
        }
    });
});