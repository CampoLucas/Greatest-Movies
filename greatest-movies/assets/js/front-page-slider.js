(function(){
    const slides = [
        { src: './assets/media/movies/the-shining/front01.jpg', title: 'The Shining' },
        { src: './assets/media/movies/the-shining/front02.jpg', title: 'The Shining' },
        { src: './assets/media/movies/the-shining/front03.jpg', title: 'The Shining' },
        { src: './assets/media/movies/the-shining/front04.jpg', title: 'The Shining' },
        { src: './assets/media/movies/rocketman/front01.jpg', title: 'Rocketman' },
        { src: './assets/media/movies/rocketman/front02.jpg', title: 'Rocketman' },
        { src: './assets/media/movies/rocketman/front03.jpg', title: 'Rocketman' },
        { src: './assets/media/movies/rocketman/front04.jpg', title: 'Rocketman' },
    ];

    function pickRandom(arr){ return arr[Math.floor(Math.random()*arr.length)]; }

    document.addEventListener('DOMContentLoaded', function(){
        const front = document.getElementById('front-page-slider');
        if(!front) return;

        const chosen = pickRandom(slides);
        front.style.backgroundImage = `url("${chosen.src}")`;
        const movieEl = document.getElementById('front-page-movie');

        if(movieEl){
            movieEl.textContent = chosen.title;
        }
    });
})();