// local reviews data
const reviews = [
    {
        id: 1,
        name: "Marina Strapassola",
        job: "cardiologist",
        img:
            "/img/nina.js.jpg",
        text:
            `"I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"`,
    },
    {
        id: 2,
        name: "Rafael Bridaroli",
        job: "Digital marketing",
        img:
            "/img/brida.js.jpg",
        text:
            "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
        id: 3,
        name: "Vitor Mesquita",
        job: "Software Project Management",
        img:
            "/img/vitinho.js.jpg",
        text:
            `"Eu sempre gostei de tecnologia, quando criança desmontava e montava computadores e sempre fui muito curioso sobre como um monte de peças, chips e placas podiam ser usadas juntas e gerar um sistema, com milhares e milhares de informações e funcionalidades… Os anos foram se passando, e assim que tive que escolher o meu curso da faculdade e futura profissão, eu já sabia qual rumo queria seguir. Minha inspiração na área são todos os devs que começaram por conta própria e hoje ocupam cargos em grandres empresas de tecnologia. Minha meta é um dia poder gerenciar um grande projeto de software em uma grande empresa.."`,
    },
    {
        id: 4,
        name: "Isabelle Costa",
        job: "Lawyer",
        img:
            "/img/isaCosta.js.jpg",
        text:
            "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
    {
        id: 5,
        name: "Livia Daczuk",
        job: "neurologist",
        img:
            "/img/Liv.js.jpg",
        text:
            "Minha família inteira por parte de pai fez medicina já ele não, alguns anos depois ele se arrependeu mas nao teve mais a oportunidade entao ele sempre implorou para eu fazer mas eu nunca gostei da ideia, após um tempo eu comecei a considerar a medicina, mais especificamente a área neurológica porque minhas 3 avós tem problemas nurais. Eu quero virar uma neuro pois talvez eu nao possa ajudar minhas avos, mas eu poderia ajudar outras famílias com esses problemas.. ",
    },
    {
        id: 6,
        name: "Isabelle Costa",
        job: "Lawyer",
        img:
            "/img/ruivo.js.jpg",
        text:
            "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
    {
        id: 7,
        name: "Isabelle Costa",
        job: "Lawyer",
        img:
            "/img/ruivo.js.jpg",
        text:
            "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
    {
        id: 5,
        name: "Isabelle Costa",
        job: "Lawyer",
        img:
            "/img/ruivo.js.jpg",
        text:
            "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
    {
        id: 5,
        name: "Isabelle Costa",
        job: "Lawyer",
        img:
            "/img/ruivo.js.jpg",
        text:
            "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
    {
        id: 5,
        name: "Isabelle Costa",
        job: "Lawyer",
        img:
            "/img/ruivo.js.jpg",
        text:
            "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
    {
        id: 5,
        name: "Isabelle Costa",
        job: "Lawyer",
        img:
            "/img/ruivo.js.jpg",
        text:
            "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
    {
        id: 5,
        name: "Isabelle Costa",
        job: "Lawyer",
        img:
            "/img/ruivo.js.jpg",
        text:
            "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
    {
        id: 5,
        name: "Isabelle Costa",
        job: "Lawyer",
        img:
            "/img/ruivo.js.jpg",
        text:
            "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
    {
        id: 5,
        name: "Isabelle Costa",
        job: "Lawyer",
        img:
            "/img/ruivo.js.jpg",
        text:
            "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
];
// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}
// show next person
nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});
// show random person
randomBtn.addEventListener("click", function () {
    console.log("hello");

    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
});