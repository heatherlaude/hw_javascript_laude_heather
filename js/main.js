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