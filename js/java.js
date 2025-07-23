function feedbackForm()
                        {
                            var firstName = document.forms["messageForm"]["fname"].value;
                            var lastName = document.forms["messageForm"]["lname"].value;
                            
                            var gender = document.forms["messageForm"]["genderDetails"].value;
                            var messageDetails = document.forms["messageForm"]["message"].value;
                                //alert(messageDetails);
                                if (firstName =="" || lastName =="")
                                {
                                alert("Empty fields are present!!! Please enter the values...");
                                }
                                else
                                {
                                alert("Thank you for your feedback!!!");
                                }
                         }
                         // Get the modal
var modal = document.getElementById("contactModal");

// Function to open the modal
function openModal(name, email) {
    document.getElementById("modalName").innerText = name;
    document.getElementById("modalEmail").innerText = email;
    modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
    modal.style.display = "none";
}

// Close the modal when the user clicks anywhere outside of the modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

