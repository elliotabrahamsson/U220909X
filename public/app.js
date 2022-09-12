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


    const RutaDiv = document.createElement('div');
    RutaDiv.setAttribute('id', 'Ruta');
    RutaDiv.className = 'col d-flex'
    app.appendChild(RutaDiv);

    const OmmigText = document.createElement('p');
    OmmigText.innerHTML = 'jadu';
    OmmigText.className = 'bg-primary d-flex';
    RutaDiv.appendChild(OmmigText);

    const bildDiv = document.createElement('div');
    bildDiv.setAttribute('id', 'Bild');
    bildDiv.className = 'col bg-primary d-sm-flex w-25';
    app.appendChild(bildDiv);

    const Bild = document.createElement('img');
    Bild.setAttribute('src', 'dog.jpg');
    Bild.className = 'w-50 container-sm'
    bildDiv.appendChild(Bild);

    

} 
