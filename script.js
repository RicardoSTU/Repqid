function addPhoto(filename) {
  var fileInput = document.createElement('input');
  fileInput.type = 'file';
  fileInput.name = 'photo';
  fileInput.value = filename;

  var button = document.createElement('button');
  button.innerHTML = 'Добавить фото';
  button.addEventListener('click', function() {
    var formData = new FormData();
    formData.append('photo', fileInput.files[0]);
    fetch('https://api.example.com/upload', {
      method: 'POST',
      body: formData
    }).then(function(response) {
      return response.json();
    }).then(function(data) {
      alert(data.message);
    }).catch(function(error) {
      alert('Ошибка: ' + error.message);
    });
  });

  document.body.appendChild(button);
}
