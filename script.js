const button = document.querySelector(".btn");
const grid = document.querySelector(".image-grid");

button.addEventListener('click', getRandomPhotos);

function getRandomPhotos() {
    let count = 10;
    for(let image = 0; image<count; image++) {
        const element = document.createElement("img");
        element.src = `https://picsum.photos/300?random=${Math.floor(Math.random()*2000)}`;
        grid.appendChild(element);
    }
}