// script.js

document.addEventListener('DOMContentLoaded', () => {
    const imageBoxes = document.querySelectorAll('.image-box');
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.close');

    imageBoxes.forEach(box => {
        box.addEventListener('click', () => {
            const modalId = box.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            const container = modal.querySelector('.game-container');
            if (container && !container.querySelector('iframe')) {
                const iframe = document.createElement('iframe');
                iframe.frameborder = '0';
                iframe.allowfullscreen = '';
                let src = '';
                if (modalId === 'modal20') {
                    src = 'https://itch.io/embed-upload/10756645?color=333333';
                    iframe.width = '640';
                    iframe.height = '380';
                } else if (modalId === 'modal22') {
                    src = 'https://itch.io/embed-upload/10867273?color=333333';
                    iframe.width = '100%';
                    iframe.height = '532px';
                } 
                else if (modalId === 'modal2') {
                    src = 'https://itch.io/embed-upload/10905140?color=333333';
                    iframe.width = '100%';
                    iframe.height = '660px';
                }
                iframe.src = src;
                container.appendChild(iframe);
            }
            document.getElementById(modalId).style.display = 'flex';
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modalId = button.getAttribute('data-close');
            const modal = document.getElementById(modalId);
            const container = modal.querySelector('.game-container');
            if (container) {
                const iframe = container.querySelector('iframe');
                if (iframe) container.removeChild(iframe);
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
            const container = modal.querySelector('.game-container');
            if (container) {
                const iframe = container.querySelector('iframe');
                if (iframe) container.removeChild(iframe);
            }
            modal.style.display = 'none';
            // event.target.style.display = 'none';
            // var frame = document.getElementsByClassName('youtube-video');
            // frame[0].contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
        }
    });
});