# Meetup App

Este proyecto de React es una aplicación de Meetup que permite visualizar, agregar y gestionar meetups. Está diseñado para proporcionar una interfaz amigable y funcional para los usuarios.

## Instalación

Clona este repositorio:

### `https://github.com/guadarecio/react-meetup.git`

Navega al directorio del proyecto:

### `cd react-meetup`

Instala las dependencias:

### `npm install`

## Ejecución

Para ejecutar la aplicación, utiliza el siguiente comando:

### `npm start`

La aplicación estará disponible en http://localhost:3000.

## Testing

### Test End-to-End (E2E) con Cypress

Asegúrate de tener la aplicación en ejecución antes de ejecutar los tests de Cypress.

1. Abre una nueva terminal y ejecuta la aplicación:

### `npx cypress open`

2. A continuación te aparecerá una frase que diga:

_Necesita instalar los siguientes paquetes:_
_ciprés@13.6.3_
_¿Está bien continuar? (y)_

Debe escribir que sí de la siguiente manera:

### `y`

3. En la siguiente ventana, verás las novedades de cypress, en las que deberás hacer click en "Continuar":

![Cypress Intro](/public/cypress1.png)

4. Luego aparecerá la ventana de bienvenida y deberás hacer click en "E2E Testing"

![Cypress Welcome](/public/cypress2.png)

5. En la Configuración harás click en "Continuar":
   ![Cypress Configuration](/public/cypress3.png)

6. En la ventana del navegador harás click en "Start E2E Testing in Chrome": 
![Cypress Browser](/public/cypress4.png)


7. Finalmente el test se verá con el nombre de `cypress/e2e/main_navigation`.



### Características

1. Pantalla de Meetups: Muestra todos los meetups existentes.

2. Formulario de Nuevo Meetup: Permite agregar nuevos meetups mediante un formulario intuitivo.

3. Pantalla de Favoritos: Muestra todos los meetups seleccionados como favoritos.

### Requisitos y Condiciones

- Se ha implementado una animación en el header para facilitar el acceso rápido a las distintas páginas al hacer scroll.
- La navegación desde el header se refleja en la URL para mejorar el SEO.
- El botón de añadir a favoritos ahora funciona correctamente. Se ha implementado la lógica para añadir y quitar de favoritos.
- Se ha implementado un test E2E, para garantizar la calidad del código y que todas las implementaciones funcionen correctamente.
- El botón de añadir un meetup ahora funciona correctamente. Se ha implementado la lógica para que se agregue un nuevo meetup a la lista cuando se hace click.
