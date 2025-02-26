console.log("Script loaded!"); 

document.querySelectorAll('.pack').forEach(pack => {
    pack.addEventListener('click', function (event) {
        event.preventDefault();
        console.log("Pack clicked!"); 

        const teamPackContainer = document.querySelector('.team-pack-container');
        if (teamPackContainer) {
            teamPackContainer.classList.add('hidden');
            console.log("Team pack container hidden!");
        }

        const loader = document.getElementById('loader');
        if (loader) {
            loader.classList.remove('hidden');
            console.log("Loader shown!"); 
        }

        setTimeout(() => {
            if (loader) {
                loader.classList.add('hidden');
                console.log("Loader hidden!"); 
            }

            const teamContainer = document.querySelector('.team-container');
            if (teamContainer) {
                teamContainer.classList.remove('hidden');
                console.log("Team container shown!"); 
            }
        }, 2000);
    });
});

//added console.log for debugging reasons.