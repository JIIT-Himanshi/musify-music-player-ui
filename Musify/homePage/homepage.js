const searchInput = document.getElementById("search");
const searchButton = document.getElementById("searchbut");
const topSongsSection = document.querySelector(".gem");

// Create container for songs
const songList = document.createElement("div");
songList.style.marginTop = "40px";
songList.style.padding = "10px";
topSongsSection.appendChild(songList);

// Search button click
searchButton.addEventListener("click", function () {
    const songName = searchInput.value.trim();

    if (songName === "") {
        alert("Please enter a song name");
        return;
    }

    // Song card
    const song = document.createElement("div");
    song.innerText = "🎵 " + songName;

    // Styling (CSS via JS)
    song.style.background = "rgba(65, 60, 60, 0.5)";
    song.style.padding = "10px 15px";
    song.style.marginBottom = "10px";
    song.style.borderRadius = "8px";
    song.style.cursor = "pointer";
    song.style.fontSize = "14px";

    // Hover effect
    song.addEventListener("mouseenter", () => {
        song.style.background = "#5773ff";
    });

    song.addEventListener("mouseleave", () => {
        song.style.background = "rgba(65, 60, 60, 0.5)";
    });

    // Add song to list
    songList.appendChild(song);

    // Clear input
    searchInput.value = "";
});

// Enter key support
searchInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        searchButton.click();
    }
});
