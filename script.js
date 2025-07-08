// Updated JavaScript - apply dark-mode to both html and body
document.addEventListener('DOMContentLoaded', function () {
    // Dark Mode Toggle
    const darkModeButton = document.getElementById('darkModeToggle');

    try {
        if (localStorage.getItem('darkMode') === 'enabled') {
            document.documentElement.classList.add('dark-mode');
            document.body.classList.add('dark-mode');
            if (darkModeButton) darkModeButton.textContent = 'Light Mode';
        }
    } catch (e) {
        console.log('localStorage not available');
    }

    if (darkModeButton) {
        darkModeButton.addEventListener('click', function () {
            const body = document.body;
            const html = document.documentElement;

            const isDark = body.classList.contains('dark-mode');
            body.classList.toggle('dark-mode');
            html.classList.toggle('dark-mode');
            darkModeButton.textContent = isDark ? 'Dark Mode' : 'Light Mode';

            try {
                localStorage.setItem('darkMode', isDark ? 'disabled' : 'enabled');
            } catch (e) {
                // localStorage not available
            }
        });
    }

    // === Read More Toggle for Skills Section ===
    document.querySelectorAll('.read-more-btn').forEach(function (button) {
        button.addEventListener('click', function () {
            const targetId = this.dataset.target;
            const targetDiv = document.getElementById(targetId);
            if (targetDiv) {
                targetDiv.classList.toggle('hidden');
            }
        });
    });
});
