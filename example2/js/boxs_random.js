const container_boxs = document.querySelector('.container_box');
const boxs = Array.from(container_boxs.children);

container_boxs.innerHTML = '';
boxs.sort(() => Math.random() - 0.5).forEach(box => container_boxs.appendChild(box));