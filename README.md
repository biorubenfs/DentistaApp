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

### Registro como paciente

### Registro como medico

## Login

## Logout

## Obtener token

## Endpoints principales

### Endpoints de usuarios (pacientes)

#### misCitas

#### citasDisponibles

#### nuevaCita

#### confirmarCita

#### cancelarCita
