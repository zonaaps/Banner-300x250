document.addEventListener(DOMContentLoaded, function() {
    fetch('httpsraw.githubusercontent.comzonaapsBanner-300x250refsheadsmainbanner-300x250.js')
        .then(response = response.text())
        .then(data = {
            document.getElementById('anuncio-iframe').srcdoc = data;
        })
        .catch(error = console.error('Error al cargar el anuncio', error));
});
