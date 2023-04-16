# Desafio 3
## Ejercicio 1
Para poder pausar mi trabajo actual para empezar a trabajar en la rama master hago uso del comando `git stash`
> El comando git stash almacena temporalmente (o guarda en un stash) los cambios que hayas efectuado en el código en el que estás trabajando para que puedas trabajar en otra cosa y, más tarde, regresar y volver a aplicar los cambios más tarde.

Despues debo volver a la rama master con el comando `git switch master` y eliminar el archivo ***status.js*** ya sea de forma manual en mi explorador de archivos o desde la terminal con el comando `git rm -f status.js`

## Ejercicio 2
Para poder subir los cambios a producción debo de seguir los siguientes pasos
* El primer paso seria asegurarme de estar en la rama master con el comando `git switch master`
* El segundo paso seria hacer un merge de la rama ***front-react*** a la rama principal ***master*** con el siguiente comando `git merge front-react`
* Y el ultimo paso para subir los cambos a produccion seria con el siguiente comando `git push -u origin master`

Con estos pasos ya habriamos subido nuestros ultimos cambios al repositorio remoto