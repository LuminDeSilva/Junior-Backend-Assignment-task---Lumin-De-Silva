## Description

Complete assigment of Junior Backend (Using Nestjs and PostgreSQL)


## Installation

```bash
git clone https://github.com/LuminDeSilva/Junior-Backend-Assignment-task---Lumin-De-Silva.git
cd Junior-Backend-Assignment-task---Lumin-De-Silva
```

## Setting database (PostgreSQL)

Open cmd 

```bash
psql -U postgres
```
enter the password

```bash
CREATE DATABASE assignmentdb;
CREATE USER assignmentuser WITH PASSWORD 'assignment';
GRANT ALL PRIVILEGES ON DATABASE assignmentdb TO assignmentuser;
```

If database doesn't get connected 

```bash
GRANT USAGE ON SCHEMA public TO assignmentuser;
GRANT ALL PRIVILEGES ON SCHEMA public TO assignmentuser;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO assignmentuser;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO assignmentuser;
GRANT ALL PRIVILEGES ON ALL FUNCTIONS IN SCHEMA public TO assignmentuser;
```

Exit PostgreSQL  

```bash
\q
```

## Install dependencies

```bash
yarn install
```

## Running the app

```bash
yarn start
```

## Stay in touch

- Author - Lumin De Silva

