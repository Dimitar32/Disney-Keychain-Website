window.addEventListener('load', function () {
    const header = document.querySelector('header');
    const body = document.querySelector('body');
    const headerHeight = header.offsetHeight;

    // Прилага динамично padding на body, за да компенсира височината на хедъра
    body.style.paddingTop = `${headerHeight}px`;
});

window.addEventListener('resize', function () {
    const header = document.querySelector('header');
    const body = document.querySelector('body');
    const headerHeight = header.offsetHeight;

    // Актуализира padding при преоразмеряване на прозореца
    body.style.paddingTop = `${headerHeight}px`;
});
