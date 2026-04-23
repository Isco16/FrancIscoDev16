// script.js

document.addEventListener('DOMContentLoaded', () => {
    const imageBoxes = document.querySelectorAll('.image-box');
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.close');

    imageBoxes.forEach(box => {
        box.addEventListener('click', () => {
            const modalId = box.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            const game_div = modal.querySelector('.game-div');
            if (game_div && !game_div.querySelector('iframe')) {
                const iframe = document.createElement('iframe');
                iframe.frameborder = '0';
                iframe.allowfullscreen = '';
                let src = '';
                if (modalId === 'modal20') {
                    src = 'https://itch.io/embed-upload/10756645?color=333333';
                    iframe.width = '100%';
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
                game_div.appendChild(iframe);
            }
            document.getElementById(modalId).style.display = 'flex';
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modalId = button.getAttribute('data-close');
            const modal = document.getElementById(modalId);
            const game_div = modal.querySelector('.game-div');
            if (game_div) {
                const iframe = game_div.querySelector('iframe');
                if (iframe) game_div.removeChild(iframe);
            }
            modal.style.display = 'none';
            const iframe = modal.querySelector('iframe');
            if(iframe != null){
                iframe.src = iframe.src; // Reset the iframe src to stop the video
            }
        });
    });

    window.addEventListener('click', (event) => {
        if (event.target.classList.contains('modal')) {
            const modal = event.target;
            const game_div = modal.querySelector('.game-container');
            if (game_div) {
                const iframe = game_div.querySelector('iframe');
                if (iframe) game_div.removeChild(iframe);
            }
            modal.style.display = 'none';
            const iframe = modal.querySelector('iframe');
            if(iframe != null){
                iframe.src = iframe.src; // Reset the iframe src to stop the video
            }
        }
    });
});