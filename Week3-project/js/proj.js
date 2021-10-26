var plants = [
    {
        title: 'Potts Marble Queen plant in a hanging pot.',
        price: '85 S.R',
        img: "2.jpg",
        description: "Potts are a very successful and strong indoor plant. It is characterized by a beautiful color and spreads relatively quickly and does not require much care. It can be placed in homes or different work environments"
    },
    {
        title: 'Vicks Robusta Mottled in a Ceramic Pot.',
        price: '110 S.R',
        img: "3.jpg",
        description: "Rubber Ficus, whose scientific name is Ficus elastica, is native to Asia, and it is one of the plants that is easy to breed at home, and is characterized by large-sized leaves that are available in several types such as green or dark green and even variegated."
    },
    {
        title: 'The rib cage or monstera in a transparent plastic vase.',
        price: '65 S.R',
        img: "4.jpg",
        description: "The thorax or monstera its scientific name is Monstera deliciosa is native to Central America, and the adult of it is characterized by cracks in the large leaves to make them shaped like a thorax while the juveniles have round leaves that are not cracked. Another name for the Swiss cheese plant."
    },
    {
        title: 'Leopard skin plant in self watering pot gray.',
        price: '195 S.R',
        img: "6.jpg",
        description: "Sansevieria or tiger skin is considered one of the plants that purifies the air and does not require much care."
    },
];

var bowl = [{
        title: 'Burlap bowl.',
        price: '10 S.R',
        img: "8.jpg",
        description: 'Height (11 cm)'
    },
    {
        title: 'Ceramic bowl.',
        price: '25 S.R',
        img: "7.jpg",
        description: 'Height (15 cm)'
    },
    {
        title: 'Ceramic bowl.',
        price: '35 S.R',
        img: "10.jpg",
        description: 'Height (15 cm)'

    },
    {
        title: 'Bamboo bowl.',
        price: '85 S.R',
        img: "9.jpg",
        description: 'Height (39 cm)'
    },


];

var seeds = [{
        title: 'Jacaranda tree seeds.',
        price: '10 S.R',
        img: "11.jpg",
        description: 'A plant from the humid tropics and subtropics, where it is found at altitudes from 500 - 2400 meters. It grows best in regions where annual daytime temperatures are in the range of 20-34 ° C, but can withstand 10 - 38 ° C. Young growth does not tolerate frost, but older trees can sometimes withstand short-lived bottoms up to - 5 °C favors the average annual precipitation in the range 800 - 1400 mm.'
    },
    {
        title: 'Tecuma stans seeds.',
        price: '10 S.R',
        img: "12.jpg",
        description: 'An attractive ornamental plant. A large shrub or small tree with many branches, usually 1.5 to 5 meters tall. They are grown by seed - do not require pretreatment Seeds that germinate easily in nursery beds or in containers seedlings require 3-4 months in the nursery, after which they can be planted directly.'
    },

];

// info for plants

$('#potts').click(() => {
    window.localStorage.setItem("plant", JSON.stringify(plants[0]))
    sessionStorage.removeItem("Key");
    window.sessionStorage.setItem("Key", "plant")
    window.location.href = "details.html"
})

$('#vicks').click(() => {
    window.localStorage.setItem("plant", JSON.stringify(plants[1]))
    sessionStorage.removeItem("Key");
    window.sessionStorage.setItem("Key", "plant")
    window.location.href = "details.html"
})

$('#monstera').click(() => {
    window.localStorage.setItem("plant", JSON.stringify(plants[2]))
    sessionStorage.removeItem("Key");
    window.sessionStorage.setItem("Key", "plant")
    window.location.href = "details.html"
})

$('#leopard').click(() => {
    window.localStorage.setItem("plant", JSON.stringify(plants[3]))
    sessionStorage.removeItem("Key");
    window.sessionStorage.setItem("Key", "plant")
    window.location.href = "details.html"
})


// info for bowl

$('#Burlap').click(() => {
    window.localStorage.setItem("bowl", JSON.stringify(bowl[0]))
    sessionStorage.removeItem("Key");
    window.sessionStorage.setItem("Key", "bowl")
    window.location.href = "details.html"
});

$('#Ceramic').click(() => {
    window.localStorage.setItem("bowl", JSON.stringify(bowl[1]))
    sessionStorage.removeItem("Key");
    window.sessionStorage.setItem("Key", "bowl")
    window.location.href = "details.html"
});

$('#Ceramic1').click(() => {
    window.localStorage.setItem("bowl", JSON.stringify(bowl[2]))
    sessionStorage.removeItem("Key");
    window.sessionStorage.setItem("Key", "bowl")
    window.location.href = "details.html"
});

$('#Bambo').click(() => {
    window.localStorage.setItem("bowl", JSON.stringify(bowl[3]))
    sessionStorage.removeItem("Key");
    window.sessionStorage.setItem("Key", "bowl")
    window.location.href = "details.html"
});


// info for seeds

$('#Jac').click(() => {
    window.localStorage.setItem("seeds", JSON.stringify(seeds[0]))
    sessionStorage.removeItem("Key");
    window.sessionStorage.setItem("Key", "seeds")
    window.location.href = "details.html"
});

$('#Tec').click(() => {
    window.localStorage.setItem("seeds", JSON.stringify(seeds[1]))
    sessionStorage.removeItem("Key");
    window.sessionStorage.setItem("Key", "seeds")
    window.location.href = "details.html"
});