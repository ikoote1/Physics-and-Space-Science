// MENU BAR
const navMenu = document.querySelector('.nav-menu');
const y = document.querySelector('.menu-ba');
const navMen = document.querySelector('.menu-2');

y.addEventListener('click', () => {
  navMenu.classList.toggle('nav-display');
});
navMen.addEventListener('click', () => {
  navMenu.classList.toggle('nav-display');
});
document.querySelectorAll('.menu-br').forEach((n) => n.addEventListener('click', () => {
  navMenu.classList.toggle('nav-display');
}));

// DYNAMIC FEATURE SPEAKERS

const modalsO = [

  {
    nameF: 'Ikoote Rasuli',
    honorF: 'He is computer Engineer in Uganda',
    pictureF: './images/speaker3.jpg',
    textF:
      'Have a lot of knowledge about space and space physics. He is the organizer of this conference',
  },
  {
    nameF: 'Elon Musk',
    honorF: 'CEO of six companies, i.e Twitter, Space-X, Tesla, Boeing',
    pictureF: './images/speaker1.jpg',
    textF:
      'Musk with his love for mars, He has explored and carried out a lot of research on space physic.',
  },
  {
    nameF: 'Jeff bezos',
    honorF: 'CEO of Blue Origin',
    pictureF: './images/speaker2.jpg',
    textF:
      'Bezos indicated that he founded Blue Origin to send customers into space by focusing on two objectives: to decrease the cost and to increase the safety of humanity in space',
  },
  {
    nameF: 'Neil Armstrong',
    honorF: 'American astronaut and aeronautical engineer',
    pictureF: './images/speaker4.jpg',
    textF:
      'Armstrong is a very well-known figure in the history of aerospace engineering. The first person to walk on the moon.',
  },
  {
    nameF: 'Klapmeier brothers',
    honorF: 'retired American aircraft designers and aviation entrepreneurs',
    pictureF: './images/speaker5.png',
    textF:
      'Together they founded the Cirrus Design Corporation in 1984. Cirrus was the first aircraft manufacturer to install a whole-plane parachute recovery system ',
  },
  {
    nameF: ' Frank Wang',
    honorF: 'He is the founder and CEO of the Shenzhen-based technology company DJI',
    pictureF: './images/downloa.jpg',
    textF:
      'He showed an interest in flight and airborne devices from a young age, but received mediocre grades as a schoolchild.',
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
