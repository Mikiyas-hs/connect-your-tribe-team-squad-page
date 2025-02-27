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

        setTimeout(() => {
            loader.classList.add('hidden'); // Hide loader
            console.log("Loader hidden!");
        }, 1500);
    

        setTimeout(() => {
            window.location.href = "/player"; 
        }, 2000);
    });

});

const spotifyPlayer = document.getElementById('spotifyPlayer');
if (spotifyPlayer) {
    spotifyPlayer.classList.remove('hidden');  
}

//added console.log for debugging reasons.