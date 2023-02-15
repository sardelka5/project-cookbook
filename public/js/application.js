const regoForm = document.querySelector('#form-rego');
const logoForm = document.querySelector('#form-logo');

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
      const html = `<div>${data.message}</div>`;
      logoForm.insertAdjacentHTML('beforeend', html);

      //! можно добавить во вьюшку див и менять там иннерХТМЛ
    }
  });
}

if (regoForm) {
  regoForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const { method, action, name, email, password } = event.target;

    const res = await fetch(action, {
      method,
      headers: {
        'Content-Type': 'Application/json',
      },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        password: password.value,
      }),
    });

    const data = await res.json();

    if (data.message === 'ok') {
      window.location.assign('/home');
    } else {
      const html = `<div>${data.message}</div>`;
      regoForm.insertAdjacentHTML('beforeend', html);

      //! можно добавить во вьюшку див и менять там иннерХТМЛ
    }
  });
}
