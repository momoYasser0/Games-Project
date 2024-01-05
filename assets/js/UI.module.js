export class UI {
    displayDataGame(data) {
        let BlackBox = '';
        for (let i = 0; i < data.length; i++) {
            BlackBox += ` <div class="col">
                                    <div class="card h-100 bg-transparent text-white" data-id="${data[i].id}" role="button">
                                        <figure class="mb-0">
                                            <img src="${data[i].thumbnail}" alt=""
                                                class="h-100 object-fit-cover card-img-top  ">
                                        </figure>
                                        <figcaption class="card-body ">
                                            <div class="d-flex  justify-content-between mb-2 ">
                                                <h3 class="card-title small h6">${data[i].title}</h3>
                                                <div class="free badge text-bg-primary ">Free</div>
                                            </div>
                                            <p class="card-text small text-center opacity-50 ">
                                                ${data[i].short_description}</p>
                                        </figcaption>
                                        <div class="card-footer d-flex justify-content-between">
                                            <span class="badge bagde-color">${data[i].genre}</span>
                                            <span class="badge bagde-color">${data[i].platform}</span>
                                        </div>
                                    </div>
                                </div>`
            document.querySelector(".noGames").classList.add("d-none");
        }
        if (data.status == 0) {
            document.querySelector(".noGames").classList.remove("d-none");
        }
        document.querySelector(".games-cards .row").innerHTML = BlackBox;

    }
    displayDetails(data) {
        const gameDetails = ` 
        <div class="col-md-4">
        <img src="${data.thumbnail}" alt="image details" class="img-fluid">
        </div>
        <div class="col-md-8">
                    <h3>Title:${data.title}</h3>
                    <p>Category: <span class="badge text-bg-info"> ${data.genre}</span> </p>
                    <p>Platform: <span class="badge text-bg-info"> ${data.platform}</span> </p>
                    <p>Status: <span class="badge text-bg-info"> ${data.status}</span> </p>
                    <p class="small">${data.description}</p>
                    <a class="btn btn-outline-warning" target="_blank"
                        href="${data.game_url}">Show Game</a>
        </div>`;
        document.getElementById("details-content").innerHTML = gameDetails;
    }
}



