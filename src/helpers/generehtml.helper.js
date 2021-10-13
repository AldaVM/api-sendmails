function genereHTMLContentMail(
  content = {
    names: "test",
    email: "test@test.com",
    company: "test company",
    text: "text for test",
  }
) {
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

function genereHTMLContentFreeClass(
  content = {
    names: "test",
    telephone: "test@test.com",
    dni: "01234567",
  }
) {
  const { names, telephone, dni } = content;

  return `
    <h1>Formulario de Contacto Clase de Prueba</h1>
    <ul>
      <li>${names}</li>
      <li>${telephone}</li>
      <li>${dni}</li>
    </ul>
    <p>La persona ${names} desea inscribirse en una clase gratuita</p>
  `;
}

module.exports = { genereHTMLContentFreeClass, genereHTMLContentMail };
