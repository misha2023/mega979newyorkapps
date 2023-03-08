import { v4 as uuidv4 } from "uuid"; 

function chillHop() {
    return [

        {
            name:"mega 97.9 new york FM",
            artist: "Spanish",
            cover: "https://radiosapps7.files.wordpress.com/2023/03/mega979newyorkapps.png",
            id: uuidv4(),
            color: ["#F24933", "#F9B437"],
            audio: "https://liveaudio.lamusica.com/NY_WSKQ_icy",
            active: true,
        },
        {
            name:"96.3 Mega",
            artist: "Spanish",
            cover: "https://cdn.pixabay.com/photo/2021/01/29/08/10/musician-5960112_1280.jpg",
            id: uuidv4(),
            color: ["#D7B0D5", "#CBDFE0"],
            audio: "https://liveaudio.lamusica.com/LA_KXOL_icy",
            active: false,
        },
        {
            name:"103.9 y 98.3 Recuerdo",
            artist: "Spanish",
            cover: "https://cdn.pixabay.com/photo/2021/01/29/08/10/musician-5960112_1280.jpg",
            id: uuidv4(),
            color: ["#008781", "#cfc08c"],
            audio: "https://prod-44-203-48-137.wostreaming.net/univision-krcdfmaac-imc2",
            active: false,
        },
    ];
}

export default chillHop;

