# Clinica Dental App

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

## Logout

## Obtener token

## Endpoints principales

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
