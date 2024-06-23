document.addEventListener('keydown', function (e) {
    /**
     * TODO: fetch scroll amount from extension settings
     * TODO: handle more keys or provide customization options
     * TODO: add option for disabling the extension on specific websites
     */
    const scrollAmount = 200; // Or fetch from extension settings
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
            case 'H':
                window.history.back();
                break;
            case 'L':
                window.history.forward();
                break;
            case 'r':
                window.location.reload();
                break;
            case 'g':
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                });
                break;
            case 'G':
                window.scrollTo({
                    top: document.body.scrollHeight,
                    behavior: 'smooth',
                });
                break;
            case 'd':
                window.scrollTo({
                    top: window.scrollY + window.innerHeight / 2,
                    behavior: 'smooth',
                });
                break;
            case 'u':
                window.scrollTo({
                    top: window.scrollY - window.innerHeight / 2,
                    behavior: 'smooth',
                });
                break;
        }
    }
});
