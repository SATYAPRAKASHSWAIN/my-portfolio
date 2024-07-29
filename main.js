var typed = new Typed(".text", {
  strings: ["Backend Developer", "Java Developer", "Web Developer"],
  typeSpeed: 10,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

const submit = document.querySelector("#submit");

const saveLead = async () => {
  // e.preventDefult();
  // let clientName = document.getElementById("required-name").value;
  // let clientEmail = document.getElementById("required-email").value;
  // let clientSubject = document.getElementById("required-subject").value;
  // let clientMessage = document.getElementById("required-message").value;

  // alert(`Thankyou for visit our site `);
  // let response = await fetch("http://localhost:9090/api/getAllData");
  // console.log(response);

  // let response2 = await fetch("http://localhost:9090/api/submit", {
  //   method: "POST",
  //   headers: {
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     name: clientName,
  //     email: clientEmail,
  //     subject: clientSubject,
  //     message: clientMessage,
  //   }),
  // });

  alert(`Thankyou for visit our site `);
};

submit.addEventListener("click", saveLead);
