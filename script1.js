let movies = [
    {
        title: "Fight Club",
        rank: 10,
        id: "tt0137523"
    },
    {
        title: "The Shawshank Redemption",
        rank: 1,
        id: "tt0111161"
    },
    {
        title: "The Lord of the Rings: The Return of the King",
        rank: 9,
        id: "tt0167260"
    },
    {
        title: "The Godfather",
        rank: 2,
        id: "tt0068646"
    },
    {
        title: "The Good, the Bad and the Ugly",
        rank: 5,
        id: "tt0060196"
    },
    {
        title: "The Godfather: Part II",
        rank: 3,
        id: "tt0071562"
    },
    {
        title: "The Dark Knight",
        rank: 6,
        id: "tt0468569"
    },
    {
        title: "Pulp Fiction",
        rank: 4,
        id: "tt0110912"
    },
    {
        title: "Schindler's List",
        rank: 8,
        id: "tt0108052"
    },
    {
        title: "12 Angry Men",
        rank: 7,
        id: "tt0050083"
    }
]
let current = '';
let previous = '';

/**
 * Display list of movies in a table
 * You don't have to worry so much about this
 */
function displayMovies(movies){
    let table = "<table border='1' style='width: 100%'>";
    table += "<tr><th>ID</th><th>Name</th><th>Rank</th></tr>";
    for(let index=0; index<movies.length; index++){
        table += "<tr>";
        table += "<td>" + movies[index].id + "</td>";
        table += "<td>" + movies[index].title + "</td>";
        table += "<td>" + movies[index].rank + "</td>";
        table += "</tr>"
    }
    // Close the table
    table += "</table>";
    document.getElementById("movies-list").innerHTML = table;
}

const ID = document.getElementById("ID");
ID.addEventListener('click', function(){
    if (previous == '') {
        var sorted_arr = movies.sort((a, b) => (a.id > b.id ? -1 : 1));
    } else if (previous == 'asc') {
        var sorted_arr = movies.sort((a, b) => (a.id > b.id ? 1 : -1));
    } else if (previous == "desc") {
        var sorted_arr = movies.sort((a, b) => (a.id > b.id ? -1 : 1));
    }
    let table = "<table border='1' style='width: 100%'>";
    table += "<tr><th>ID</th><th>Name</th><th>Rank</th></tr>";
    for(let index=0; index<sorted_arr.length; index++){
        table += "<tr>";
        table += "<td>" + sorted_arr[index].id + "</td>";
        table += "<td>" + sorted_arr[index].title + "</td>";
        table += "<td>" + sorted_arr[index].rank + "</td>";
        table += "</tr>"
    }
    // Close the table
    table += "</table>";
    document.getElementById("movies-list").innerHTML = table;
    console.log(sorted_arr)
    current = 'id'
})

const title = document.getElementById("Name");
title.addEventListener('click', function(){
    if (previous == '') {
        var sorted_arr = movies.sort((a, b) => (a.title > b.title ? -1 : 1));
    } else if (previous == 'asc') {
        var sorted_arr = movies.sort((a, b) => (a.title > b.title ? 1 : -1));
    } else if (previous == "desc") {
        var sorted_arr = movies.sort((a, b) => (a.title > b.title ? -1 : 1));
    }
    let table = "<table border='1' style='width: 100%'>";
    table += "<tr><th>ID</th><th>Name</th><th>Rank</th></tr>";
    for(let index=0; index<sorted_arr.length; index++){
        table += "<tr>";
        table += "<td>" + sorted_arr[index].id + "</td>";
        table += "<td>" + sorted_arr[index].title + "</td>";
        table += "<td>" + sorted_arr[index].rank + "</td>";
        table += "</tr>"
    }
    // Close the table
    table += "</table>";
    document.getElementById("movies-list").innerHTML = table;
    current = 'name'
})

const rank = document.getElementById("Rank");
rank.addEventListener('click', function(){
    if (previous == '') {
        var sorted_arr = movies.sort((a, b) => (a.rank > b.rank ? -1 : 1));
    } else if (previous == 'asc') {
        var sorted_arr = movies.sort((a, b) => (a.rank > b.rank ? 1 : -1));
    } else if (previous == "desc") {
        var sorted_arr = movies.sort((a, b) => (a.rank > b.rank ? -1 : 1));
    }
    let table = "<table border='1' style='width: 100%'>";
    table += "<tr><th>ID</th><th>Name</th><th>Rank</th></tr>";
    for(let index=0; index<sorted_arr.length; index++){
        table += "<tr>";
        table += "<td>" + sorted_arr[index].id + "</td>";
        table += "<td>" + sorted_arr[index].title + "</td>";
        table += "<td>" + sorted_arr[index].rank + "</td>";
        table += "</tr>"
    }
    // Close the table
    table += "</table>";
    document.getElementById("movies-list").innerHTML = table;
    current = 'rank'
})

const asc = document.getElementById("Ascending");
asc.addEventListener('click', function(){
    if (current == "id") {
        var sorted_arr = movies.sort((a, b) => (a.id > b.id ? 1 : -1));
    } else if (current == 'name') {
        var sorted_arr = movies.sort((a, b) => (a.title > b.title ? 1 : -1));
    } else if (current == 'rank') {
        var sorted_arr = movies.sort((a, b) => (a.rank > b.rank ? 1 : -1));
    };
    
    let table = "<table border='1' style='width: 100%'>";
    table += "<tr><th>ID</th><th>Name</th><th>Rank</th></tr>";
    for(let index=0; index<sorted_arr.length; index++){
        table += "<tr>";
        table += "<td>" + sorted_arr[index].id + "</td>";
        table += "<td>" + sorted_arr[index].title + "</td>";
        table += "<td>" + sorted_arr[index].rank + "</td>";
        table += "</tr>"
    }
    // Close the table
    table += "</table>";
    document.getElementById("movies-list").innerHTML = table;
    previous = 'asc'
})

const desc = document.getElementById("Descending");
desc.addEventListener('click', function(){
    if (current == "id") {
        var sorted_arr = movies.sort((a, b) => (a.id > b.id ? -1 : 1));
    } else if (current == 'name') {
        var sorted_arr = movies.sort((a, b) => (a.title > b.title ? -1 : 1));
    } else if (current == 'rank') {
        var sorted_arr = movies.sort((a, b) => (a.rank > b.rank ? -1 : 1));
    };
    
    let table = "<table border='1' style='width: 100%'>";
    table += "<tr><th>ID</th><th>Name</th><th>Rank</th></tr>";
    for(let index=0; index<sorted_arr.length; index++){
        table += "<tr>";
        table += "<td>" + sorted_arr[index].id + "</td>";
        table += "<td>" + sorted_arr[index].title + "</td>";
        table += "<td>" + sorted_arr[index].rank + "</td>";
        table += "</tr>"
    }
    // Close the table
    table += "</table>";
    document.getElementById("movies-list").innerHTML = table;
    previous = 'desc';
})