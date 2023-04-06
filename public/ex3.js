const articleForm = document.querySelector('#articleForm');
const result = document.querySelector('#result');

articleForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(articleForm);

  const response = await fetch('https://thejsway-server.herokuapp.com/articles', {
    method: 'POST',
    body: formData
  });

  const data = await response.json();
  result.textContent = data.message;
});
