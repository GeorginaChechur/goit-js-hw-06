const submitForm = document.querySelector('.login-form');
console.log(submitForm)

submitForm.addEventListener("submit", clickSubmit);

function clickSubmit(evt) {
    evt.preventDefault()
    const form = evt.target;
    console.log(form)

    const login = form.elements.email.value;
    const password = form.elements.password.value;
  
  if (login === "" || password === "") {
      return alert("Please fill in all the fields!");
  }
    
 console.log(`Login: ${login}, Password: ${password}`);
  form.reset();

}




