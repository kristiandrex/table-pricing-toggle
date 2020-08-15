const indicator = document.getElementById('indicator');

indicator.addEventListener('change', () => {
    const main = document.querySelector('main');

    main.classList.toggle('monthly');
    main.classList.toggle('annually');
});