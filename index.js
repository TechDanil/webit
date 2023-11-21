document.addEventListener('DOMContentLoaded', function () {
    const modal = document.querySelector('.modal');
    const button = document.querySelector('.button');

    function toggleModal() {
        const currentDisplayStyle = window.getComputedStyle(modal).display;

        if (currentDisplayStyle === 'none' || currentDisplayStyle === '') {
            modal.style.display = 'block';
            button.style.display = "none";
        } else {
            button.style.display = "block";
            modal.style.display = 'none';
        }
    }

    button.addEventListener('click', toggleModal);

    window.addEventListener('click', function (event) {
        if (!modal.contains(event.target) && event.target !== button) {
            modal.style.display = 'none';
            button.style.display = "block";
        }
    });
});
