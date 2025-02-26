document.querySelectorAll('.pack').forEach(pack => {
    pack.addEventListener('click', function (event) {
        event.preventDefault(); 

        console.log("Pack clicked, hiding team-pack-container...");
        document.querySelector('.team-pack-container').classList.add('hidden');

        const loader = document.getElementById('loader');
        console.log("Showing loader...");
        loader.classList.remove('hidden');

        setTimeout(() => {
            console.log("Hiding loader...");
            loader.classList.add('hidden'); 

            console.log("Showing team container...");
            document.querySelector('.team-container').classList.remove('hidden');
        }, 2000); 
    });
});
