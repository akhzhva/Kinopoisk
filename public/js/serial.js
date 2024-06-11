let addFilmUrlBtn = document.querySelector("#addFilmUrlBtn");
let addSerialsBtn = document.querySelector("#addSerialsBtn");
let urls = document.querySelector("#urls");
function addSerials() {
    addFilmUrlBtn.style.display = "none";
    let output = urls.innerHTML
    let number = document.querySelectorAll(".serials");
    let series = document.createElement('div')
    series.classList.add("serials");
    let title = document.createElement('p')
    let input = document.createElement('input')
    title.innerHTML = number.length + 1 + ' серия'
    input.name = "series"
    input.placeholder = "Введите ссылку на видео";
    series.append(title)
    series.append(input)
    urls.append(series)
}
function addFilmUrl() {
    addSerialsBtn.style.display = "none"
    let filmUrl = document.querySelectorAll('#filmUrl')
    if(filmUrl.length <= 0){
        urls.innerHTML = 
        `
            <fieldset class="fieldset">
                <label for="">Ссылка на фильм</label>
                <input type="text" placeholder="Введите ссылку на фильм" name="video">
            </fieldset>
        `;
    }
}