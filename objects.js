const ol = document.querySelector("ol");

const favoriteMovies = [
    {
        name: "My Hero Academia: Heroes Rising",
        year: 2019,
        director: "Kenji Nagasaki",
        picture: "https://i.pinimg.com/564x/01/91/07/01910716dfde65a1a2e106ab936b5175.jpg"
    },
    {
        name: "A Quiet Place",
        year: 2018,
        director: "John Krainski",
        picture: "https://movieposters2.com/images/1537014-b.jpg"    
    },
    {
        name: "Edward Scissorhands",
        year: 1990,
        director: "Tim Burton",
        picture: "https://images-na.ssl-images-amazon.com/images/I/51EcXoGJWeL._AC_SY355_.jpg"
    },
    {
        name: "Corpse Bride",
        year: 2005,
        director: "Mike Johnson and Tim Burton",
        picture: "https://m.media-amazon.com/images/I/51fK4PJ11HL._AC_.jpg"
    },
    {
        name: "A Silent Voice",
        year: 2016,
        director: "Naoko Yamada",
        picture: "https://play-lh.googleusercontent.com/fdW6Sd4rL9rt-DMsZFku9m5jVo00GfqFZB8Sfz9wuoxnCZEAvab-g8mVPRS0MH462Glz=w400-h600-rw"

    }
];

const template = favoriteMovies.map(movie => `
    <li>
        <p>Name: ${movie.name}</p>
        <p>Year: ${movie.year}</p>
        <p>Director: ${movie.director}</p>
        <img src= ${movie.picture}>
    </li>
    `);
ol.innerHTML = template.join('');