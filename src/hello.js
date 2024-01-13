
function hello(Frase = "World") {

    if (typeof Frase != 'string') {
        Frase = "World";
    }


    return "Hello, " + Frase + "!";
}