$(function () {
    tablazatKiir();
    kiir();
});
var szovegJSON = ['[{"nev":"Porcelán pohárt","allapot":"Újra csomagolt","ara":"1500ft","darab":"10"},{"nev":"Porcelán tányér","allapot":"Újra csomagolt","ara":"1300ft","darab":"20"},{"nev":"Kanál","allapot":"Újra csomagolt","ara":"1200ft","darab":"50"}]'];
var aruk = JSON.stringify(szovegJSON);

var aruk = [
    {
        nev: "Porcelán pohárt",
        allapot: "Újra csomagolt",
        ara: "1500ft",
        darab: "10"
    },
    {
        nev: "Porcelán tányér",
        allapot: "Újra csomagolt",
        ara: "1300ft",
        darab: "20"
    },
    {
        nev: "Kanál",
        allapot: "Raktáron",
        ara: "1200ft",
        darab: "50"
    }];


function tablazatKiir() {
    $("article").empty();
    $("article").append("<table>");
    $("article table").append("<tr><th>Név</th><th>Állapot</th><th>Ára</th><th>Darab</th></tr>");
    for (var i = 0; i < aruk.length; i++) {
        $("article table").append("<tr><td>" + aruk[i].nev + "</td><td>" + aruk[i].allapot + "</td><td>" + aruk[i].ara + "</td><td>" + aruk[i].darab + "</td></tr>");
    }
    console.log(aruk);
}
function kiir() {
    $("article table tr").append('<input type="button" id="torol" value="Töröl">');
}
function kepek() {
    $("section img").attr("src", "kepek/porcelan_tanyer.jpg");
    $("section img").attr("src", "kepek/porcelan_pohar.jpg");
    $("section img").attr("src", "kepek/porcelan_kanal.jpg");
}
