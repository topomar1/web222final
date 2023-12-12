function validateForm(event) {
  let name = document.forms["myForm"]["name"].value;
  let email = document.forms["myForm"]["email"].value;
  let address = document.forms["myForm"]["address"].value;
  let city = document.forms["myForm"]["city"].value;
  let postalCode = document.forms["myForm"]["postal-code"].value;
  if (
    name?.trim() == "" ||
    email?.trim() == "" ||
    address?.trim() == "" ||
    city?.trim() == "" ||
    postalCode?.trim() == ""
  ) {
    alert("Field must be filled out");
    return false;
  } else {
    submitForm(event);
  }
}

function submitForm(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get form data
  const form = document.forms["myForm"];
  const formData = new FormData(form);

  // Fetch POST request to the specified URL
  fetch("https://httpbin.org/post", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Form data submitted:", data); // Log the response data
      // You can handle the response here or perform other actions as needed
    })
    .catch((error) => {
      console.error("Error:", error); // Log any errors
    });
}

function showField(selectedOption) {
  const dynamicField = document.getElementById("dynamicField");

  // Clear any existing content in dynamicField
  dynamicField.innerHTML = "";

  if (selectedOption === "hiring") {
    dynamicField.innerHTML =
      '<label for="hiringInput">Hourly Rate:</label>' +
      '<input type="text" id="hiringInput" name="hiringInput" class="extra-field" />';
  } else if (selectedOption === "comment") {
    dynamicField.innerHTML =
      '<label for="commentInput">Comment:</label>' +
      '<textarea id="commentInput" name="commentInput"></textarea>';
  } else if (selectedOption === "question") {
    dynamicField.innerHTML =
      '<label for="questionInput">Question:</label>' +
      '<textarea id="questionInput" name="questionInput"></textarea>';
  }
}
