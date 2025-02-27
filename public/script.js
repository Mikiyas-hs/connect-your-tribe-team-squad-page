console.log("Script loaded!"); 

document.querySelectorAll('.pack').forEach(pack => {
    pack.addEventListener('click', function (event) {
        event.preventDefault(); 
        console.log("Pack clicked!");

        const loader = document.getElementById('loader');
        if (loader) {
            loader.classList.remove('hidden'); // Show loader
            console.log("Loader shown!");
        }

        const teamPackContainer = document.querySelector('.team-pack-container');
        if (teamPackContainer) {
            teamPackContainer.classList.add('hidden');
            console.log("Team pack container hidden!");
        }

        setTimeout(() => {
            window.location.href = "/players"; 
        }, 2000);
    });

});

const spotifyPlayer = document.getElementById('spotifyPlayer');
if (spotifyPlayer) {
    spotifyPlayer.classList.remove('hidden');  
}

//added console.log for debugging reasons.