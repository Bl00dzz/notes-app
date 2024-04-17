const noteContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

// Memeriksa apakah terdapat catatan yang disimpan di localStorage saat halaman dimuat
window.addEventListener("load", () => {
    const savedNotes = localStorage.getItem("notes");
    if (savedNotes) {
        noteContainer.innerHTML = savedNotes;
    }
});

function updateStorage() {
    localStorage.setItem("notes", noteContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    noteContainer.appendChild(inputBox).appendChild(img);
    updateStorage();
});

noteContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG" && e.target.parentElement.classList.contains("input-box")) {
        e.target.parentElement.remove();
        updateStorage();
    }
    else if (e.target.tagName === "P") {
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function () {
                updateStorage();
            }
        })
    }
});

notesData.forEach(note => {
    const titleElement = document.createElement("p");
    titleElement.textContent = note.title;

    const bodyElement = document.createElement("p");
    bodyElement.textContent = note.body;

    const noteElement = document.createElement("div");
    noteElement.classList.add("note");
    noteElement.appendChild(titleElement);
    noteElement.appendChild(bodyElement);

    noteContainer.appendChild(noteElement);
});