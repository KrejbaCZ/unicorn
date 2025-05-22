function Vypis()
{
    let cislo1 = prompt("Zadejte první číslo: ")
    let znak = prompt("Zadejte znak +;-;/;*: ")
    let cislo2 = prompt("Zadejte druhé číslo: ")

    if(znak == "+")
    {
        vysledek = cislo1 + cislo2
    }
    else if(znak == "-")
    {
        vysledek = cislo1 - cislo2
    }
    else if(znak == "/")
    {
        vysledek = cislo1 / cislo2
    }
    else if(znak == "*")
    {
        vysledek = cislo1 * cislo2
    }
}