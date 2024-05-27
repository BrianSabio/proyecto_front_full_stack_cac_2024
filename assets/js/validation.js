document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const error = document.querySelector("#error")

    form.addEventListener("submit", function(event) {
    event.preventDefault();

    const inputs = form.querySelectorAll("input");
    const textarea = form.querySelector("textarea");
    const select = form.querySelector("select");
    const checkbox = form.querySelector("input[type='checkbox']");

    let isValid = true;

    inputs.forEach(function(input) {
        if (input.value.trim() === '') {
            isValid = false;
        }
    });

    if (textarea.value.trim() === '') {
        isValid = false;
    }

    if (select.value === '') {
        isValid = false;
    }

    if (!checkbox.checked) {
        isValid = false;
    }

    if (isValid) {
        alert('El formulario se envió exitosamente');
        form.reset();
    } else {
        error.style.display = "block";
    }
    });
});
