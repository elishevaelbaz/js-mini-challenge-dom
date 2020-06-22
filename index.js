/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/
header.style = "color:red"

/***** Deliverable 3 *****/
console.log("PLAYERS array looks like this:", PLAYERS)

const playerContainer = document.querySelector(".player-container")
PLAYERS.forEach(function(player){
    console.log(player.name)
    playerContainer.innerHTML += `
        <div class="player" data-number=${player.number}>
            <h3>
                ${player.name} (<em>${player.nickname}</em>)
            </h3>
            <img src=${player.photo} alt=${player.name}>
        </div>
    `
})

/***** Deliverable 4 *****/

playerContainer.querySelector("[data-number='7']").remove()
