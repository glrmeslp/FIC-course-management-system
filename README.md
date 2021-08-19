# FIC course management system

## TEAM

|Nome|Matricula|Api|
|-|-|-|
|GUILHERME DE SOUSA PEIXOTO| 2019003074 | Turma(classes) |
|KEVEN LUCAS PAIVA DE PAULA| 2019003083 | Professor(professor) |
|MARIO GUILHERME CARVALHO| 2019007940 | Aluno(fic-student) |
|REBECA CANCELLI ARCHER PINTO| 2019003181 | CursoFic(fic-course) |

### CLASS DIAGRAM
![diagram](diagramaDeClasses.png)

### TECHNOLOGIES USED
* back-end: [NEST.JS](https://nestjs.com/)
* front-end: [ANGULAR](https://angular.io/)

## REQUIREMENTS 
This project requires docker and docker-compose.

## RUNNING PROJECT
clone this repository on your machine 
```bash
$ git clone https://github.com/glrmeslp/FIC-course-management-system.git
```
enter the project 
```bash
$ cd FIC-course-management-system
```
There is a docker-compose.yml file for starting Docker.

```bash
$ docker-compose up --build

```

After running the sample, you can stop the Docker container with

```bash
$ docker-compose down
```
