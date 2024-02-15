let ticketArray = [];
function visBilletter() {
    const name = document.getElementById("fornavn").value +
        " " + document.getElementById("etternavn").value;
    const phonenmbr = document.getElementById("telefonnr").value;
    const email = document.getElementById("epost").value;
    const nmbrTickets = document.getElementById("antall").value;
    const filmName = document.getElementById("velgFilm").value;

    const ticketPurchase = {
        name: name,
        phonenmbr: phonenmbr,
        email: email,
        nmbrTickets: nmbrTickets,
        filmName: filmName
    };

    ticketArray.push(ticketPurchase);

    let ut = "<table><tr><th>Navn</th>" +
        "<th>Telefonnummer</th><th>Epost</th>" +
        "<th>Antall Billetter</th><th>Til Film</th></tr>";

    for (let i of ticketArray) {
        ut += "<tr>";
        ut += "<td>" + i.name + "</td><td>" + i.phonenmbr + "</td><td>" +
            i.email + "</td><td>" + i.nmbrTickets + "</td><td>" + i.filmName + "</td>";
        ut += "</tr>"
    }
    document.getElementById("utInfo").innerHTML = ut;
}

function deleteTickets(){
    document.getElementById("utInfo").innerHTML = "";
    ticketArray = [];
}

function validateform(){
    let x = document.forms["ticketOrdering"]["etternavn"].value;
    if (x === ""){
        alert("Please fill out your name");
        return false;
    }
}
    function validateEmail(epost){
        const at = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (epost.value.match(at)){
        return true;
    }else {
        document.getElementById("errorMessageEmail").innerHTML="<b>Not av valid email address</b>";
    }
}

    function validateName(){
        if (name === ""||name==null){
            document.getElementById("etternavn").innerHTML="<b>Not valid name</b>";
            return false;
        }
    }

function validatephone(phonenmbr){
    const tall = Number(phonenmbr);
    if (isNaN(tall) && phonenmbr.length !== 8){
        document.getElementById("telefonnr").innerHTML="<b>Not a valid phone number</b>";
        return false;
    }
}
