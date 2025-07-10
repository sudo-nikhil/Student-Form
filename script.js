var sname = document.getElementById("name");
var age = document.getElementById("age");
var male = document.getElementById("male");
var female = document.getElementById("female");
var course = document.getElementById("course");
var email = document.getElementById("email");
var save = document.getElementById("save");
var tbody = document.getElementById("tbody");
var table = document.getElementById("table");

save.addEventListener("click", function (event) {

    // Validate form
    if (!sname.value || !age.value || (!male.checked && !female.checked) || !course.value || !email.value) {
        alert("Please fill out all fields.");
        return;
    }

    // Show the table
    table.classList.remove("hidden");

    // Create table row
    var tr = document.createElement("tr");

    // Name
    var td = document.createElement("td");
    td.textContent = sname.value;
    tr.appendChild(td);

    // Age
    var td2 = document.createElement("td");
    td2.textContent = age.value;
    tr.appendChild(td2);

    // Gender
    var td3 = document.createElement("td");
    td3.textContent = male.checked ? "Male" : "Female";
    tr.appendChild(td3);

    // Course
    var td5 = document.createElement("td");
    td5.textContent = course.value;
    tr.appendChild(td5);

    // Email
    var td6 = document.createElement("td");
    td6.textContent = email.value;
    tr.appendChild(td6);

    // Delete Button
    var td7 = document.createElement("td");
    var tdbtn = document.createElement("button");
    tdbtn.textContent = "Delete";
    tdbtn.style.backgroundColor = "red";
    tdbtn.style.color = "white";
    tdbtn.style.border = "none";
    tdbtn.style.padding = "5px 10px";
    tdbtn.style.cursor = "pointer";

    tdbtn.addEventListener("click", function () {
        tr.remove();
        if (tbody.children.length === 0) {
            table.classList.add("hidden");
        }
    });

    td7.appendChild(tdbtn);
    tr.appendChild(td7);

    tbody.appendChild(tr);

    sname.value = "";
    age.value = "";
    male.checked = false;
    female.checked = false;
    course.value = "";
    email.value = "";
});
