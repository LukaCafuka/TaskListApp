// form varijabla uzima obrazac za nove task-ove pomoću identifikatora te se pohranjuhe
const form = document.querySelector('#tasks-form');

//input polje za novi task
const taskInput = document.querySelector('#task');

// lista koja sadržava sve task-ove
const taskList = document.querySelector('.collection');

// input polje za filtriranje
const filter = document.querySelector('#filter');

// dugme za brisanje task-ova
const clearBtn = document.querySelector('.clear-tasks');

// pozivanje funkcije za učiavanje svih event listen-era
loadEventListeners();

//funkcija za učitavanje svih event listen-era
function loadEventListeners() {
    // task event
    form.addEventListener('submit', addTask);
}

//funkcija za dodavanje task-ova
function addTask(e) {
    // if uvijet provjerava ako je unos prazan te prikazuje poruku ako je unos prazan
    if(taskInput.value === '') {
        alert('Add a task');
    }

    //stvara novi li tag u html-u te je pohranjuje u li varijablu
    const li = document.createElement('li');
    //dodaje klasu novo-stvorenom li tag-u
    li.className = 'collection-item';
    //kreiranje tekst čvora i ažuriranje na li element
    li.appendChild(document.createTextNode(taskInput.value));
    //stvara novi a tag u html-u te je pohranjuje u link varijablu
    const link = document.createElement('a')
    //dodaje odgovarajuće klase za buduću manipulaciju
    link.className = 'delete-item secondary-content';
    //dodavanje font awesome ikone za uklanjanje task-a
    link.innerHTML = '<i class="fa fa-remove"></i>';
    //ažuriramo na li element
    li.appendChild(link);
    // dodajemo list element u listu
    taskList.appendChild(li);
    //brisanje nakon unosa
    taskInput.value = '';

    e.preventDefault();
}