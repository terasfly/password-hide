const togglePassword = document.getElementById('togglePassword')

const password = document.getElementById('password')

const eyeIcon = document.getElementById('eyeIcon')

togglePassword.addEventListener('click', () => {
    if (password.type === 'password') {
        password.type = 'text'
        eyeIcon.classList.remove('fa-eye')
        eyeIcon.classList.add('fa-eye-slash')
    } else {
        password.type = 'password'
        eyeIcon.classList.remove('fa-eye-slash')
        eyeIcon.classList.add('fa-eye')
    }
})