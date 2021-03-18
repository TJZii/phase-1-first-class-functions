function receivesAFunction(callback) {
    return callback();
}

function returnsANamedFunction() {
    const aFunction = function() => {return;}
    return aFunction;
}

function returnsAnAnonymousFunction() {
    return;
}