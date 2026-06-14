document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const service = document.getElementById("service").value;

    if (!name || !service) {
      alert("Please fill in your name and choose a service.");
      return;
    }

    form.reset();
    alert(
      `Thank you, ${name}! Your appointment request for ${service} has been received.`,
    );
  });
});
