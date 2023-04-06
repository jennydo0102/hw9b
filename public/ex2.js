const submitBtn = document.querySelector('#submitBtn');
const result = document.querySelector('#result');

submitBtn.addEventListener('click', async () => {
  const data = {
    name: 'John Doe',
    countries: ['USA', 'Canada', 'Mexico', 'France', 'Germany']
  };

  const response = await fetch('/api/countries', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

  const { message } = await response.json();
  result.textContent = message;
});

