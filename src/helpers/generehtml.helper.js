function genereHTMLContentMail(content = {
  names: 'test',
  email: 'test@test.com',
  company: 'test company',
  text: "text for test"
}) {

  const { names, email, company, text } = content;

  return `
    <h1>Formulario de Contacto</h1>
    <ul>
      <li>${names}</li>
      <li>${email}</li>
      <li>${company}</li>
    </ul>
    <p>${text}</p>
  `;
}

module.exports = genereHTMLContentMail;