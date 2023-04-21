fetch('../../exemple.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById("phrase1").innerHTML = data.phrase1;
    document.getElementById("phrase2").innerHTML = data.phrase2;
    document.getElementById("phrase3").innerHTML = data.phrase3;
    document.getElementById("phrase4").innerHTML = data.phrase4;
  })
  .catch(error => console.error(error));




