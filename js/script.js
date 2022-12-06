// const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    // count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    showMyDB: function () {
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function () {
        for (let i = 0; i < 3; i++) {
            const genre = prompt('Ваш любимый жанр под номером ' + (i + 1))

            if (genre == null || genre == "") {
                i--;
            } else {
                personalMovieDB.genres[i] = genre;
            }
        }
        console.log(personalMovieDB.genres);
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat == false) {
            personalMovieDB.privat = true;
        } else {
            personalMovieDB.privat = false
        }
    }

};

const ul = document.createElement('ul');
document.body.append(ul);

function deleterow(event, id) {
    event.preventDefault();
    var elem = document.getElementById(id);
    elem.parentElement.removeChild(elem);
}
let i = 0;
function getFormValue(event) {
    i++;
    event.preventDefault()
    const btn = document.createElement('button');
    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.id = "checkbox";
    var label = document.createElement('label')
    label.htmlFor = "id";
    label.appendChild(document.createTextNode('Сделать любимым'));
    btn.innerHTML = '<img id="img" src="./img/trash.png">';
    const filmInput = form.querySelector('[name="film"]'),
        ratingInput = form.querySelector('[name="rating"]');
    let film = filmInput.value,
        rating = ratingInput.value;

    if (film && rating && film.length <= 50) {
        if (film.length > 21) {
            film = film.slice(0, 21) + '...';
        }
        personalMovieDB.movies[film] = rating;
        const li = document.createElement('li');
        li.textContent = film;
        li.append(btn);
        li.append(checkbox);
        li.append(label);
        ul.append(li);
        personalMovieDB.showMyDB();
    }
    checkbox.addEventListener("change", function () {
        if (this.checked) {
            console.log("Добавляем любимый фильм");
        }
    })
    const ordered = Object.keys(personalMovieDB.movies).sort().reduce(
        (obj, key) => {
            obj[key] = personalMovieDB.movies[key];
            return obj;
        },
        {}
    );

    console.log(JSON.stringify(ordered));
};

const form = document.getElementById('form');
form.addEventListener('submit', getFormValue);

document.querySelector('ul').onclick = function (e) {
    const btns = e.target.closest('button');
    if (!btns) {
        return;
    }

    btns.parentElement.remove();
}














// for (let i = 0; i < 2; i++) {
//     const film = prompt("Один из последних просмотренных фильмов?", "");
//     const rating = prompt("На сколько оцените его?", "");
//     if (film == null || rating == null || film == '' || rating == '' || film.length > 50) {
//         i--;
//     } else {
//         if (film.length > 21) {
//             film.slice(20);
//         }

//         personalMovieDB.movies[film] = rating;
//     }
// }


//это надо
// personalMovieDB.showMyDB();
// personalMovieDB.toggleVisibleMyDB();
// personalMovieDB.showMyDB();
// // personalMovieDB.writeYourGenres();
// personalMovieDB.genres.forEach(function (item, i, arr) {
//     console.log(`Любимый жанр ${i + 1} - это ${item}`);
// });






// const list = document.getElementById('list'),
//     li = document.getElementsByTagName('li'),
//     liHead = document.getElementsByClassName('li_head'),
//     liTexts = document.querySelectorAll('.li_text'),
//     liText = document.querySelector('.li_text');
// console.log(list);
// console.log(li[2]);
// console.log(liHead[0]);
// liTexts.forEach(item => {
//     console.log(item);
// });
// console.log(liText);
// li[0].style.backgroundColor = '#000';
// li[2].style.cssText = "background-color: blue"

// const div = document.createElement('div');

// div.classList.add('block_3_n');
// document.body.append(div);
// //document.querySelector('.block_3').append(div);
// //document.querySelector('.block_3').prepend(div);
// //li[0].after(div);
// li[1].remove();
// li[1].replaceWith(liHead[2]);
// div.innerHTML = "<h1>Hello</h1>";
// //div.textContent = "Hi";
// div.insertAdjacentHTML('beforebegin','<h2>Hello</h2>');
// div.insertAdjacentHTML('afterend', '<h2>Hello</h2>');