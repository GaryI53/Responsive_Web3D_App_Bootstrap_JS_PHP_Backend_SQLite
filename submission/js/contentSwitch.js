document.addEventListener('DOMContentLoaded', (event) => {
  document.getElementById('home-link').addEventListener('click', function() {
    loadContent('submission.html');
  });

  document.getElementById('about-link').addEventListener('click', function() {
    loadContent('About.html');
  });

  document.getElementById('models-link').addEventListener('click', function() {
    loadContent('CocaCola.html');
  });
});

function loadContent(page) {
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://users.sussex.ac.uk/~gi53/3dapp/submission/' + page, true);

xhr.onload = function() {
  if (this.status == 200) {
    document.getElementById('content').innerHTML = this.responseText;
  }
}

xhr.send();
}
