function wyswietlZamowienie() {
    var kolor = ""
    kolor = document.querySelector('input[name="kolor"]:checked').value;

    var rekawy = document.getElementById("rekaw").value;

    var rozmiar = ""
    rozmiar = document.querySelector('input[name="rozmiar"]:checked').value;

    var liczba = "";
    liczba = document.getElementById("ilosc").value;

    var cechy = ""
    cechy = document.querySelectorAll('input[name="cechy"]:checked');

    var i;
    var text = ""
    for (i = 0; i < cechy.length; i++) {
        text += "   - " + cechy[i].value + "\n";
    }


    alert("SZCZEGÓŁY ZAMÓWIENIA:\nkolor: " + kolor + "\n" + "rekaw: " + rekawy + "\n" + "rozmiar: " + rozmiar + "\n" + "cechy:\n" + text + "ilość: " + liczba)

}