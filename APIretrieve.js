document.addEventListener("DOMContentLoaded", function () {
  function getExcercises() {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "2cdcf551dcmsh11d826bde4dc51ep19bfb7jsnfc81b441bf80",
        "X-RapidAPI-Host": "exercises-by-api-ninjas.p.rapidapi.com",
      },
    };

    fetch(
      "https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?type=strength&muscle=glutes&difficulty=intermediate",
      options
    )
      .then((response) => response.json())
      .then((response) => APIretrive(response))
      .catch((err) => console.error(err));
  }
  getExcercises();

  function APIretrive(response) {
    let container = document.getElementById("boxRow");
    output = "";
    for (let i = 0; i < 10; i++) {
      output += `<div class="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="${
        i * 150
      }">
                  <div class="box">
                    <span>${[i + 1]}</span>
                    <h4>${response[i].name}</h4>
                    <p>${response[i].instructions}</p>
                  </div>
                 </div>`;
    }
    container.innerHTML = output;
  }
});
