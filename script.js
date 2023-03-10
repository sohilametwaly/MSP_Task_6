let form = document.querySelector(".Book-input");
let cards_container = document.querySelector(".book-cards");
let addBtn = document.querySelector(".add");
let resetBtn = document.querySelector(".reset");
let card = document.querySelector(".book-cards");

addBtn.addEventListener("click", (event) => {
  event.preventDefault();
  cards_container.classList.add("change");
  let name = document.querySelector("#book-name").value;
  let rating = document.querySelector("#rating").value;
  let read = document.getElementsByName("read");
  let choice;
  for (let i = 0; i < 2; i++) {
    if (read[i].checked) {
      choice = read[i].value;
    }
  }
  let image = document.querySelector("#img").value.split("\\");
  let imageName = image[image.length - 1];
  let brief = document.querySelector("#book-brief").value;

  let stars = " ";
  for (let i = 0; i < rating; i++) {
    stars += `<i class="fa-solid fa-star"></i>`;
  }

  if (choice === "yes") {
    card.innerHTML += `<div class="card" style="background-color: rgba(45, 42, 42, 0.871);
  height: 100%;
  width:40%;
  border-radius: 10px;
  color: white;
  padding: 5px;">
  <ul>
  <li><h4>Book Name: ${name}</h4></li>
  <li><h4>Rating: ${stars}</h4></li>
  <li><h4>Image:</h4><img src="${imageName}" alt="img" style="height:300px;"/></li>
  <li><h4>Brief:</h4><p style="width:50%;">${brief}</p></li>
  </ul>
  <button
  class="delete"
  style="
    background-color: black;
    color: white;
    border-radius: 10px;
    padding: 5px;
  "
  onclick="deleteBook(this)"
>
  Delete
</button></div>
  </div>
  `;
  } else {
    card.innerHTML += `<div class="card" style="background-color:white;
  height: 100%;
  width:40%;
  border-radius: 10px;
  color: black;
  padding: 5px;">
  <ul>
  <li><h4>Book Name: ${name}</h4></li>
  <li><h4>Rating: ${stars}</h4></li>
  <li><h4>Image:</h4><img src="${imageName}" alt="img" style="height:300px; width:200px;"/></li>
  <li><h4>Brief:</h4><p>${brief}</p></li>
  </ul>
  <button
        class="delete"
        style="
          background-color: black;
          color: white;
          border-radius: 10px;
          padding: 5px;
        "
        onclick="deleteBook(this)"
      >
        Delete
      </button></div>
  `;
  }

  console.log(name, stars, rating, imageName, brief);
  form.reset();
});

function deleteBook(x) {
  x.parentElement.remove();
}

resetBtn.addEventListener("click", (event) => {
  event.preventDefault();
  form.reset();
});
