function validateForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (username === 'pplg.html' && password === 'html.pw') {
        // Jika username dan password benar, arahkan ke halaman menu
        window.location.href = 'menu.html';
        return false; // Mencegah pengiriman form secara default
    } else {
        // Jika username atau password salah, tampilkan pesan kesalahan
        errorMessage.textContent = 'Nama atau password salah!';
        return false; // Mencegah pengiriman form secara default
    }
}
