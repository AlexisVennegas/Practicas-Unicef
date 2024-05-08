const container_boxs = document.querySelector('.container_box');
const boxs = Array.from(container_boxs.children);

// aqui se ordenan los boxs de forma aleatoria
container_boxs.innerHTML = '';
boxs.sort(() => Math.random() - 0.5).forEach(box => container_boxs.appendChild(box));

// aqui se les asigna un color a cada box
boxs.forEach((box, index) => {
    box.style.backgroundColor = `hsl(${index * 30}, 100%, 50%)`;
}
);