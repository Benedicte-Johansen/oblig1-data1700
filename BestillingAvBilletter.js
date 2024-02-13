function visBilletter(){
    navn = document.getElementById("fornavn").value + " " +
    document.getElementById("etternavn").value;
    telfnr = document.getElementById("telefonnr").value;
    epost = document.getElementById("epost").value.indexOf("@");
    antallBilletter = document.getElementById("antall").value;

    let ut = "Navn: " + navn + "\nTelefon: " + telfnr + "\nEpost: " + epost +
            "<br>Antall billetter: " + antallBilletter;

    const billettArray ={navn, telfnr, epost, antallBilletter};

    for (let billett in billettArray){
        ut += billettArray[billett];
    }

    document.getElementById("utInfo").innerHTML = ut;
}