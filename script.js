document.getElementById("contact-form").addEventListener("submit", function(event) {
 event.preventDefault();

 const name = document.getElementById("name").value;
 const email = document.getElementById("email").value;
 const message = document.getElementById("message").value;

 const formData = new FormData();
 formData.append("name", name);
 formData.append("email", email);
 formData.append("message", message);

 fetch("https://formsubmit.co/YOUR-GMAIL-EMAIL", {
     method: "POST",
     body: formData
 }).then(response => {
     alert("Message sent!");
     document.getElementById("contact-form").reset();
 }).catch(error => {
     alert("Something went wrong. Try again!");
 });
});
