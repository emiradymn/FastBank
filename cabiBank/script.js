function loadLayoutComponents() {
    fetch('layout.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('.layout').innerHTML = data;
        })
        .catch(error => console.error('Error loading layout:', error));
}


document.addEventListener('DOMContentLoaded', loadLayoutComponents);

let sayi = 1; 

function arttir() {
  sayi++;
  document.getElementById('number').innerText = sayi;
}

function azalt() {
  if (sayi > 1) {
    sayi--;
    document.getElementById('number').innerText = sayi;
  }
}
document.getElementById('cargo-btn').addEventListener('click', function() {
    window.location.href = 'fast-order.html';
});