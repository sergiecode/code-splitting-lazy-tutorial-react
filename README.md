![code splitting lazy react](https://raw.githubusercontent.com/sergiecode/code-splitting-lazy-tutorial-react/master/lazy.jpg)

# Tutorial de Code Splitting usando lazy en React

Este tutorial te guiará a través del proceso de implementar el "Code Splitting" (división de código) en una aplicación React utilizando el método `lazy` y `Suspense`. El Code Splitting es una técnica que te permite cargar partes específicas de tu código de manera diferida, lo que puede mejorar el rendimiento y la eficiencia de tu aplicación al cargar solo lo que se necesita en un momento dado.

En este tutorial, aprenderás cómo utilizar `lazy` y `Suspense` para cargar componentes de manera diferida en una aplicación React. Utilizaremos un ejemplo sencillo para ilustrar el concepto.

## Pasos

### 1. Configuración inicial

Asegúrate de tener una aplicación React configurada previamente. Si aún no tienes un proyecto, puedes crear uno utilizando `npm create vite` u otra herramienta similar.

### 2. Creación del componente a cargar de manera diferida

En este ejemplo, vamos a crear un componente llamado `MyLazyComponent` que deseamos cargar de manera diferida.

Dentro del directorio de tu proyecto, crea un archivo llamado `MyLazyComponent.js` y define el componente:

```

`// MyLazyComponent.js

import React from 'react';

const MyLazyComponent = () => {
  return (
    <div>
      Contenido del componente cargado de manera diferida.
    </div>
  );
}

export default MyLazyComponent;
```

### 3. Implementación del Code Splitting

Abre el archivo `App.js` (o el archivo principal de tu aplicación) y sigue los siguientes pasos:

```
// App.js

import React, { lazy, Suspense } from 'react';

const MyLazyComponent = lazy(() => import('./MyLazyComponent'));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <MyLazyComponent />
      </Suspense>
    </div>
  );
}

export default App;
```

En este paso, hemos importado el componente `MyLazyComponent` de manera diferida utilizando la función `lazy` y la función de importación dinámica `import()`. También hemos envuelto la carga del componente en un componente `Suspense`, que muestra un componente de carga (`<div>Loading...</div>`) mientras se carga el componente diferido.

### 4. Ejecutar la aplicación

Con los pasos anteriores completados, ahora puedes ejecutar tu aplicación React:
```
npm start
```
Al abrir tu aplicación en el navegador, notarás que el contenido de `MyLazyComponent` se cargará de manera diferida, y mientras se carga, se mostrará el mensaje "Loading...".

## Conclusión

En este tutorial, has aprendido cómo implementar el Code Splitting en una aplicación React utilizando `lazy` y `Suspense`. Esta técnica puede ser especialmente útil para mejorar el rendimiento y la velocidad de carga de tu aplicación, ya que solo se cargan los componentes necesarios cuando se requieren.
