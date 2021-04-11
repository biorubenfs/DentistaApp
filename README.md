# Clinica Dental App
[![Build Status][build-badge]][build]
## Set Up del proyecto

### Instalación de dependencias

```
npm install
```

### Creación de base de datos y tablas

Para crear la base de datos en MySQL, ejecutar:

```
sequelize db:create
```

Para crear las tablas, debemos ejecutar las migraciones correspondientes:

```
sequelize db:migrate
```
Deberia quedar algo con una estructura similar a esta: 
https://imgur.com/a/WF8ZbwF

### Generación de registros en la base de datos

La aplicación provee `seeders` que agregan registros a la base de datos para comprobar las distintas funcionalidades. Para ejecutarlos:

```
sequelize db:seeds:all
```

Este comando poblará las diferentes tablas. Deberían de agregarse 5 registros en la tabla `Usuarios`, 3 en la tabla `Medicos`
Por defecto, los usuarios poseen la contraseña `usuario` y los médicos la contraseña `medico`.

También se generará un pequeño pool de registros de citas listos para ser usados.

## Registro

El endpoint de registro es diferente en función de si deseamos registrarnos como médicos o usuarios.

### Registro como paciente POST /usuario/registro

Si deseas registrarte como usuario:

```
"nombre": testing
"email": "test@email.com
"password": *********
```

Si el registro se ha realizado de forma sataisfactoria recibirá un mensaje que así se lo indique.

### Registro como médico POST /medico/registro

Si desea registrarse como médico

```
"nombre": testing
"email": "test@email.com
"password": *********
```

## Login

Para poder utilizar el login sin problemas deberá haberse registrado previamente. Una vez hecho enviara

```
{
    "email": "ejemplo@ejemplo.com",
    "password": "contraseña"
}
```

Una vez hecho esto se le mostrará que se ha logueado con exito y se le habrá creado una `Cookie` con su `JWT`, esto mantendrá su sesión abierta hasta que haga un Logout

## Logout

Una vez terminado el paso del `Login`, si quiere marcharse le recomendamos que cierre la sesion para ello accedera a `/usuarios/logout` o `/medicos/logout` dependiendo de como se haya registrado. Una vez accede a esa ruta (METODO GET). Su `Cookie` que es lo ue mantenía su sesion abierta, se borrará y deberá hacer `Login` de nuevo. 

## Obtener token

Si quiere ver cual es su token deberá acceder a la `cookie` creada después de loguearse

## Endpoints principales

Los endpoints principales son los siguientes:

```
127.0.0.1/usuarios
127.0.0.1/medicos
127.0.0.1/registros
```
La dirección 127.0.0.1 es el localhost, esas rutas por si solas no tienen funcionalidad, si no que son las principales, que dirigen a las rutas secundarias.

### Endpoints de usuarios (pacientes)

Una vez se haya registrado y logueado en la aplicación, estarán disponibles nuevos endpoints en donde podrá ver citas disponibles, pedir una cita, confirmar una cita ya solicitada, cancelar una cita y ver sus próximas citas.

#### misCitas GET /usuarios/miscitas

El usuario podrá ver sus próximas citas, así como su estado:

#### citasDisponibles GET /usuarios/citas

El usuario podrá ver todas las citas disponibles, es decir, todas aquellas citas no asignadas a ningún usuario y potencialmente seleccionables por el usuario logeado.

#### nuevaCita POST /usuarios/cita

El usuario podrá solicitar una determina cita que esté disponible. Si no esta disponible, la aplicación le informará de elló. Para solicitar una cita, bastará con aportar el id de la cita elegida:

```
{
    "citaId" : N
}
```

#### confirmarCita

#### cancelarCita
