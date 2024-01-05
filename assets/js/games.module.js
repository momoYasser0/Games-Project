import { Details } from "./details.module.js";
import { UI } from "./UI.module.js";


export class Games {
    constructor() {
        this.getGames("mmorpg");
        document.querySelectorAll(".navbar-nav a").forEach((link) => {
            link.addEventListener("click", (e) => {
                document.querySelector(".navbar-nav .active").classList.remove("active");
                e.target.classList.add("active");
                this.getGames(e.target.dataset.category);
            });
        });

        this.ui = new UI();
    }
    async getGames(category) {
        const loading = document.querySelector(".loading");
        loading.classList.remove("d-none");

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '7da629a378msheb373e1c1a8e9f9p14e8b1jsn6a7440d6d477',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=3d.${category}.fantasy.pvp&platform=pc`, options)
        const response = await api.json()
        this.ui.displayDataGame(response);
        this.Start();
        loading.classList.add("d-none");

    }

    Start() {
        document.querySelectorAll(".games-cards .card").forEach((item) => {
            item.addEventListener("click", () => {
                const id = item.dataset.id;
                this.showDetails(id);
            });
        });
    }

    showDetails(idGame) {
        let details = new Details(idGame);
        document.querySelector(".games").classList.add("d-none");
        document.querySelector(".details").classList.remove("d-none");
    }
}