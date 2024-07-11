const towerAssets = {
    0: "None",     // offline
    1: "Xana",     // in studio
    2: "Jeremie",  // in studio and CLE
    3: "Tyron"     // ?
};

var towerPresence = 0;

fetch("https://presence.roproxy.com/v1/presence/users", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
    body: JSON.stringify({ userIds: [1404857151] }),
})
.then(response => response.json())
.then(data => {
    console.log('API Response:', data);
    
    if (data.userPresences && data.userPresences.length > 0) {
        towerPresence = data.userPresences[0].userPresenceType;
    } else {
        console.error('No user presences found');
    }

    const imgSrc = `./images/Towers/${towerAssets[towerPresence]}.png`;
    console.log('imgSrc:', imgSrc);
    document.getElementById("TowerStatus").src = imgSrc;
})
.catch(error => {
    console.error('Fetch Error:', error);
});