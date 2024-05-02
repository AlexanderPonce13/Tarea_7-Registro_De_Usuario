document.addEventListener("DOMContentLoaded", function() {
    // Obtener referencias a los elementos del formulario
    const registerForm = document.getElementById("registerForm");
    const usernameInput = document.getElementById("uname");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("psw");
    const repeatPasswordInput = document.getElementById("psw-repeat");

    // Manejar el evento de clic en el botón de registro
    registerForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Evitar que se envíe el formulario automáticamente

        // Validar que las contraseñas coincidan
        if (passwordInput.value !== repeatPasswordInput.value) {
            alert("Las contraseñas no coinciden.");
            return;
        }

        // Aquí puedes agregar más validaciones según tus necesidades

        // Si todas las validaciones pasan, puedes enviar los datos del formulario
        const userData = {
            username: usernameInput.value,
            email: emailInput.value,
            password: passwordInput.value
            // Puedes agregar más datos aquí según lo necesites
        };

        
    });
});
