function wyswietlZamowienie() {
    var kolor = ""
    kolor = document.querySelector('input[name="kolor"]:checked').value;

    var rekawy = document.getElementById("rekaw").value;

    var rozmiar = ""
    rozmiar = document.querySelector('input[name="rozmiar"]:checked').value;

    var liczba = "";
    liczba = document.getElementById("ilosc").value;

    var email = "";
    email = document.getElementById("mail").value;

    var telefon = "";
    telefon = document.getElementById("tel").value;

    var dostawa = "";
    dostawa = document.getElementById("data").value;

    var time = "";
    time = document.getElementById("godzina").value;

    var uwagi = "";
    uwagi = document.getElementById("komentarz").value;


    var cechy = ""
    cechy = document.querySelectorAll('input[name="cechy"]:checked');

    var i;
    var text = ""
    for (i = 0; i < cechy.length; i++) {
        text += "   - " + cechy[i].value + "\n";
    }


    alert("SZCZEGÓŁY ZAMÓWIENIA:\nkolor: " + kolor + "\n" + "rekaw: " + rekawy + "\n" + "rozmiar: " + rozmiar + "\n" + "cechy:\n" + text + "ilość: " + liczba + "\n" + "email: " + email + "\n" + "telefon: " + telefon + "\n" + "dzień dostawy: " + dostawa + "\n" + "godzina dostawy: " + time + "\n" + "uwagi do zamówienia: " + uwagi)

}