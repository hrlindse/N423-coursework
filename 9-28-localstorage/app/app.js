var students = {
  Students: [
    {
      name: "Todd",
    },
    {
      name: "Greg",
    },
    {
      name: "Claire",
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

$("#reset").on("click", function () {
  localStorage.setItem("com.hrlindse.n423", JSON.stringify(students));
  $("#students").html(localStorage.getItem("com.hrlindse.n423"));
});

$("#submit").on("click", function () {
  newStudent = $("#form").serialize();

  students = JSON.parse(localStorage.getItem("com.hrlindse.n423"));

  students.Students.push({ name: $("#name").val() });
  $("#name").val("");

  localStorage.setItem("com.hrlindse.n423", JSON.stringify(students));

  console.log("Student added");
  console.log(JSON.parse(localStorage.getItem("com.hrlindse.n423")));
  $("#students").html(localStorage.getItem("com.hrlindse.n423"));
});

$("#reset").on("click", function () {
  students = {
    Students: [
      {
        name: "Todd",
      },
      {
        name: "Greg",
      },
      {
        name: "Claire",
      },
    ],
  };
  localStorage.setItem("com.hrlindse.n423", JSON.stringify(students));
  $("#students").html(localStorage.getItem("com.hrlindse.n423"));
});
