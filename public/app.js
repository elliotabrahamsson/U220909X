console.log('I am alive!');
build();

function build() {
    const Header = document.createElement('div');
    
    Header.className ='navbar navbar-expand bg-primary';
    app.appendChild(Header);

    const Ommig = document.createElement('h1');
    Ommig.innerHTML = 'Om mig'
    Ommig.className = 'font-monospace fs-4';
    Header.appendChild(Ommig);

    const bildDiv = document.createElement('div');
    bildDiv.setAttribute('id', 'Bild');
    app.appendChild(bildDiv);

    const Bild = document.createElement('img');
    Bild.setAttribute('src', 'dog.jpg');
    bildDiv.appendChild(Bild);

    const RutaDiv = document.createElement('div');
    RutaDiv.setAttribute('id', 'Ruta');
    app.appendChild(RutaDiv);

    const MinsommarRuta = document.createElement('p');
    MinsommarRuta.innerHTML = 'jadu';
    MinsommarRuta.className = 'bg-primary container-sm';
    RutaDiv.appendChild(MinsommarRuta);

} 
