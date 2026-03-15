// data.js - Shared manga data across all pages
const mangaData = [
    {
        title: "Jujutsu Kaisen",
        cover: "https://m.media-amazon.com/images/I/81TmHlRleJL.jpg",
        description: "A high school student gains cursed powers and joins a sorcerer organization.",
        chapters: [
            {
                name: "Chapter 1",
                pages: [
                    "https://rukminim2.flixcart.com/image/850/1000/xif0q/poster/9/g/l/medium-manga-panel042-jujutsu-sorcerers-jujutsu-kaisen-anime-original-imagh66cgwxzsgum.jpeg?q=20&crop=false",
                    "https://i.pinimg.com/736x/be/80/77/be80778def9d181aefc8e13d5660fe5a.jpg"
                ]
            },
            {
                name: "Chapter 2",
                pages: [
                    "https://i.pinimg.com/736x/ae/27/05/ae2705ae4ebb8dc6efa12ee38af675d3.jpg"
                ]
            }
        ]
    },
    {
        title: "One Piece",
        cover: "https://jumpichiban.com/cdn/shop/files/ONEPIECE106MangaComicBook.jpg?v=1738181523",
        description: "A pirate crew searches for the legendary treasure, One Piece.",
        chapters: [
            {
                name: "Chapter 1",
                pages: [
                    "https://static0.cbrimages.com/wordpress/wp-content/uploads/2022/07/One-Piece-Chapter-1055-Shanks-Luffy-Haki.jpg",
                    "https://i.pinimg.com/736x/14/67/f1/1467f1d2d11bb1df1b4ef47fc8485846.jpg"
                ]
            }
        ]
    },
    {
        title: "Blue Lock",
        cover: "https://bluelock-anime-en.com/wp-content/themes/anime/assets/images/mv241103_sp.jpg",
        description: "A soccer training program aims to create the ultimate striker.",
        chapters: [
            {
                name: "Chapter 1",
                pages: [
                    "https://i.pinimg.com/736x/58/22/c9/5822c9511c5ab6996fce811e07844388.jpg",
                    "https://i.pinimg.com/736x/4a/25/4a/4a254a1b21389e482a08120ca3d7f491.jpg"
                ]
            }
        ]
    },
    {
        title: "Solo Leveling",
        cover: "https://cdn.oneesports.gg/cdn-data/2024/04/Anime_SoloLeveling_Arise_JinwooSung_HaeInCha_ChoiJongIn_BloodRedCommanderIgris_Tusk.jpg",
        description: "A weak hunter rises to power in a world of dungeons and monsters.",
        chapters: [
            {
                name: "Chapter 1",
                pages: [
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG5eMd_Ws1hGzRjYLxUTTMoXDPjO1E5cxBHn8N3U6nqNdj3Ad-XTTM4Sp2dtkdtbWbSx4&usqp=CAU",
                    "https://www.centralcomics.com/wp-content/uploads/2023/11/Solo_Leveling_6_interior-8.jpg"
                ]
            }
        ]
    }
];

// Make sure it's available globally
if (typeof module !== 'undefined' && module.exports) {
    module.exports = mangaData;
}