function howdy() {
    console.log("Heather Laude says yo!");
}

howdy();

var numba = function(string) {
    if (string.length < 7) {
        console.log("What a short little word!")
    }
    
    if (string.length > 7) {
        console.log("I'm sorry, but that's too many to count.")
    }
    
    if (string.length == 7) {
        console.log("7, what a perfect choice!")
    }
    
};

numba("7");

numba("seventy");

numba("university");

function inception(callback, value) {
    callback(value);
}

value = "Ferris Bueller's Day Off";

function favoriteMovie() {
    console.log(value+" "+"is a fantastic movie.");
}
                
inception(favoriteMovie);