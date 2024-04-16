/*let ticketArray = [];
function visBilletter() {
    let name = document.getElementById("fornavn").value +
        " " + document.getElementById("etternavn").value;
    let phonenmbr = document.getElementById("telefonnr").value;
    let email = document.getElementById("epost").value;
    let nmbrTickets = document.getElementById("antall").value;
    let filmName = document.getElementById("velgFilm").value;

    const ticketPurchase = {
        name: name,
        phonenmbr: phonenmbr,
        email: email,
        nmbrTickets: nmbrTickets,
        filmName: filmName
    };

    const at = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email === "" || phonenmbr === "" || nmbrTickets === "" || name === ""){
        document.getElementById("errorMessageEmail").innerHTML = "Please fill inn the input boxes";
    } else if (email.value.match(at)){
        document.getElementById("errorMessageEmail").innerHTML = "Please enter a valid email address";
    } else if (isNaN(phonenmbr) && phonenmbr.length!==8){
        document.getElementById("errorMessagePhonenmbr").innerHTML = "Please enter a valid phonenumber";
    } else {
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

function deleteTickets() {
    document.getElementById("utInfo").innerHTML = "";
    ticketArray = [];
}


    function validateEmail(epost){
        const at = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (epost.value.match(at)){
        return true;
    }else {
        document.getElementById("errorMessageEmail").innerHTML="<b>Not av valid email address</b>";
        return false;
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
}*/
