function visBilletter(){
    let name = document.getElementById("fornavn").value;
    let surname = document.getElementById("etternavn").value;
    let phonenmbr = document.getElementById("telefonnr").value;
    let email = document.getElementById("epost").value;
    let nmbrTickets = document.getElementById("antall").value;
    let filmName = document.getElementById("velgFilm").value;
    let emailVal = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        const ticketPurchase = {
            name: name,
            surname:surname,
            phonenmbr: phonenmbr,
            email: email,
            nmbrTickets: nmbrTickets,
            filmName: filmName
        };
        let ticketArray = [];
        ticketArray.push(ticketPurchase);

        let ut = "<table><tr><th>Navn</th>" +
            "<th>Telefonnummer</th><th>Epost</th>" +
            "<th>Antall Billetter</th><th>Til Film</th></tr>";

        for (let i of ticketArray) {
            ut += "<tr>";
            ut += "<td>" + i.name + " " + i.surname + "</td><td>" + i.phonenmbr + "</td><td>" +
                i.email + "</td><td>" + i.nmbrTickets + "</td><td>" + i.filmName + "</td>";
            ut += "</tr>"
        }
        document.getElementById("utInfo").innerHTML = ut;

        document.getElementById("fornavn").value = "";
        document.getElementById("etternavn").value="";
        document.getElementById("antall").value="";
        document.getElementById("telefonnr").value="";
        document.getElementById("epost").value="";
        document.getElementById("errorMessageSurname").value="";
        document.getElementById("errorMessagePhonenmbr").value="";
        document.getElementById("errorMessageEmail").value="";

        if (phonenmbr.length !==8 || isNaN(phonenmbr)){
        document.getElementById("errorMessagePhonenmbr").innerText = "Please enter a valid phonenumber";
        return false;
    } else if (!emailVal.test(email)){
        document.getElementById("errorMessageEmail").innerText ="Please enter a valid email address";
        return false;
    } else if (name === "" || name === null || surname === "" || surname === null){
            document.getElementById("errorMessageSurname").innerText ="Please enter your first and last name";
            return false;
        } else if (nmbrTickets === "" || nmbrTickets === null || isNaN(nmbrTickets)){
            document.getElementById("errorMessageNmbrTickets").innerText="Please enter the number of " +
                "wanted tickets";
            return false;
        }/*else {
            let ticketArray = [];
            ticketArray.push(ticketPurchase);

            for (let i of ticketArray) {
                ut += "<tr>";
                ut += "<td>" + i.name + " " + i.surname + "</td><td>" + i.phonenmbr + "</td><td>" +
                    i.email + "</td><td>" + i.nmbrTickets + "</td><td>" + i.filmName + "</td>";
                ut += "</tr>"
            }
            document.getElementById("utInfo").innerText = ut;
        }*/
    //document.getElementById("utInfo").innerText = ut;
}

function deleteTickets() {
    document.getElementById("utInfo").innerHTML = null;
}
