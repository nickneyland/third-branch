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
                // Create success message
                const successMessage = document.createElement('div');
                successMessage.innerHTML = `
                    <div style="text-align: center; padding: 40px 20px; color: #fff;">
                        <h4 style="color: #fff; font-size: 28px; margin-bottom: 20px;">Thank you!</h4>
                        <p style="font-size: 18px; margin-bottom: 20px;">Your message has been sent successfully. We'll get back to you soon!</p>
                        <button onclick="location.reload()" style="
                            font-family: var(--font-main);
                            font-weight: 700;
                            font-size: 16px;
                            width: 200px;
                            height: 40px;
                            background: var(--orange);
                            border-radius: 100px;
                            border: 0;
                            cursor: pointer;
                            color: #000;
                            transition: 0.3s ease;
                        " onmouseover="this.style.opacity='0.8'" onmouseout="this.style.opacity='1'">
                            Send Another Message
                        </button>
                    </div>
                `;
                
                // Replace form with success message
                form.parentNode.replaceChild(successMessage, form);
            })
            .catch(error => {
                console.error('Error:', error);
                
                // Create error message
                const errorMessage = document.createElement('div');
                errorMessage.innerHTML = `
                    <div style="text-align: center; padding: 20px; color: #fff; border: 2px solid #ff6b6b; border-radius: 8px; background: rgba(255, 107, 107, 0.1);">
                        <h4 style="color: #ff6b6b; margin-bottom: 10px;">Oops! Something went wrong</h4>
                        <p style="margin-bottom: 15px;">There was an error submitting the form. Please try again.</p>
                        <button onclick="location.reload()" style="
                            font-family: var(--font-main);
                            font-weight: 700;
                            font-size: 14px;
                            padding: 8px 16px;
                            background: #ff6b6b;
                            border-radius: 4px;
                            border: 0;
                            cursor: pointer;
                            color: #fff;
                        ">
                            Try Again
                        </button>
                    </div>
                `;
                
                // Replace form with error message
                form.parentNode.replaceChild(errorMessage, form);
            });
        });
    }
});