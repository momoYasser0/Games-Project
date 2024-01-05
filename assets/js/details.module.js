import { UI } from "./UI.module.js";

export class Details {
    constructor(id) {
        this.ui = new UI();

        btnClose.addEventListener("click", function () {
            document.querySelector(".games").classList.remove("d-none");
            document.querySelector(".details").classList.add("d-none");
        });
        this.getDetails(id);
    }

    getDetails(idGames) {
        const loading = document.querySelector(".loading")
        loading.classList.remove("d-none");

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '7da629a378msheb373e1c1a8e9f9p14e8b1jsn6a7440d6d477',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${idGames}`, options).then((response) => response.json()).then((response) => this.ui.displayDetails(response)).catch((err) => console.error(err)).finally(() => {
            loading.classList.add("d-none")
        })
    }
}