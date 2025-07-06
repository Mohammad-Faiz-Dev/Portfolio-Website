// Updated JavaScript - apply dark-mode to both html and body
document.addEventListener('DOMContentLoaded', function() {
    // Get the dark mode button
    const darkModeButton = document.getElementById('darkModeToggle');
    
    // Check if dark mode was previously enabled
    try {
        if (localStorage.getItem('darkMode') === 'enabled') {
            document.documentElement.classList.add('dark-mode'); // Add to html
            document.body.classList.add('dark-mode'); // Add to body
            darkModeButton.textContent = 'Light Mode';
        }
    } catch (e) {
        console.log('localStorage not available');
    }
    
    // Add click event listener to the button
    darkModeButton.addEventListener('click', function() {
        const body = document.body;
        const html = document.documentElement;
        
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            html.classList.remove('dark-mode');
            darkModeButton.textContent = 'Dark Mode';
            try {
                localStorage.setItem('darkMode', 'disabled');
            } catch (e) {
                // localStorage not available
            }
        } else {
            body.classList.add('dark-mode');
            html.classList.add('dark-mode');
            darkModeButton.textContent = 'Light Mode';
            try {
                localStorage.setItem('darkMode', 'enabled');
            } catch (e) {
                // localStorage not available
            }
        }
    });
});