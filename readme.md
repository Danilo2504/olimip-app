# Puntos Culturales

Institucion: Escuenta Tecnica N.26 "Confederacion Suiza"

Integrantes: 
- Danilo Bautista (6.10)
- Brandon (6.10)
- Luciano Brumer (6.11)

# Proceso
El proyecto lo dividimos en 4 secciones:
- La construccio de la API Rest, donde podemos agregar, editar, eliminar, y obtener los usuarios o los puntos culturales.
- El diseño y construccion de la web de gestion, a la web solo podran ingresar los administradores, y su funcion es poder ver y/o editar los usuarios y tambien poder agregar puntos culturales y editarlos.
- El diseño y construccion de la app movil, la aplicacion consiste en que cuando te acerques a un Beepcon te llegue una notificacion y te de una lista de los puntos culturales cercanos, y tu como usuario, puedas comentar sobre el lugar, puntuarlo, o pedir una ruta guiada por voz.
- El sistema de los Beepcons, lo que pensamos fue en que haya un dispositivo que constantemente emita una señal abierta de Bluetooth), y que de igual forma rechaze todas los emparejamientos (a si nadie se pueda apropiar del emparejamiento). La App evalua constantemente si en la lista de dispositvos Bluetooth este alguno con nombre de "Beepcon" y si esto ocurre, es cuando te llega la notificacion con la informacion de los puntos culturales cercanos.

# Herramientas de desarrollo
- Para la API Rest utilizamos Express.js para el servidor, JWT para las validaciones, Prisma como ORM y MySQL como base da datos.
- Para la web de gestion utilizamos React.
- Para la app movil utilizamos React Native.

# Como pruebo el proyecto?
Hay 3 ramas, una indicando cada seccion del proyecto.
- Para iniciar la App, hay que usar el comando "npm install" y luego "npm i -g expo-cli" y con "npm start" podemos elejir de que modo acceder a la app.
- Para iniciar la web de gestion, hay que usar el comando "npm install" y con "npm start" iniciaremos la app.
- Para iniciar la API Rest, hay que usar el comando "npm install" y luego "npm run prisma" (para crear la base de datos y las tablas) y luego para iniciarla usar el comando "npm start", y listo, la API correra en "localhost:3006"