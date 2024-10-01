const heart = document.getElementById('heart');
const music = document.getElementById('music');
const photos = document.querySelectorAll('.photo');

heart.addEventListener('click', () => {
        music.play();
    // love bertebaran
    for (let i = 0; i < 50; i++) {
        const love = document.createElement('div');
        love.className = 'love';
        love.textContent = '❤️';
        love.style.left = Math.random() * 100 + 'vw';
        love.style.top = Math.random() * 100 + 'vh';
        document.body.appendChild(love);

        // Remove heart after animation
        setTimeout(() => {
            love.remove();
        }, 1000);
    }

    // Move photos
    photos.forEach(photo => {
        const randomX = (Math.random() * 40 - 20) + 'vw'; // Random move within 20% of viewport width
        const randomY = (Math.random() * 40 - 20) + 'vh'; // Random move within 20% of viewport height
        photo.style.transform = `translate(${randomX}, ${randomY})`;
    });
});
