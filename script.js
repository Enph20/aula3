const form = document.forms['contact-form'];

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the default form submission

    const name = form.elements['name'].value;
    const email = form.elements['email'].value;
    const message = form.elements['message'].value;

    alert(`O formulário foi enviado com sucesso segue as informações enviadas:\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
});
