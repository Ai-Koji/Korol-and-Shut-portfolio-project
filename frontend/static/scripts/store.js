isOpenCatalog = false;
catalogsDOM = document.querySelector('.catalogs');
expandDOM = document.querySelector('#expand');

function openCloseCatalogList() {
    if (isOpenCatalog) {
        catalogsDOM.classList.remove('expand');
        catalogsDOM.classList.add('collapse');

        expandDOM.src = 'images/expand_more.svg';
    } else {
        catalogsDOM.classList.remove('collapse');
        catalogsDOM.classList.add('expand');

        expandDOM.src = 'images/expand_less.svg';
    }
    isOpenCatalog = !isOpenCatalog;
}
