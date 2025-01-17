const xhr = new XMLHttpRequest(); //new http message

xhr.addEventListener('load', () => {
  console.log(xhr.response);
});

xhr.open('GET', 'https://supersimplebackend.dev/documentations');
xhr.send();
