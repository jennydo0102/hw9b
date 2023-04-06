function displayFormData() {
  const form = document.getElementById('myForm');
  const formData = new FormData(form);
  const xhr = new XMLHttpRequest();
  
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const message = xhr.responseText;
      const messageDiv = document.getElementById('formData');
      messageDiv.textContent = message;
    }
  };
  
  xhr.open('POST', '/form');
  xhr.send(formData);
}

