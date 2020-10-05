var students = {
  Students: [
    {
      name: "Greg",
      age: "19",
      phone: 3333333333,
      email: "greg@mail.com",
      address: "222 Street Rd.",
      classes: ["N-201", "Comm-232", "Geo-121"],
    },
    {
      name: "Claire",
      age: "20",
      phone: 5555555555,
      email: "claire@mail.com",
      address: "676 Circle St.",
      classes: ["N-201", "Comm-232", "Geo-121"],
    },
  ],
};

if (!localStorage.getItem("com.hrlindse.n423")) {
  //   alert("I have it");
  localStorage.setItem("com.hrlindse.n423", JSON.stringify(students));
} else {
  //   alert("nope");
  //   localStorage.setItem("com.hrlindse.n423", JSON.stringify(students));
}

console.log(JSON.parse(localStorage.getItem("com.hrlindse.n423")));

function displayStudents() {
  allStudents = JSON.parse(localStorage.getItem("com.hrlindse.n423"));

  console.log(allStudents.Students);
  $("#students").html("");
  $.each(allStudents.Students, function () {
    $("#students").append(`<div class="studentContainer">
      <strong>Name:</strong> ${this.name} <br>
      <strong>Age:</strong> ${this.age} <br>
      <strong>Phone:</strong> ${this.phone} <br>
      <strong>Email:</strong> ${this.email} <br>
      <strong>Address:</strong> ${this.address} <br>
      <strong>Classes:</strong> </div>
    `);
    $.each(this.classes, function () {
      $(".studentContainer").last().append(`${this} `);
    });
  });
}

$("#addField").on("click", function () {
  $("#classes").append(
    `<input type="text" name="class" class="class" /><br />`
  );
});

$("#submit").on("click", function () {
  if ($("#form")[0].checkValidity()) {
    newStudent = $("#form").serialize();

    students = JSON.parse(localStorage.getItem("com.hrlindse.n423"));

    classesList = [];
    $(".class").each(function () {
      classesList.push($(this).val());
    });
    students.Students.push({
      name: $("#name").val(),
      age: $("#age").val(),
      phone: $("#phone").val(),
      email: $("#email").val(),
      address: $("#address").val(),
      classes: classesList,
    });
    $("#formFields")
      .html(`<label for="name">Name: <input type="text" id="name" required /></label>
        <br />
        <label for="age">Age: <input type="text" id="age" required /></label>
        <br />
        <label for="phone"
          >Phone Number: <input type="tel" id="phone" required
        /></label>
        <br />
        <label for="email"
          >Email: <input type="email" id="email" required
        /></label>
        <br />
        <label for="address"
          >Address: <input type="text" id="address" required
        /></label>
        <br />
        <fieldset id="classes">
          <legend>Enter your classes:</legend>
          <input type="text" name="class" /><br />
        </fieldset>`);

    localStorage.setItem("com.hrlindse.n423", JSON.stringify(students));

    console.log("Student added");
    displayStudents();
  } else {
    $("#form")[0].reportValidity();
  }
});

$("#view").on("click", function () {
  displayStudents();
});

$("#reset").on("click", function () {
  students = {
    Students: [
      {
        name: "Greg",
        age: "19",
        phone: 3333333333,
        email: "greg@mail.com",
        address: "222 Street Rd.",
        classes: ["N-201", "Comm-232", "Geo-121"],
      },
      {
        name: "Claire",
        age: "20",
        phone: 5555555555,
        email: "claire@mail.com",
        address: "676 Circle St.",
        classes: ["N-201", "Comm-232", "Geo-121"],
      },
    ],
  };
  localStorage.setItem("com.hrlindse.n423", JSON.stringify(students));
  displayStudents();
});
