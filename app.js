function getDogImage() {
  let input = document.getElementById("input").value;
  fetch(`https://dog.ceo/api/breed/${input}/images/random`)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert(error + "dog not found"));
}

function displayResults(responseJson) {
  console.log(responseJson);
  //replace the existing image with the new one
  $(".results-img").replaceWith(
    `<img src="${responseJson.message}" class="results-img">`
  );
  //display the results section
  $(".results").removeClass("hidden");
}

function watchForm() {
  $("form").submit(event => {
    event.preventDefault();
    getDogImage();
  });
}

$(function() {
  watchForm();
});
