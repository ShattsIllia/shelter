"use strict";

const animals = [{
        img: "../../assets/images/pets-katrine.png",
        name: 'Katrine',
        breed: 'Cat - British Shorthair',
        description: 'Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.',
    },
    {
        img: "../../assets/images/pets-jennifer.png",
        name: 'Jennifer',
        breed: 'Dog - Labrador',
        description: "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    },
    {
        img: "../../assets/images/pets-woody.png",
        name: 'Woody',
        breed: 'Dog - Golden Retriever',
        description: 'Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.',
    },
    {
        img: "../../assets/images/pets-sophia.png",
        name: 'Sophia',
        breed: 'Dog - Shih tzu',
        description: "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    },
    {
        img: "../../assets/images/pets-timmy.png",
        name: 'Timmy',
        breed: 'Cat - British Shorthair',
        description: 'Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.',
    },
    {
        img: "../../assets/images/pets-charly.png",
        name: 'Charly',
        breed: 'Dog - Jack Russell Terrier ',
        description: 'This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.',
    },
    {
        img: "../../assets/images/pets-scarlet.png",
        name: 'Scarlet',
        breed: 'Dog - Jack Russell Terrier',
        description: 'Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.',
    },
    {
        img: "../../assets/images/pets-freddie.png",
        name: 'Freddie',
        breed: 'Cat - British Shorthair',
        description: 'Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.',
    },

];
const animalsMap = new Map(animals.map(animal => [animal.name, animal]));
const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

openModalButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal, button);
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        closeModal(modal);
    })
})

function openModal(modal, button) {
    if (modal === null) return;
    const animal = animalsMap.get(button.previousElementSibling.innerHTML);
    let name = document.getElementById("pet-name");
    name.innerHTML = animal.name;
    let breed = document.getElementById("breed");
    breed.innerHTML = animal.breed;
    let description = document.getElementById("description");
    description.innerHTML = animal.description;
    let petImg = document.getElementById("pet-modal-img");
    petImg.src = animal.img;

    modal.classList.add('active');
    overlay.classList.add('active');
}

function closeModal(modal) {
    if (modal === null) return;
    modal.classList.remove('active');
    overlay.classList.remove('active');
}