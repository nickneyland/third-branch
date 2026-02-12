document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form[name="contact"]');
    
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const formData = new FormData(form);
            
            fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(formData).toString()
            })
            .then(() => {
                alert("Thank you for your submission!");
                form.reset();
            })
            .catch(error => {
                console.error('Error:', error);
                alert("There was an error submitting the form. Please try again.");
            });
        });
    }
});