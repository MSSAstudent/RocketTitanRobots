document.addEventListener("DOMContentLoaded", function() {
  var form = document.querySelector("#contact-form");
  var submitButton = document.querySelector("#contact-form button[type='submit']");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Retrieve form input values
    var name = document.querySelector("#name").value;
    var email = document.querySelector("#email").value;
    var phone = document.querySelector("#phone").value;
    var zip = document.querySelector("#zip").value;
    var comment = document.querySelector("#comment").value;

    // Create a new paragraph element to display the entered information
    var submittedInfo = document.createElement("p");
    submittedInfo.innerHTML = "Name: " + name + "<br>" +
                              "Email: " + email + "<br>" +
                              "Phone Number: " + phone + "<br>" +
                              "Zip Code: " + zip + "<br>" +
                              "Comment: " + comment;

    // Append the submitted information to the page2 div
    var page2 = document.querySelector("#page2");
    page2.appendChild(submittedInfo);	  
	page2.style.display = "block";

    // Reset the form
    form.reset();
  });
});

