document.querySelectorAll('.pack').forEach(pack => {
    pack.addEventListener('click', function (event) {
        event.preventDefault(); 


        document.querySelector('.team-pack-container').classList.add('hidden');

        const loader = document.getElementById('loader');
        loader.classList.remove('hidden');

        setTimeout(() => {
            loader.classList.add('hidden'); 
            document.querySelector('.team-container').classList.remove('hidden'); 
        }, 2500); 
    });
});

