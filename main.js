

var typed = new Typed(".hh", {
    strings: [,"Student","Youtuber","WebDeveloper" ],
    typeSpeed: 100,
    backSpeed: 30,
    loop: true

});

function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
  
    const serviceID = "service_7p0mv0t";
    const templateID = "template_60jiozj";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
  }