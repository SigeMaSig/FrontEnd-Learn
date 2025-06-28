function loadHTML(id, file) {
  fetch(file)
    .then(response => response.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    });
}

loadHTML("header-placeholder", "header.html");
loadHTML("map-placeholder", "map.html");
loadHTML("contact-info-placeholder", "contact-info.html");
