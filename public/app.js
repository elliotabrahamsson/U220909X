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
    RutaDiv.className = 'position-fixed top-50 start-25 w-25 bg-primary '
    'h-200';
    app.appendChild(RutaDiv);

    const OmmigText = document.createElement('p');
    OmmigText.innerHTML = 'sdjofjdsjfklsdjklfjsdklfjklsdjfklsdkfj' 
    +'hgfdfgjkwdasdwdassdn fjfgjdklsjfdjifjgfjdkjgldjgfgdflgokdfogkdfokgdfopgrekgopfdgkdopfkgop';
    OmmigText.className = 'bg-primary  h-25 overflow-auto';
    RutaDiv.appendChild(OmmigText);


    const bildDiv = document.createElement('div');
    bildDiv.setAttribute('id', 'Bild');
    bildDiv.className = 'position-fixed top-25 start-50 bg-primary w-25';
    app.appendChild(bildDiv);

    const Bild = document.createElement('img');
    Bild.setAttribute('src', 'dog.jpg');
    Bild.className = 'w-75 container-sm'
    bildDiv.appendChild(Bild);

    

} 
