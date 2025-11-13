import { Question } from '../types';

export const quizData: Question[] = [
    // Original 10
  {
    question: "¿Qué versión de `@angular/core` se especifica en `package.json`?",
    options: ["^18.0.0", "~7.8.0", "^8.0.0", "^20.0.0"],
    correctAnswerIndex: 3,
    explanation: "El archivo `package.json` en la sección de `dependencies` define la versión de `@angular/core` como `^20.0.0`, indicando que es compatible con cualquier versión menor dentro de la major version 20.",
    category: "Versiones y Configuración"
  },
  {
    question: "En `auth.service.ts`, ¿cuáles son las credenciales del usuario de prueba para iniciar sesión?",
    options: ["username: 'admin', password: 'password'", "email: 'admin@pasteleria.diego', password: 'admin'", "username: 'admin', password: 'admin'", "email: 'admin', password: '123456'"],
    correctAnswerIndex: 2,
    explanation: "El servicio `src/app/services/auth.service.ts` define una constante privada `TEST_CREDENTIALS` con el `username` 'admin' y la `password` 'admin' para un inicio de sesión de prueba sin usar Firebase.",
    category: "Lógica de Negocio"
  },
  {
    question: "Según `guias/APIs.md`, ¿qué servicio se utiliza para la subida de imágenes desde el panel de administración además de Firebase Storage?",
    options: ["Amazon S3", "Google Drive API", "Capacitor Camera API", "Cloudinary API"],
    correctAnswerIndex: 1,
    explanation: "La guía en `guias/APIs.md` y la implementación en `src/app/services/google-drive.service.ts` confirman el uso de la API de Google Drive para la gestión de imágenes por parte del administrador.",
    category: "Arquitectura"
  },
  {
    question: "¿En qué archivo se definen las rutas principales de la aplicación, como `/login`, `/register` y `/admin`?",
    options: ["src/app/tabs/tabs.routes.ts", "src/main.ts", "angular.json", "src/app/app.routes.ts"],
    correctAnswerIndex: 3,
    explanation: "El archivo `src/app/app.routes.ts` contiene la configuración de las rutas raíz de la aplicación, gestionando la navegación a las páginas principales y protegiéndolas con guards.",
    category: "Estructura de Archivos"
  },
  {
    question: "En `orders.page.ts`, ¿cuánto tiempo tiene un usuario para editar un pedido recién creado antes de que se confirme automáticamente?",
    options: ["30 segundos", "5 minutos", "No hay límite de tiempo", "1 minuto"],
    correctAnswerIndex: 3,
    explanation: "La lógica en `orders.page.ts` inicia un temporizador de 60 segundos (`timeRemaining: number = 60;`) y el método `startConfirmationTimer` en `order.service.ts` confirma el pedido después de 60000 ms (1 minuto).",
    category: "Lógica de UI"
  },
  {
    question: "¿Cuál es el `appId` de la aplicación configurado en `capacitor.config.ts`?",
    options: ["io.ionic.starter", "com.pasteleria.diego", "com.getcapacitor.myapp", "com.pasteleria.diego.app"],
    correctAnswerIndex: 1,
    explanation: "El archivo `capacitor.config.ts` define claramente la propiedad `appId` con el valor 'com.pasteleria.diego', que identifica la aplicación en las tiendas de apps.",
    category: "Versiones y Configuración"
  },
  {
    question: "En `admin.guard.ts`, ¿cuál es el método principal para verificar si un usuario autenticado con Firebase (no demo) es un administrador?",
    options: ["Verificando si su `uid` contiene la palabra 'admin'.", "Verificando si su `email` está en una lista predefinida en `userService`.", "Comprobando un `claim` personalizado de Firebase Auth.", "Consultando una colección 'admins' en Firestore."],
    correctAnswerIndex: 1,
    explanation: "El archivo `src/app/guards/admin.guard.ts` invoca `this.userService.isAdminEmail(currentUser.email)`. Este método, definido en `user.service.ts` y `user.ts`, comprueba el email contra una lista interna de administradores.",
    category: "Lógica de Negocio"
  },
  {
    question: "En `chat.page.html`, ¿qué elemento de Ionic se utiliza para el campo de entrada de texto del chat?",
    options: ["<ion-input>", "<ion-textarea>", "<ion-searchbar>", "<input type=\"text\">"],
    correctAnswerIndex: 1,
    explanation: "La vista del chat en `chat.page.html` utiliza un componente `<ion-textarea>` para permitir la escritura de mensajes, configurado con `autoGrow=\"true\"` para expandirse automáticamente.",
    category: "Componentes y UI"
  },
  {
    question: "¿Qué librería se usa para gestionar el estado de los formularios, según se ve en `login.page.html`?",
    options: ["Reactive Forms (`formControlName`)", "Formik", "Template-driven Forms (`[(ngModel)]`)", "React Hook Form"],
    correctAnswerIndex: 2,
    explanation: "En archivos como `login.page.html` y `register.page.html`, se utiliza la directiva `[(ngModel)]`, que es característica de los formularios \"template-driven\" de Angular para el enlace de datos bidireccional.",
    category: "Dependencias"
  },
  {
    question: "En `product.service.ts`, ¿qué acción se toma si no se encuentran categorías en Firestore al llamar `getCategories()`?",
    options: ["Devuelve un array vacío.", "Lanza un error.", "Inicializa las categorías con valores por defecto y las guarda en Firestore.", "Usa una lista de categorías estática sin guardarla."],
    correctAnswerIndex: 2,
    explanation: "El método `getCategories()` en `src/app/services/product.service.ts` comprueba si la colección de categorías está vacía. Si lo está, llama a `initializeDefaultCategories()` para poblar la base de datos con una lista predefinida.",
    category: "Arquitectura"
  },
    // Nuevas 90 preguntas
  {
    question: "¿Cuál es la versión de Node.js especificada en el archivo `.nvmrc`?",
    options: ["16.14.0", "20.0.0", "18.19.0", "14.17.0"],
    correctAnswerIndex: 2,
    explanation: "El archivo `.nvmrc` contiene la línea `18.19.0`, que le indica a NVM (Node Version Manager) qué versión de Node.js usar para este proyecto, garantizando la consistencia del entorno de desarrollo.",
    category: "Versiones y Configuración"
  },
  {
    question: "En `capacitor.config.ts`, ¿cuál es la duración de la pantalla de bienvenida (`launchShowDuration`)?",
    options: ["3000ms", "1000ms", "2500ms", "2000ms"],
    correctAnswerIndex: 3,
    explanation: "La configuración de Capacitor en `capacitor.config.ts` especifica `launchShowDuration: 2000` dentro del objeto de plugins `SplashScreen`, lo que significa que el splash screen se muestra durante 2 segundos.",
    category: "Versiones y Configuración"
  },
  {
    question: "Según `ionic.config.json`, ¿cuál es el tipo de integración del proyecto?",
    options: ["angular", "react", "vue", "angular-standalone"],
    correctAnswerIndex: 3,
    explanation: "El archivo `ionic.config.json` contiene la propiedad `\"type\": \"angular-standalone\"`, indicando que el proyecto utiliza la arquitectura de componentes Standalone de Angular con Ionic.",
    category: "Versiones y Configuración"
  },
  {
    question: "En `post-install.js`, ¿cuál de las siguientes NO es una dependencia crítica que se verifica?",
    options: ["@capacitor/core", "firebase", "@ionic/storage", "@capacitor/camera"],
    correctAnswerIndex: 2,
    explanation: "El script `post-install.js` define un array `criticalDependencies` que incluye `@capacitor/core`, `firebase` y `@capacitor/camera`, pero no `@ionic/storage`.",
    category: "Estructura de Archivos"
  },
  {
    question: "En `chat.page.ts` (versión original), ¿qué método simula una respuesta automática del administrador?",
    options: ["adminReply()", "getAdminResponse()", "simulateAdminResponse()", "autoRespond()"],
    correctAnswerIndex: 2,
    explanation: "La clase `ChatPage` en `src/app/pages/chat/chat.page.ts` contiene el método `simulateAdminResponse()` que, después de un `setTimeout`, agrega un mensaje de respuesta del administrador a la lista de mensajes.",
    category: "Funciones Críticas"
  },
  {
    question: "¿Qué guard (`guard`) protege la ruta `/admin` según `app.routes.ts`?",
    options: ["AuthGuard", "AdminGuard", "LoginGuard", "RoleGuard"],
    correctAnswerIndex: 1,
    explanation: "En el archivo `src/app/app.routes.ts`, la definición de la ruta `/admin` incluye la propiedad `canActivate: [AdminGuard]`, que utiliza el `AdminGuard` para proteger el acceso a esa ruta.",
    category: "Arquitectura"
  },
  {
    question: "En `cart.page.ts`, ¿cómo se calcula el subtotal SIN IGV en el método `getSubtotalWithoutIGV()`?",
    options: ["`this.cart.subtotal * 0.82`", "`this.cart.subtotal / 1.18`", "`this.cart.subtotal * 0.18`", "`this.cart.subtotal - (this.cart.subtotal * 0.18)`"],
    correctAnswerIndex: 1,
    explanation: "El método `getSubtotalWithoutIGV()` en `src/app/cart/cart.page.ts` calcula el subtotal sin IGV dividiendo el subtotal total (que ya lo incluye) por 1.18, que es la forma correcta de revertir el cálculo del 18% de IGV.",
    category: "Lógica de Negocio"
  },
  {
    question: "¿Cuál es el valor por defecto de la variable `viewMode` en `catalog.page.ts`?",
    options: ["'list'", "'grid'", "'auto'", "'card'"],
    correctAnswerIndex: 1,
    explanation: "En la clase `CatalogPage` (`src/app/catalog/catalog.page.ts`), la propiedad `viewMode` está inicializada con el valor `'grid'`, lo que hace que el catálogo se muestre en formato de cuadrícula por defecto.",
    category: "Lógica de UI"
  },
  {
    question: "En `order.model.ts`, ¿cuál es el `label` de texto para el estado `PENDING_CONFIRMATION`?",
    options: ["'Pendiente'", "'⏳ Pendiente de Confirmación'", "'Esperando Cliente'", "'Confirmar Pedido'"],
    correctAnswerIndex: 1,
    explanation: "El objeto `OrderStatusLabels` en `src/app/models/order.model.ts` mapea los estados a etiquetas legibles, y para `OrderStatus.PENDING_CONFIRMATION` el valor es `'⏳ Pendiente de Confirmación'`.",
    category: "Modelos de Datos"
  },
  {
    question: "En `product.service.ts`, ¿qué método se utiliza para limpiar categorías duplicadas de la base de datos?",
    options: ["`removeDuplicates()`", "`cleanDuplicateCategories()`", "`dedupeCategories()`", "`fixCategories()`"],
    correctAnswerIndex: 1,
    explanation: "El servicio `src/app/services/product.service.ts` incluye un método de utilidad llamado `cleanDuplicateCategories()` diseñado para ser usado una vez y eliminar registros de categorías con nombres repetidos.",
    category: "Funciones Críticas"
  },
  {
    question: "Según `google-drive.service.ts`, ¿qué `scope` de OAuth 2.0 se solicita para la API de Google Drive?",
    options: ["`https://www.googleapis.com/auth/drive`", "`https://www.googleapis.com/auth/drive.readonly`", "`https://www.googleapis.com/auth/drive.file`", "`https://www.googleapis.com/auth/drive.appdata`"],
    correctAnswerIndex: 2,
    explanation: "La variable privada `SCOPES` en `src/app/services/google-drive.service.ts` está definida como `'https://www.googleapis.com/auth/drive.file'`, que otorga permisos para crear y gestionar archivos creados por la propia aplicación.",
    category: "Arquitectura"
  },
  {
    question: "En `guias/funcionalidad.json`, ¿cuál es la descripción del archivo `angular.json`?",
    options: ["Define la estructura de carpetas de la app.", "Configura las dependencias del proyecto.", "Archivo de configuración principal de la CLI de Angular.", "Define las variables de entorno."],
    correctAnswerIndex: 2,
    explanation: "El archivo `guias/funcionalidad.json` describe `angular.json` como el 'Archivo de configuración principal de la CLI de Angular. Define la estructura del proyecto, las opciones de compilación, ejecución de pruebas y otras configuraciones del workspace.'",
    category: "Documentación"
  },
  {
    question: "De acuerdo a `guias/Instalacion.md`, ¿qué comando se usa para iniciar el servidor de desarrollo?",
    options: ["`npm start`", "`ng serve`", "`ionic lab`", "`ionic serve`"],
    correctAnswerIndex: 3,
    explanation: "La guía de instalación en `guias/Instalacion.md` indica que el comando principal para ejecutar la aplicación en el navegador es `ionic serve`.",
    category: "Documentación"
  },
  {
    question: "En `src/theme/variables.scss`, ¿cuál es el código hexadecimal del color primario (`--ion-color-primary`)?",
    options: ["#a0d8b3", "#c4a385", "#ffb38a", "#5d4037"],
    correctAnswerIndex: 2,
    explanation: "El archivo `src/theme/variables.scss` define el tema 'Menta y Melocotón', donde la variable `--ion-color-primary` (Melocotón Suave) tiene el valor `#ffb38a`.",
    category: "Componentes y UI"
  },
  {
    question: "Según `package.json`, ¿qué versión se usa para `@capacitor/core`?",
    options: ["`6.0.0`", "`7.1.0`", "`7.4.3`", "`5.5.0`"],
    correctAnswerIndex: 2,
    explanation: "El archivo `package.json` en la sección de `dependencies` lista a `@capacitor/core` con la versión `7.4.3`.",
    category: "Versiones y Configuración"
  },
  {
    question: "En `user.ts`, ¿cuál de los siguientes NO es un email de administrador predefinido?",
    options: ["`admin@pasteleria-diego.com`", "`diego@pasteleria-diego.com`", "`root@pasteleria-diego.com`", "`administrador@pasteleria-diego.com`"],
    correctAnswerIndex: 2,
    explanation: "La constante `ADMIN_EMAILS` en `src/app/services/user.ts` incluye las otras tres opciones, pero no `root@pasteleria-diego.com`.",
    category: "Lógica de Negocio"
  },
  {
    question: "En `order.service.ts`, ¿cuál es el tiempo de preparación base que se usa en `calculateEstimatedDeliveryTime`?",
    options: ["15 minutos", "20 minutos", "30 minutos", "45 minutos"],
    correctAnswerIndex: 2,
    explanation: "El método `calculateEstimatedDeliveryTime` en `src/app/services/order.service.ts` define una constante `preparationTime = 30;` que se usa como base para el cálculo del tiempo total de entrega.",
    category: "Lógica de Negocio"
  },
  {
    question: "En `register.page.ts`, ¿cuál es la longitud mínima requerida para la contraseña?",
    options: ["8 caracteres", "5 caracteres", "6 caracteres", "10 caracteres"],
    correctAnswerIndex: 2,
    explanation: "Dentro del método `register()` en `src/app/register/register.page.ts`, hay una validación explícita: `if (this.registerForm.password.length < 6)`, que requiere al menos 6 caracteres.",
    category: "Lógica de UI"
  },
  {
    question: "Según `auth.service.ts`, ¿qué mensaje de error en español se asocia con el código `auth/wrong-password`?",
    options: ["Usuario no encontrado", "Contraseña incorrecta", "Email ya en uso", "Contraseña débil"],
    correctAnswerIndex: 1,
    explanation: "El método privado `getErrorMessage` en `src/app/services/auth.service.ts` mapea los códigos de error de Firebase a mensajes en español. Para `auth/wrong-password` corresponde 'Contraseña incorrecta'.",
    category: "Funciones Críticas"
  },
  {
    question: "En `tsconfig.json`, ¿cuál es el `target` de compilación de TypeScript?",
    options: ["`es2020`", "`esnext`", "`es2018`", "`es2022`"],
    correctAnswerIndex: 3,
    explanation: "El archivo `tsconfig.json` especifica en `compilerOptions` la propiedad `\"target\": \"es2022\"`, indicando que el código TypeScript se compilará a la especificación de ECMAScript 2022.",
    category: "Versiones y Configuración"
  },
  {
    question: "¿Qué archivo contiene la lógica para registrar los íconos de `ionicons` que se usan en la app?",
    options: ["`src/app/app.component.ts`", "`src/main.ts`", "`src/app/icons.ts`", "`angular.json`"],
    correctAnswerIndex: 2,
    explanation: "El archivo `src/app/icons.ts` centraliza el registro de todos los íconos de Ionicons mediante la función `addIcons`, que luego es llamada desde `main.ts`.",
    category: "Estructura de Archivos"
  },
  {
    question: "En `chat.service.ts`, ¿cómo se ordenan los mensajes cuando se cargan de una conversación?",
    options: ["Por `timestamp` descendente", "Por `timestamp` ascendente", "Alfabéticamente por mensaje", "No se ordenan"],
    correctAnswerIndex: 1,
    explanation: "El método `loadMessages` en `src/app/services/chat.service.ts` crea una consulta a Firestore con `orderBy('timestamp', 'asc')` para asegurar que los mensajes se recuperen en el orden cronológico en que fueron enviados.",
    category: "Lógica de Negocio"
  },
  {
    question: "En el archivo `.editorconfig`, ¿cuál es el estilo de indentación (`indent_style`) definido?",
    options: ["`tab`", "`space`", "`mixed`", "No está definido"],
    correctAnswerIndex: 1,
    explanation: "El archivo `.editorconfig` define `indent_style = space` y `indent_size = 2` para mantener un estilo de codificación consistente en todo el proyecto.",
    category: "Versiones y Configuración"
  },
  {
    question: "En `forgot-password.page.html`, ¿qué propiedad de `ion-button` se usa para deshabilitar el botón de envío si el email no es válido?",
    options: ["`disabled`", "`[disabled]`", "`[enabled]`", "`[invalid]`"],
    correctAnswerIndex: 1,
    explanation: "El botón de envío en `src/app/forgot-password/forgot-password.page.html` utiliza el enlace de propiedad `[disabled]=\"!isEmailValid()\"` para deshabilitarse dinámicamente si la función `isEmailValid()` devuelve `false`.",
    category: "Componentes y UI"
  },
  {
    question: "En `cart.service.ts`, si un usuario no está autenticado, ¿dónde se guarda el carrito?",
    options: ["En una cookie", "En Firestore en una colección 'guests'", "En `localStorage`", "No se guarda"],
    correctAnswerIndex: 2,
    explanation: "La lógica de `saveCartToUser` y `loadCartFromStorage` en `src/app/services/cart.service.ts` indica que si no hay un usuario de Firebase, el carrito se persiste en `localStorage` usando la clave `bakery_cart`.",
    category: "Arquitectura"
  },
  {
    question: "En `guias/PreguntasFrecuentes.md`, ¿qué comando se menciona para sincronizar la carpeta `www/` con las plataformas nativas?",
    options: ["`ionic build`", "`npx cap copy`", "`npx cap sync`", "`ionic deploy`"],
    correctAnswerIndex: 2,
    explanation: "La sección de Capacitor en `guias/PreguntasFrecuentes.md` menciona `npx cap sync` como el comando clave para sincronizar los assets compilados de la web con los proyectos nativos de Android e iOS.",
    category: "Documentación"
  },
  {
    question: "En `login.page.ts`, ¿qué servicio se utiliza para actualizar la fecha del último inicio de sesión del usuario?",
    options: ["`AuthService`", "`SessionService`", "`FirestoreService`", "`UserService`"],
    correctAnswerIndex: 3,
    explanation: "Dentro del método `login()` en `src/app/login/login.page.ts`, después de una autenticación exitosa, se llama a `this.userService.updateLastLogin(result.user.uid)` para registrar la actividad.",
    category: "Funciones Críticas"
  },
  {
    question: "En el archivo `.eslintrc.json`, ¿qué prefijo se exige para los selectores de componentes?",
    options: ["`ion-`", "`dd-` (D'Diego)", "`app-`", "No se exige prefijo"],
    correctAnswerIndex: 2,
    explanation: "La configuración de ESLint en `.eslintrc.json` define la regla `@angular-eslint/component-selector` con `\"prefix\": \"app\"`, forzando a que todos los componentes personalizados empiecen con `<app-...>`.",
    category: "Versiones y Configuración"
  },
  {
    question: "En `product.model.ts`, además de 'firebase' y 'drive', ¿qué otro `imageSource` es posible para un producto?",
    options: ["'local'", "'url'", "'aws'", "'capacitor'"],
    correctAnswerIndex: 1,
    explanation: "La interfaz `Product` en `src/app/models/product.model.ts` define la propiedad `imageSource` como un tipo literal que puede ser `'firebase' | 'drive' | 'url'`, permitiendo imágenes de URLs externas.",
    category: "Modelos de Datos"
  },
  {
    question: "En `tabs.page.html`, ¿qué ícono se usa para la pestaña de 'Catálogo'?",
    options: ["`book`", "`grid`", "`storefront`", "`list`"],
    correctAnswerIndex: 2,
    explanation: "El `ion-tab-button` para la pestaña 'catalog' en `src/app/tabs/tabs.page.html` especifica `name=\"storefront\"` para su `ion-icon`.",
    category: "Componentes y UI"
  },
  {
    question: "En `favorites.service.ts`, ¿qué método se utiliza para agregar o quitar un producto de favoritos con una sola llamada?",
    options: ["`updateFavorite()`", "`toggleFavorite()`", "`switchFavorite()`", "`setFavorite()`"],
    correctAnswerIndex: 1,
    explanation: "El servicio `src/app/services/favorites.service.ts` expone el método `toggleFavorite(product)` que internamente comprueba si el producto ya es favorito para llamar a `addToFavorites` o `removeFromFavorites` según corresponda.",
    category: "Funciones Críticas"
  },
  {
    question: "En `profile.page.ts`, ¿qué método se usa para obtener las iniciales de un usuario a partir de su nombre?",
    options: ["`getInitials()`", "`createInitials()`", "`formatInitials()`", "`parseInitials()`"],
    correctAnswerIndex: 0,
    explanation: "La clase `ProfilePage` en `src/app/profile/profile.page.ts` tiene un método `getInitials(name: string)` que divide el nombre por espacios, toma la primera letra de cada parte y las une.",
    category: "Lógica de UI"
  },
  {
    question: "En `android/app/src/main/AndroidManifest.xml`, ¿qué permiso NO se solicita explícitamente?",
    options: ["`android.permission.INTERNET`", "`android.permission.CAMERA`", "`android.permission.ACCESS_FINE_LOCATION`", "`android.permission.WRITE_EXTERNAL_STORAGE`"],
    correctAnswerIndex: 2,
    explanation: "El archivo `AndroidManifest.xml` solicita permisos para `INTERNET`, `CAMERA`, y almacenamiento (`READ/WRITE_EXTERNAL_STORAGE`), pero no solicita permisos de geolocalización como `ACCESS_FINE_LOCATION`.",
    category: "Estructura de Archivos"
  },
  {
    question: "En `photo.service.ts`, ¿qué calidad de imagen (`quality`) se usa por defecto al llamar a `Camera.getPhoto`?",
    options: ["90", "100", "70", "85"],
    correctAnswerIndex: 2,
    explanation: "El método `takePhoto` en `src/app/services/photo.ts` utiliza `quality: options.quality || 70`, estableciendo un 70% de calidad si no se especifica otro valor, para optimizar el tamaño de la imagen.",
    category: "Lógica de Negocio"
  },
  {
    question: "¿Qué archivo define el color de fondo y el estilo de la barra de estado nativa en Android/iOS?",
    options: ["`src/theme/variables.scss`", "`angular.json`", "`capacitor.config.ts`", "`index.html`"],
    correctAnswerIndex: 2,
    explanation: "El archivo `capacitor.config.ts` contiene la configuración del plugin `StatusBar`, donde se definen `style: \"light\"` y `backgroundColor: \"#ff6b9d\"`, controlando la apariencia de la barra de estado nativa.",
    category: "Versiones y Configuración"
  },
  {
    question: "En `order.service.ts`, ¿cuál es el primer estado que se asigna a un pedido recién creado?",
    options: ["`CONFIRMED`", "`PREPARING`", "`PENDING_CONFIRMATION`", "`PENDING_PAYMENT`"],
    correctAnswerIndex: 2,
    explanation: "Al crear un nuevo pedido en `createOrderFromCart`, el estado inicial se establece en `status: OrderStatus.PENDING_CONFIRMATION`, iniciando el temporizador de 1 minuto para edición.",
    category: "Lógica de Negocio"
  },
  {
    question: "En `user.ts`, ¿qué propiedad de `UserProfile` almacena el carrito del usuario?",
    options: ["`cartItems`", "`shoppingCart`", "`cart`", "`userCart`"],
    correctAnswerIndex: 2,
    explanation: "La interfaz `UserProfile` en `src/app/models/user.model.ts` (referenciado por `user.ts`) define una propiedad opcional `cart?: UserCart` para persistir el carrito del usuario en su perfil de Firestore.",
    category: "Modelos de Datos"
  },
  {
    question: "En `src/theme/pastry-animations.scss`, ¿cómo se llama la animación que hace que un elemento se mueva de abajo hacia arriba con un fade-in?",
    options: ["`slideIn`", "`fadeInUp`", "`floatUp`", "`appearFromBottom`"],
    correctAnswerIndex: 1,
    explanation: "El archivo `src/theme/pastry-animations.scss` define un `@keyframes` llamado `fadeInUp` que anima la opacidad de 0 a 1 y la posición Y de 30px a 0.",
    category: "Componentes y UI"
  },
  {
    question: "En `admin.page.html`, ¿qué ícono se usa para el botón que abre el formulario de nuevo producto?",
    options: ["`add-circle`", "`create`", "`add`", "`add-outline`"],
    correctAnswerIndex: 2,
    explanation: "Tanto en el `ion-fab-button` como en el botón del `ion-toolbar` en `src/app/admin/admin.page.html`, se utiliza `<ion-icon name=\"add\"></ion-icon>` para la acción de agregar un producto.",
    category: "Componentes y UI"
  },
  {
    question: "¿Cuál es el propósito del script `post-install.js`?",
    options: ["Compilar la aplicación para producción.", "Verificar que las dependencias críticas estén instaladas correctamente.", "Limpiar la caché de npm.", "Sincronizar el proyecto con Capacitor."],
    correctAnswerIndex: 1,
    explanation: "El script `post-install.js` se ejecuta después de `npm install` y su código verifica la existencia de dependencias críticas como `@capacitor/core` y `firebase`, intentando instalarlas si faltan.",
    category: "Estructura de Archivos"
  },
  {
    question: "En `cart.page.ts`, ¿qué componente de Ionic se usa para mostrar un mensaje emergente de confirmación o error?",
    options: ["`AlertController`", "`ModalController`", "`PopoverController`", "`ToastController`"],
    correctAnswerIndex: 3,
    explanation: "La clase `CartPage` utiliza `ToastController` para mostrar mensajes cortos y no intrusivos en la parte superior de la pantalla, como se ve en el método `showToast()`.",
    category: "Lógica de UI"
  },
  {
    question: "En `main.ts`, ¿qué estrategia de precarga de módulos se utiliza para el enrutador de Angular?",
    options: ["`NoPreloading`", "`PreloadAllModules`", "`PreloadSelectedModules`", "`CustomPreloadingStrategy`"],
    correctAnswerIndex: 1,
    explanation: "Al configurar el enrutador en `src/main.ts` con `provideRouter`, se utiliza `withPreloading(PreloadAllModules)`, lo que le indica a Angular que cargue todos los módulos de carga diferida en segundo plano después de que la app se inicie.",
    category: "Arquitectura"
  },
  {
    question: "En `catalog.page.html`, ¿qué directiva de Angular se usa para cambiar entre la vista de `grid` y `list`?",
    options: ["`*ngSwitch`", "`[hidden]`", "`*ngIf`", "`[ngClass]`"],
    correctAnswerIndex: 2,
    explanation: "La plantilla `src/app/catalog/catalog.page.html` utiliza `*ngIf=\"!isLoading && viewMode === 'grid'\"` y `*ngIf=\"!isLoading && viewMode === 'list'\"` para renderizar condicionalmente una u otra estructura de vista.",
    category: "Componentes y UI"
  },
  {
    question: "En `product.service.ts`, en el modo DEBUG, ¿qué estrategia se prefiere si tanto la query de Firestore como el filtrado manual devuelven resultados?",
    options: ["Filtrado manual", "Se combinan ambos resultados", "La que devuelva más productos", "Query de Firestore"],
    correctAnswerIndex: 3,
    explanation: "La lógica de `getAvailableProducts` en modo DEBUG (con logs) indica: `if (firestoreProducts.length > 0) { console.log('✅ Usando resultados de Firestore query'); finalProducts = firestoreProducts; }`, dando prioridad a la consulta nativa de Firestore.",
    category: "Funciones Críticas"
  },
  {
    question: "En `src/app/models/user.model.ts`, ¿cuál de los siguientes es un rol de usuario (`UserRole`) válido?",
    options: ["`GUEST`", "`EDITOR`", "`SUPER_ADMIN`", "`VIEWER`"],
    correctAnswerIndex: 2,
    explanation: "El `enum UserRole` en `src/app/models/user.model.ts` define los roles `USER`, `ADMIN`, y `SUPER_ADMIN`.",
    category: "Modelos de Datos"
  },
  {
    question: "En `google-drive.service.ts`, ¿qué método se utiliza para transformar una imagen a formato WebP?",
    options: ["`optimizeImage()`", "`formatToWebP()`", "`convertToWebP()`", "`compressImage()`"],
    correctAnswerIndex: 2,
    explanation: "El servicio `google-drive.service.ts` tiene un método privado `convertToWebP` que utiliza un canvas HTML para dibujar la imagen y exportarla como un data URL en formato `image/webp`.",
    category: "Funciones Críticas"
  },
  {
    question: "En `tabs.page.scss`, ¿qué animación se aplica al badge del carrito cuando aparece?",
    options: ["`fadeIn`", "`slideIn`", "`bounceIn`", "`pulse`"],
    correctAnswerIndex: 2,
    explanation: "El archivo `src/app/tabs/tabs.page.scss` define una animación `@keyframes bounceIn` y la aplica a la clase `.cart-badge` para darle un efecto de rebote al aparecer.",
    category: "Componentes y UI"
  },
  {
    question: "En `order.service.ts`, al crear un pedido, ¿de dónde se obtiene el número de teléfono del cliente prioritariamente?",
    options: ["Del perfil del usuario en Firestore", "Del objeto `cart`", "De un parámetro opcional `customerPhone`", "Del objeto `Auth` de Firebase"],
    correctAnswerIndex: 2,
    explanation: "El método `createOrderFromCart` en `order.service.ts` acepta un parámetro opcional `customerPhone`. La lógica en `cart.page.ts` muestra que si el usuario no tiene teléfono guardado, se le pide y se pasa a través de este parámetro.",
    category: "Lógica de Negocio"
  },
  {
    question: "¿Qué comando de `npm` se ejecutaría al correr `npm start`?",
    options: ["`ng serve`", "`ionic serve`", "`npm run build`", "`node index.js`"],
    correctAnswerIndex: 1,
    explanation: "El archivo `package.json` en la sección `scripts` define `\"start\": \"ionic serve\"`, por lo que `npm start` es un atajo para `ionic serve`.",
    category: "Versiones y Configuración"
  },
  {
    question: "En `register.page.ts`, ¿qué servicio se utiliza para subir la foto de perfil seleccionada por el usuario?",
    options: ["`UserService`", "`AuthService`", "`FirestoreService`", "`PhotoService`"],
    correctAnswerIndex: 3,
    explanation: "Aunque `AuthService` y `UserService` se usan para crear la cuenta y el perfil, la lógica de capturar la foto con Capacitor y subirla a Firebase Storage está encapsulada en `PhotoService`, como se ve en el método `takePhoto` de `register.page.ts`.",
    category: "Arquitectura"
  },
  {
    question: "En `guias/APIs.md`, ¿qué plugins de Capacitor se mencionan como detectados en el proyecto?",
    options: ["`@capacitor/geolocation`", "`@capacitor/push-notifications`", "`@capacitor/camera`", "`@capacitor/splash-screen`"],
    correctAnswerIndex: 2,
    explanation: "La sección de Capacitor en `guias/APIs.md` lista los plugins detectados, incluyendo `@capacitor/camera`, `@capacitor/filesystem`, `@capacitor/app`, entre otros.",
    category: "Documentación"
  },
  {
    question: "En `chat.service.ts`, al enviar un mensaje, ¿qué campo se actualiza en el documento de la conversación además del último mensaje y la fecha?",
    options: ["`totalMessages`", "`is_active`", "El contador `unreadCount` del destinatario", "`participants`"],
    correctAnswerIndex: 2,
    explanation: "El método `sendMessage` en `chat.service.ts`, después de guardar el nuevo mensaje, actualiza el documento de la conversación incrementando `unreadCountUser` o `unreadCountAdmin` dependiendo de quién es el emisor.",
    category: "Lógica de Negocio"
  },
  {
    question: "¿Cuál es el propósito del archivo `.browserslistrc`?",
    options: ["Listar los navegadores instalados en el sistema.", "Definir los navegadores compatibles para la transpilación de JS y CSS.", "Configurar las pruebas de compatibilidad en navegadores.", "Especificar el navegador por defecto para `ionic serve`."],
    correctAnswerIndex: 1,
    explanation: "El archivo `.browserslistrc` permite especificar qué navegadores y versiones debe soportar la aplicación. Herramientas como Autoprefixer (para CSS) y Babel (para JS) usan esta lista para generar código compatible.",
    category: "Estructura de Archivos"
  },
  {
    question: "En `order.model.ts`, ¿cuál es el color de Ionic asociado al estado `PREPARING`?",
    options: ["`success`", "`secondary`", "`primary`", "`warning`"],
    correctAnswerIndex: 2,
    explanation: "El objeto `OrderStatusColors` en `src/app/models/order.model.ts` mapea los estados a colores de Ionic. Para `OrderStatus.PREPARING`, el color es `'primary'`.",
    category: "Modelos de Datos"
  },
  {
    question: "En `google-drive.service.ts`, ¿qué ocurre si la carpeta `ProyectoApps_Products` no existe al intentar subir un archivo?",
    options: ["La subida falla con un error.", "Se sube el archivo a la carpeta raíz.", "Se crea la carpeta automáticamente.", "Se le pide al usuario que cree la carpeta."],
    correctAnswerIndex: 2,
    explanation: "El método `ensureProductsFolder` en `google-drive.service.ts` primero busca la carpeta. Si no la encuentra, procede a crearla usando la API de Google Drive, asegurando que siempre exista antes de una subida.",
    category: "Funciones Críticas"
  },
  {
    question: "En `product.service.ts`, ¿qué método de Firestore se usa para crear un nuevo producto con un ID autogenerado?",
    options: ["`setDoc`", "`updateDoc`", "`addDoc`", "`createDoc`"],
    correctAnswerIndex: 0,
    explanation: "Aunque `addDoc` también crea documentos, el código en `createProduct` utiliza `const productDoc = doc(productsRef);` para generar una referencia con ID primero, y luego `setDoc(productDoc, ...)` para guardar los datos. `addDoc` es usado en otros servicios.",
    category: "Arquitectura"
  },
  {
    question: "En `theme/pastry-backgrounds.scss`, ¿qué se utiliza para crear la animación de brillo en los encabezados?",
    options: ["Un `box-shadow` animado.", "Un pseudoelemento `::before` con un gradiente animado.", "Una imagen de fondo que se mueve.", "Una animación de `filter: brightness`."],
    correctAnswerIndex: 1,
    explanation: "El archivo `src/theme/pastry-backgrounds.scss` define una regla para `ion-header::before` que crea un pseudoelemento con un gradiente lineal. La animación `@keyframes shimmer` mueve la posición de este gradiente de izquierda a derecha, creando un efecto de brillo.",
    category: "Componentes y UI"
  },
  {
    question: "En `auth.guard.ts`, si `isLoggedIn()` devuelve `false`, ¿a qué ruta se redirige al usuario?",
    options: ["`/`", "`/home`", "`/login`", "`/error`"],
    correctAnswerIndex: 2,
    explanation: "El `AuthGuard` en `src/app/guards/auth.guard.ts` comprueba si el usuario está autenticado. Si no, ejecuta `this.router.navigate(['/login']);` para forzar el inicio de sesión.",
    category: "Arquitectura"
  },
  {
    question: "En `package.json`, ¿qué script se define para el comando `lint`?",
    options: ["`eslint .`", "`ng lint`", `"eslint src --ext .ts"`],
    correctAnswerIndex: 1,
    explanation: "El archivo `package.json` tiene un script `\"lint\": \"ng lint\"`, que utiliza la integración de linting de Angular CLI para analizar el código.",
    category: "Versiones y Configuración"
  },
  {
    question: "En `ingredients-allergens.service.ts`, ¿qué se hace si el documento 'main' no existe en la colección?",
    options: ["Se lanza un error.", "Se devuelve un objeto vacío.", "Se crea un nuevo documento con una lista de ingredientes y alérgenos por defecto.", "Se intenta leer de un archivo de respaldo local."],
    correctAnswerIndex: 2,
    explanation: "El método `getAll()` en `ingredients-allergens.service.ts` comprueba si el documento `main` existe. Si no, crea y guarda una lista predefinida de ingredientes y alérgenos comunes para inicializar el sistema.",
    category: "Lógica de Negocio"
  },
  {
    question: "En `product-details-modal.component.ts`, ¿qué servicio NO se inyecta en el constructor?",
    options: ["`ModalController`", "`CartService`", "`ProductService`", "`FavoritesService`"],
    correctAnswerIndex: 2,
    explanation: "El constructor de `ProductDetailsModalComponent` inyecta `ModalController`, `FavoritesService`, `CartService`, y `AuthService`, pero no `ProductService`, ya que recibe el objeto `product` completo como una propiedad de entrada (`@Input`).",
    category: "Dependencias"
  },
  {
    question: "En `profile.page.scss` (original), ¿qué técnica se usa para superponer el ícono de la cámara sobre el avatar?",
    options: ["Usando `z-index` en un `ion-grid`.", "Posicionamiento absoluto (`position: absolute`) dentro de un contenedor relativo.", "Usando `transform: translate()`.", "Como un `background-image` del avatar."],
    correctAnswerIndex: 1,
    explanation: "El archivo `profile.page.scss` define `.avatar-container` con `position: relative` y `.camera-overlay` con `position: absolute`, lo que permite posicionar el ícono de la cámara exactamente donde se necesita sobre el avatar.",
    category: "Componentes y UI"
  },
  {
    question: "En `cart.page.html`, ¿qué ícono se muestra en el botón de decrementar cantidad si la cantidad del producto es 1?",
    options: ["`remove-circle`", "`remove`", "`trash`", "`remove-circle-outline`"],
    correctAnswerIndex: 2,
    explanation: "El botón de decrementar cantidad usa un enlace de propiedad: `<ion-icon [name]=\"item.quantity <= 1 ? 'trash' : 'remove'\"></ion-icon>`. Esto cambia el ícono a una papelera ('trash') cuando la cantidad es 1, indicando que la siguiente acción eliminará el producto.",
    category: "Lógica de UI"
  },
  {
    question: "Según `main.ts`, ¿qué clase se usa como `RouteReuseStrategy`?",
    options: ["`DefaultRouteReuseStrategy`", "`CustomRouteReuseStrategy`", "`IonicRouteStrategy`", "`NoRouteReuseStrategy`"],
    correctAnswerIndex: 2,
    explanation: "Al arrancar la aplicación en `main.ts`, se provee `{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }`, que es la estrategia de reutilización de rutas de Ionic para mantener el estado de las páginas en la navegación de pestañas.",
    category: "Arquitectura"
  },
  {
    question: "En `tab1.page.ts` (página de inicio), ¿qué método del ciclo de vida de Ionic se usa para recargar los productos destacados cada vez que se muestra la página?",
    options: ["`ngOnInit`", "`ionViewDidEnter`", "`ionViewWillEnter`", "`constructor`"],
    correctAnswerIndex: 2,
    explanation: "La clase `Tab1Page` implementa la interfaz `ViewWillEnter` y usa el método `ionViewWillEnter()` para llamar a `loadFeaturedProducts()`. Esto asegura que los datos se actualicen cada vez que el usuario navega a la pestaña de inicio.",
    category: "Funciones Críticas"
  },
  {
    question: "En `admin.page.scss`, ¿qué propiedad de CSS se usa para crear la disposición de tarjetas de productos en múltiples columnas?",
    options: ["`display: flex` con `flex-wrap: wrap`", "`display: grid`", "`display: block` con `float: left`", "`column-count`"],
    correctAnswerIndex: 1,
    explanation: "La clase `.products-grid` en `src/app/admin/admin.page.scss` utiliza `display: grid` y `grid-template-columns: repeat(auto-fill, minmax(350px, 1fr))` para crear un layout de cuadrícula responsivo.",
    category: "Componentes y UI"
  },
  {
    question: "En `user.service.ts` (original), ¿cómo se determina si un UID corresponde a un admin?",
    options: ["Consultando un campo 'isAdmin' en Firestore", "Verificando si el UID contiene palabras clave como 'admin'", "Comparando el UID con una lista de UIDs de administradores", "El servicio original no implementa esta lógica"],
    correctAnswerIndex: 1,
    explanation: "El método `checkAdminByUid` en la versión original de `user.service.ts` usa una lógica de demostración: `const isAdminUID = adminKeywords.some(keyword => uid.toLowerCase().includes(keyword));`, que no es segura para producción pero está presente en el código.",
    category: "Lógica de Negocio"
  },
  {
    question: "En `chat.page.html` (original), ¿cuál es el texto del `ion-title`?",
    options: ["'Chat'", "'Pastelería D'Diego'", "'Soporte'", "'Mensajes'"],
    correctAnswerIndex: 1,
    explanation: "El archivo `chat.page.html` original contiene un `ion-title` complejo con el nombre de la pastelería y un indicador de estado 'En línea'.",
    category: "Componentes y UI"
  },
  {
    question: "En `firestore.service.ts`, el método `queryDocuments` permite filtrar, ¿qué otra operación permite encadenar?",
    options: ["Agrupar (`groupBy`)", "Unir (`join`)", "Ordenar (`orderBy`) y Limitar (`limit`)", "Contar (`count`)"],
    correctAnswerIndex: 2,
    explanation: "La firma y la implementación del método `queryDocuments` en `firestore.service.ts` aceptan parámetros opcionales `orderByField` y `limitCount` para añadir cláusulas `orderBy` y `limit` a la consulta de Firestore.",
    category: "Funciones Críticas"
  },
  {
    question: "En `tabs.routes.ts`, ¿qué ruta se carga para el `path: 'conversation'`?",
    options: ["`ChatPage`", "`ConversationPage`", "`MessagesPage`", "`OrderDetailPage`"],
    correctAnswerIndex: 1,
    explanation: "El archivo `src/app/tabs/tabs.routes.ts` define una ruta hija con `path: 'conversation'` que carga de forma perezosa (`loadComponent`) el componente `ConversationPage` desde `../chat/conversation.page`.",
    category: "Estructura de Archivos"
  },
  {
    question: "¿En qué archivo se encuentra la configuración del `projectId` de Firebase?",
    options: ["`firebase.json`", "`angular.json`", "`src/environments/environment.ts`", "`main.ts`"],
    correctAnswerIndex: 2,
    explanation: "Las credenciales y configuración del proyecto de Firebase, incluyendo el `projectId: \"pasteleria-d-diego\"`, se encuentran en el objeto `firebaseConfig` dentro de `src/environments/environment.ts` y `environment.prod.ts`.",
    category: "Versiones y Configuración"
  },
  {
    question: "En `order-detail-modal.component.html`, ¿qué se muestra si un producto del pedido no tiene imagen (`productImage`)?",
    options: ["Un ícono de producto", "No se muestra ninguna imagen", "Una imagen placeholder", "El `alt` text se muestra como texto plano"],
    correctAnswerIndex: 1,
    explanation: "La plantilla del modal de detalle de pedido usa `*ngIf=\"item.productImage\"` en el `ion-img`. Si `item.productImage` es nulo o undefined, el elemento `ion-img` no se renderiza en el DOM, por lo que no se muestra nada en su lugar.",
    category: "Lógica de UI"
  },
  {
    question: "En `register.page.ts`, si un usuario intenta registrar un email que ya existe en Firestore (verificado por `userService.emailExists`), ¿qué sucede?",
    options: ["El registro falla con un error genérico.", "Se muestra un mensaje de advertencia y se redirige al login.", "Se permite el registro pero se pide cambiar el email.", "Se sobreescribe la cuenta existente."],
    correctAnswerIndex: 1,
    explanation: "El método `register()` primero llama a `this.userService.emailExists()`. Si devuelve `true`, muestra un toast con el mensaje 'Este correo ya tiene una cuenta. ¿Deseas iniciar sesión?' y luego llama a `goToLogin()`.",
    category: "Lógica de Negocio"
  },
  {
    question: "En `photo.service.ts`, ¿qué API de Capacitor se utiliza para acceder a la cámara y la galería?",
    options: ["`@capacitor/filesystem`", "`@capacitor/camera`", "`@capacitor/media`", "`@capacitor/device`"],
    correctAnswerIndex: 1,
    explanation: "El servicio `PhotoService` importa `Camera`, `CameraResultType`, y `CameraSource` desde `@capacitor/camera` para implementar la funcionalidad de captura y selección de fotos.",
    category: "Dependencias"
  },
  {
    question: "En `admin.page.html`, el `ion-searchbar` tiene un atributo `debounce`. ¿Cuál es su valor?",
    options: ["`500`", "`250`", "`300`", "`100`"],
    correctAnswerIndex: 2,
    explanation: "El componente `ion-searchbar` en `src/app/admin/admin.page.html` está configurado con `debounce=\"300\"`, lo que significa que el evento `ionInput` se emitirá solo después de que el usuario haya dejado de escribir por 300 milisegundos.",
    category: "Componentes y UI"
  },
  {
    question: "¿Cuál es la versión de TypeScript especificada en `package.json`?",
    options: ["`~4.9.0`", "`~5.4.0`", "`~5.8.0`", "`^5.8.0`"],
    correctAnswerIndex: 2,
    explanation: "En la sección `devDependencies` de `package.json`, la dependencia `typescript` está listada con la versión `~5.8.0`, que permite actualizaciones de parches dentro de la versión menor 5.8.",
    category: "Versiones y Configuración"
  },
  {
    question: "En `cart.page.ts`, si `decreaseQuantity` se llama en un item con cantidad 1, ¿qué método se invoca a continuación?",
    options: ["`updateItemQuantity(item.id, 0)`", "`clearCart()`", "`removeItem(item)`", "No hace nada"],
    correctAnswerIndex: 2,
    explanation: "La lógica de `decreaseQuantity` comprueba `if (item.quantity > 1)`. Si la condición es falsa (la cantidad es 1), entra en el `else` y llama a `await this.removeItem(item)` para eliminar el producto del carrito.",
    category: "Lógica de Negocio"
  },
  {
    question: "En `catalog.page.ts`, ¿qué servicio se utiliza para comprobar si un producto está en el carrito?",
    options: ["`ProductService`", "`FavoritesService`", "`CartService`", "`UserService`"],
    correctAnswerIndex: 2,
    explanation: "El componente `CatalogPage` inyecta y utiliza `CartService` a través de los métodos `isInCart(productId)` y `getCartQuantity(productId)` para actualizar dinámicamente el estado de los botones 'Agregar'.",
    category: "Arquitectura"
  },
  {
    question: "En `conversation.page.ts`, ¿qué se hace en el `ngOnDestroy` del componente?",
    options: ["Se guarda el último mensaje en `localStorage`.", "Se cierra la sesión del usuario.", "Se desuscribe de los observables de mensajes y rutas.", "Se marca la conversación como archivada."],
    correctAnswerIndex: 2,
    explanation: "El método `ngOnDestroy` de `ConversationPage` llama a `this.messagesSubscription.unsubscribe()`, `this.routeParamsSubscription.unsubscribe()`, y `this.chatService.unsubscribe()` para limpiar los listeners y prevenir fugas de memoria.",
    category: "Funciones Críticas"
  },
  {
    question: "En `global.scss`, ¿qué fuentes de Google Fonts se importan?",
    options: ["'Roboto' y 'Open Sans'", "'Lato' y 'Montserrat'", "'Dancing Script' y 'Playfair Display'", "'Poppins' y 'Oswald'"],
    correctAnswerIndex: 2,
    explanation: "El archivo `src/global.scss` contiene una línea `@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Playfair+Display:wght@700&display=swap');` para las fuentes de la marca.",
    category: "Componentes y UI"
  },
  {
    question: "En `auth.service.ts`, ¿qué clave se usa en `localStorage` para guardar si un usuario ha iniciado sesión?",
    options: ["`'is_logged_in'`", "`'session_active'`", "`'isLoggedIn'`", "`'user_token'`"],
    correctAnswerIndex: 2,
    explanation: "Los métodos `login` y `logout` en `AuthService` utilizan `localStorage.setItem('isLoggedIn', 'true')` y `localStorage.removeItem('isLoggedIn')` para gestionar un indicador simple del estado de la sesión.",
    category: "Lógica de Negocio"
  },
  {
    question: "En `order.service.ts`, ¿qué método de `Date` se usa para ordenar los pedidos?",
    options: ["`getTime()`", "`valueOf()`", "`toISOString()`", "`getTimezoneOffset()`"],
    correctAnswerIndex: 0,
    explanation: "Dentro de los listeners `onSnapshot`, los pedidos se ordenan con `orders.sort((a, b) => (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0));`. El método `getTime()` devuelve el valor numérico de la fecha en milisegundos, ideal para comparaciones.",
    category: "Lógica de Negocio"
  },
  {
    question: "En `google-drive.service.ts`, ¿qué se usa como fallback si falla la creación de la URL con `lh3.googleusercontent.com`?",
    options: ["Se lanza un error.", "Se devuelve la `webViewLink` original.", "Se construye una URL con el formato `drive.google.com/uc?export=view&id=...`.", "Se intenta obtener un nuevo `accessToken`."],
    correctAnswerIndex: 2,
    explanation: "Dentro del callback del `Picker`, hay un bloque `catch` que, en caso de error al hacer el archivo público, construye un enlace de fallback: `const directLink = \`https://drive.google.com/uc?export=view&id=\${file.id}\`;`.",
    category: "Funciones Críticas"
  },
  {
    question: "En `admin.page.html`, el `ion-modal` para el formulario de producto se abre cuando la variable `showProductForm` es `true`. ¿Cómo se enlaza esta variable?",
    options: ["`[hidden]=\"!showProductForm\"`", "`[(ngModel)]=\"showProductForm\"`", "`*ngIf=\"showProductForm\"`", "`[isOpen]=\"showProductForm\"`"],
    correctAnswerIndex: 3,
    explanation: "El componente `ion-modal` de Ionic utiliza la propiedad `[isOpen]` para controlar su visibilidad. En `admin.page.html`, está enlazada a la variable `showProductForm` del componente.",
    category: "Componentes y UI"
  },
  {
    question: "En `profile.page.ts`, ¿qué servicio se inyecta para manejar la captura de fotos?",
    options: ["`CameraService`", "`ImageService`", "`MediaService`", "`PhotoService`"],
    correctAnswerIndex: 3,
    explanation: "La clase `ProfilePage` inyecta `PhotoService` en su constructor, que encapsula la lógica de interacción con el plugin de Capacitor Camera para tomar fotos o seleccionarlas de la galería.",
    category: "Dependencias"
  },
  {
    question: "En `package.json`, ¿cuál es la versión de `@ionic/angular`?",
    options: ["`^7.0.0`", "`^8.0.0`", "`^6.0.0`", "`~8.1.0`"],
    correctAnswerIndex: 1,
    explanation: "La sección de `dependencies` en `package.json` especifica `\"@ionic/angular\": \"^8.0.0\"`.",
    category: "Versiones y Configuración"
  },
  {
    question: "¿Qué archivo contiene la lógica para determinar si un usuario es administrador y redirigirlo si no lo es?",
    options: ["`src/app/services/auth.service.ts`", "`src/app/guards/admin.guard.ts`", "`src/app/admin/admin.page.ts`", "`src/app/app.routes.ts`"],
    correctAnswerIndex: 1,
    explanation: "El archivo `src/app/guards/admin.guard.ts` implementa la interfaz `CanActivate` y contiene la lógica para verificar el rol del usuario, redirigiendo a `/login` o `/tabs/catalog` si no tiene los permisos necesarios.",
    category: "Arquitectura"
  },
  {
    question: "En `chat.page.scss` (original), ¿cuál es el color de fondo para las burbujas de mensajes enviados por el usuario (`sent`)?",
    options: ["`#ffffff` (Blanco)", "`#ffdde1` (Rosado claro)", "`var(--ion-color-primary)`", "`#f0f2f5` (Gris claro)"],
    correctAnswerIndex: 1,
    explanation: "El archivo `chat.page.scss` define la variable `--bubble-sent-bg: #ffdde1;` y la aplica a la clase `.message-bubble.sent`.",
    category: "Componentes y UI"
  },
  {
    question: "En `order.model.ts`, ¿qué función auxiliar se exporta para crear un código de pedido único?",
    options: ["`createOrderCode()`", "`newOrderCode()`", "`generateOrderCode()`", "`getOrderCode()`"],
    correctAnswerIndex: 2,
    explanation: "El archivo `src/app/models/order.model.ts` exporta la función `generateOrderCode()` que construye un código basado en la fecha y un número aleatorio, como `ORD-20241126-1234`.",
    category: "Funciones Críticas"
  },
  {
    question: "En `catalog.page.ts`, si un usuario no está logueado e intenta agregar un producto a favoritos, ¿qué sucede?",
    options: ["Se agrega a favoritos en `localStorage`.", "No sucede nada.", "Se le muestra un `Toast` pidiéndole que inicie sesión.", "Se le redirige a la página de login."],
    correctAnswerIndex: 2,
    explanation: "El método `toggleFavorite()` primero obtiene el usuario actual de `AuthService`. Si no hay usuario, ejecuta `await this.showToast('Debe iniciar sesión para agregar favoritos', 'warning');` y detiene la operación.",
    category: "Lógica de UI"
  },
  {
    question: "¿Cuál es el propósito del archivo `zone-flags.ts`?",
    options: ["Definir variables de entorno para diferentes zonas horarias.", "Deshabilitar el parcheo de `zone.js` para ciertas APIs, como Custom Elements.", "Configurar las banderas de países para la internacionalización.", "Establecer las zonas de despliegue de la aplicación."],
    correctAnswerIndex: 1,
    explanation: "El archivo `src/zone-flags.ts` se usa para configurar `zone.js` antes de que se cargue. En este proyecto, se usa para establecer `__Zone_disable_customElements = true;` para mejorar la compatibilidad con Web Components.",
    category: "Estructura de Archivos"
  },
  {
    question: "En `cart.page.html`, ¿qué condición se usa para mostrar la advertencia sobre productos delicados en delivery?",
    options: ["`*ngIf=\"includeDelivery\"`", "`*ngIf=\"deliveryCost > 10\"`", "`*ngIf=\"selectedDistance === 'far'\"`", "`*ngIf=\"cart.total > 100\"`"],
    correctAnswerIndex: 2,
    explanation: "La tarjeta de advertencia (`warning-card`) en `src/app/cart/cart.page.html` tiene la directiva `*ngIf=\"selectedDistance === 'far'\"`, mostrándose solo cuando se selecciona la opción de entrega 'Lejos'.",
    category: "Lógica de UI"
  },
  {
    question: "En `google-drive.service.ts`, ¿qué se hace después de subir un archivo exitosamente para asegurar que sea visible?",
    options: ["Se genera una URL firmada.", "Se mueve el archivo a una carpeta pública.", "Se llama al método `makeFilePublic` para cambiar sus permisos.", "No se hace nada, los archivos son públicos por defecto."],
    correctAnswerIndex: 2,
    explanation: "Después de que la subida (`upload`) es exitosa, el método `uploadImage` llama a `await this.makeFilePublic(fileData.id);` para cambiar los permisos del archivo a 'reader' para 'anyone', permitiendo su visualización pública.",
    category: "Funciones Críticas"
  },
  {
    question: "En `product.model.ts`, ¿qué propiedad se usa para ordenar las categorías?",
    options: ["`name`", "`createdAt`", "`order`", "`priority`"],
    correctAnswerIndex: 2,
    explanation: "La interfaz `ProductCategory` en `src/app/models/product.model.ts` contiene una propiedad `order: number;`. Esta propiedad es luego usada en `product.service.ts` con `orderBy('order', 'asc')` para mostrar las categorías en un orden predefinido.",
    category: "Modelos de Datos"
  },
  {
    question: "En `tabs.page.ts`, ¿de qué servicio se suscribe el componente para obtener el número de items en el carrito?",
    options: ["`UserService`", "`OrderService`", "`CartService`", "`ProductService`"],
    correctAnswerIndex: 2,
    explanation: "El componente `TabsPage` inyecta `CartService` y en su `ngOnInit` se suscribe a `this.cartService.getCart$()` para obtener el `totalItems` y actualizar el badge del ícono del carrito.",
    category: "Arquitectura"
  },
  {
    question: "En `profile.page.ts`, ¿qué sucede si el usuario cancela la edición de su perfil (`toggleEdit` a `false`)?",
    options: ["Los datos modificados se guardan igualmente.", "Se le pregunta si desea descartar los cambios.", "Los datos del formulario se restauran a sus valores originales.", "El formulario se limpia por completo."],
    correctAnswerIndex: 2,
    explanation: "La función `toggleEdit` tiene una condición `if (!this.isEditing)`. Dentro de este bloque, se reasignan los valores originales del usuario (ej. `this.editData.name = this.user?.profile?.name ...`) al objeto `editData`, descartando cualquier cambio no guardado.",
    category: "Lógica de UI"
  },
  {
    question: "En `admin.page.scss`, ¿qué `grid-template-columns` se usa para la clase `.products-grid` en pantallas de escritorio?",
    options: ["`1fr 1fr 1fr`", "`repeat(3, 1fr)`", "`repeat(auto-fill, minmax(350px, 1fr))`", "`25% 25% 25% 25%`"],
    correctAnswerIndex: 2,
    explanation: "La clase `.products-grid` utiliza `grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));`, creando un diseño de cuadrícula responsivo que ajusta automáticamente el número de columnas basado en el ancho disponible, asegurando que cada columna tenga al menos 350px.",
    category: "Componentes y UI"
  },
  {
    question: "En `register.page.ts`, ¿qué método se utiliza para mostrar los términos y condiciones?",
    options: ["`openModal()`", "`showToast()`", "`alertController.create()`", "`router.navigate()`"],
    correctAnswerIndex: 2,
    explanation: "El método `showTerms()` en `register.page.ts` usa `this.alertController.create()` para mostrar una alerta con el texto de los términos y condiciones, lo cual es una forma simple de mostrar información modal sin crear un componente separado.",
    category: "Lógica de UI"
  },
  {
    question: "En `package.json`, ¿cuál es el propósito de la dependencia `tslib`?",
    options: ["Es una librería de tipos para TypeScript.", "Contiene funciones de ayuda de TypeScript que se usan después de la compilación.", "Es un linter para código TypeScript.", "Provee polyfills para funciones de JavaScript modernas."],
    correctAnswerIndex: 1,
    explanation: "`tslib` es una librería de runtime para TypeScript. Contiene funciones auxiliares (como `__extends`, `__decorate`) que el compilador de TypeScript puede usar para generar un código JavaScript más limpio y pequeño, evitando la duplicación de estas funciones en cada archivo.",
    category: "Dependencias"
  },
  {
    question: "En `order.service.ts`, si una consulta a Firestore falla por falta de un índice, ¿qué se sugiere en los logs de error?",
    options: ["Contactar al administrador de Firebase.", "Reinstalar las dependencias de `@angular/fire`.", "Que la consola de Firebase debería mostrar un enlace para crear el índice.", "Limpiar la caché de Firestore."],
    correctAnswerIndex: 2,
    explanation: "En los bloques `catch` de los métodos `loadUserOrders` y `loadAllOrders`, se verifica si `error.code === 'failed-precondition'`. Si es así, se imprime en la consola un mensaje indicando que se necesita un índice compuesto y que Firebase suele proveer un enlace para crearlo automáticamente.",
    category: "Funciones Críticas"
  }
];
