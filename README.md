# koa-ts-api

## Overview
Welcome to the documentation for the **koa-ts-api** project, showcasing the use of [Koa](https://koajs.com/), [TypeScript](https://www.typescriptlang.org/), and [TypeORM](https://typeorm.io/). This project serves as a template for building robust APIs with a modern, minimalistic stack.

It also provides use of [Docker](https://www.docker.com/) containers, in order to have the different parts separated (API, database).

[**PostgreSQL**](https://www.postgresql.org/) is selected as database storage.

There's also the possibility to use [**nodemon**](https://www.npmjs.com/package/nodemon) during development time, to make it easier for devs to try changes.

## Table of Contents

- [koa-ts-api](#koa-ts-api)
  - [Overview](#overview)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Configuration](#configuration)
    - [Environment](#environment)
    - [Files](#files)
  - [Usage](#usage)
    - [Boot](#boot)
    - [Development conventions](#development-conventions)
    - [Testing](#testing)
  - [WIP](#wip)
  - [TODO](#todo)
  - [Acknowledgements](#acknowledgements)

## Installation

To get started, follow these steps to install the project:

```bash
git clone https://github.com/pipetus/koa-ts-api.git
cd koa-ts-api
npm install
```

## Configuration

### Environment
There are a few environment variables that can be set to configure, provided in **.env.sample**.

These will be used in the API project itself:
```bash
APP_NAME=app-name # will be used as part of the container's names
DB_HOST=
DB_PORT=
DB_USER=
DB_PASSWORD=
DB_NAME=
```


These will be used in the database container:
```bash
# Postgres
POSTGRES_USER=
POSTGRES_PASSWORD=
PGUSER=
POSTGRES_DB=
POSTGRES_HOST=
POSTGRES_PORT=
```

### Files
Configure the project by updating the necessary settings. Key configuration files include:

* **tsconfig.json**: TypeScript compiler options.
* **src/database/datasource.ts**: TypeORM configuration for database connection.

## Usage

### Boot
Start the server using:

```bash
npm dev
```

This will run the project in development mode. Visit http://localhost:3000 (or the port defined in the environment variable) to interact with the API.

### Development conventions

Keeping in mind a basic workflow of creating and endpoint, supporting RESTful access, the code provided in this project follows these conventions:

1. Create a *router* for the endpoint (`src/app/routes/*.ts`).
2. Create a *controller* (`src/app/controllers/*.ts`); these are going to receive a custom router context.
3. Perform logic using *services* (`src/app/services/*.ts`).
4. Use *models* (`src/app/models/*.ts`); these are TypeORM Entities.
5. Access persistence layer by means of *repositories* (`src/app/repositories/*.ts`).
6. Return data using *serializers* (`src/app/serializers`); these respond to JSON API format.
7. Additionally, if needed, perform any model changes by means of *migrations* (`src/database/migrations`).
8. Also, if needed, data can be pre-loaded by means of *seeders* (`src/database/seeders`).

### Testing

**Jest** is used as the testing framework, along with a few additional libraries to perform some tasks such as creating objects via factories.

Keeping in mind the project's basic form, testing encouraged on:

- **Entities**
- **Controllers**: a sample is provided, following the approach of *arrange* (prepare the database and the context of a request), *act* (calling the actual action) and *assert* (perform expectation matching).
- **Requests**: similar to controllers, only at API level.
- **Services**

## WIP
- Swagger

## TODO

- CORS
- Parameter validation
- Swagger API doc
- Handling of static content
- Authorization
- Client to communicate with other APIs

## Acknowledgements
This project is heavily based on most of [these ideas of Matt Chapman's](https://inviqa.com/blog/how-build-basic-api-typescript-koa-and-typeorm).
