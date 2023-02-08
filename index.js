// const ham = document.querySelector('.menu-ba');
// const x = document.querySelector('.menu-2');
// const navMenu = document.querySelector('.menu-line');

// ham.addEventListener('click', function() {
//   navMenu.classList.toggle('active');
// });
// x.addEventListener('click', () => {
//   navMenu.classList.toggle('active');
// });
// document.querySelectorAll('.menu-br').forEach((n) => n.addEventListener('click', () => {
//   navMenu.classList.toggle('active');
// }));

//DYNAMIC FEATURE SPEAKERS

const modalsO = [

  {
    nameF: 'ikoote Rasuli',
    honorF: "am prem of nawanyago",
    pictureF: "./images/fun activities at work blog image-1.webp",
    textF:
      "Am good at runing and playing",
  },
  {
    nameF: 'ikoote Rasuli',
    honorF: "am prem of nawanyago",
    pictureF: "./images/fun activities at work blog image-1.webp",
    textF:
      "Am good at runing and playing",
  },
  {
    nameF: 'ikoote Rasuli',
    honorF: "am prem of nawanyago",
    pictureF: "./images/fun activities at work blog image-1.webp",
    textF:
      "Am good at runing and playing",
  },
  {
    nameF: 'ikoote Rasuli',
    honorF: "am prem of nawanyago",
    pictureF: "./images/fun activities at work blog image-1.webp",
    textF:
      "Am good at runing and playing",
  },
  {
    nameF: 'ikoote Rasuli',
    honorF: "am prem of nawanyago",
    pictureF: "./images/fun activities at work blog image-1.webp",
    textF:
      "Am good at runing and playing",
  },
  {
    nameF: 'ikoote Rasuli',
    honorF: "am prem of nawanyago",
    pictureF: "./images/fun activities at work blog image-1.webp",
    textF:
      "Am good at runing and playing",
  },
];

const modalT = document.querySelector('.card-s');

let modalCountT = 1;

modalsO.forEach((o) => {

  modalT.innerHTML += `
  <div class="speakerr  modalT-${modalCountT}">
  <div class="sp-img">
      <img src="${o.pictureF}" class="sp-2"></div>
  <div class="desc">
      <h3>${o.nameF}</h3>
      <p class="desc-p1">${o.honorF}</p>
      <img src="./images/Vecto1.png">
      <p class="desc-p2">${o.textF}</p>
  </div>
</div>

`;
  modalCountT += 1;
});
