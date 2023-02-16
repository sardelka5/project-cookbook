const regoForm = document.querySelector('#form-rego');
const logoForm = document.querySelector('#form-logo');
const errorMessage = document.querySelector('#error')
const list = document.querySelector('#list');
const seafood = document.querySelector('#seafood');
const blyodo = document.querySelector('#blyodo');
 
if (logoForm) {
  logoForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const { method, action, email, password } = event.target;

    const response = await fetch(action, {
      method,
      headers: {
        'Content-Type': 'Application/json',
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
    });

    const data = await response.json();

    if (data.message === 'ok') {
      window.location.assign('/home');
    } else {
      errorMessage.innerText = data.message;
    }
  });
}

if (regoForm) {
  regoForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const { method, action, name, email, passwordOne, passwordTwo } = event.target;

    const res = await fetch(action, {
      method,
      headers: {
        'Content-Type': 'Application/json',
      },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        passwordOne: passwordOne.value,
        passwordTwo: passwordTwo.value,
      }),
    });

    const data = await res.json();

    if (data.message === 'ok') {
      window.location.assign('/home');
    } else {
      errorMessage.innerText = data.message;
    }
  });
}

if (list) {
  list.addEventListener('click', async (event) => {
    event.preventDefault();
  
    const id  = event.target.getAttribute("id");
  
    const res = await fetch(`/home/${id}`);

    const data = await res.text();
      console.log(data);
      blyodo.innerHTML = data;

      // regoForm.insertAdjacentHTML('beforeend', html);
    
  });
}
