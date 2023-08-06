function receivesAFunction(callback){
    return callback()
}

function returnsANamedFunction(){
    return function fn(){'name'}
}

function returnsAnAnonymousFunction(){
    return (() => fn)
}