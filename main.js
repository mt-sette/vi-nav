document.addEventListener('keydown', function (e) {
    /**
     * TODO: fetch scroll amount from extension settings
     * TODO: handle more keys or provide customization options
     * TODO: add option for disabling the extension on specific websites
     */
    const scrollAmount = 100; // Or fetch from extension settings
    const activeElementTag = document.activeElement.tagName;

    // Check if the user is not focused on input fields
    if (!['INPUT', 'TEXTAREA'].includes(activeElementTag)) {
        switch (e.key) {
            case 'j':
                window.scrollTo({
                    top: window.scrollY + scrollAmount,
                    behavior: 'smooth',
                });
                break;
            case 'k':
                window.scrollTo({
                    top: window.scrollY - scrollAmount,
                    behavior: 'smooth',
                });
                break;
        }
    }
});
