const image = ["fantasy-geddf84922_1920.jpg",
            "marek-piwnicki-rZMiCdPAlss-unsplash.jpg",
            "hd-wallpaper-g60977da8c_1920.jpg",
            "mountains-g01de6c417_1920.jpg",
            "hd-wallpaper-g501eb846e_1920.jpg"
        ];

const chosenImage = image[Math.floor(Math.random() * image.length)];

const bgimages = document.createElement("img");
bgimages.src = `img/${chosenImage}`;

document.body.appendChild(bgimages);
