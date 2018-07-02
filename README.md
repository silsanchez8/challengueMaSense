# Challengue MaSense

Pagina web responsive usando **sass** y **Jquery**.

# Resolución

Mi manera usual de trabajar es utilizando **Compass** en conjunto con **Sass**, pero en esta ocasión voy a utilizar sólo los comandos de **sass** para respetar al pie la consigna. Por esta misma razón, crearé todas las carpetas y subcarpetas que necesite a mano.

## Estructura del proyecto

```

+-- Content
|   +-- css
|   +-- fonts
|   +-- img
|   +-- js
|   +-- sass
       |-- modules
       |-- pages
+-- index.html

```

## Preprocesador

Voy a utilizar el comando npm ( **Node**) para instalar  **sass** de manera global en mi pc.
Luego, voy a ejecutar el comando `sass --watch`  con el folder origen ( que contiene los archivos sass) y el folder destino ( donde se generará el archivo .css final) . Cabe destacar que utilizando `--watch`  queda monitoreando esta carpeta y ante cualquier cambio que se produce en los archivos .scss. Vuelve a generar el archivo .css automáticamente.

## Consideraciones

 Separé las mediaqueries al final de cada hoja/modulo de scss, para tener mas claridad en el código. 
 
 Si bien la consigna indica sólo maquetar las versiones desktop y mobile, también las versiones intermedias estan incluidas.
 
 Si bien en el material habia dos logos **svg**, uno para la versión desktop y otro para mobile, utilicé el mismo cambiando el tamaño por css.
 
 Utilicé GitBash para crear y subir el proyecto a mi repositorio de GitHub.
 
 Para la edición de este archivo Readme.md utilice :https://stackedit.io/app#








