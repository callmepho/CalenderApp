# CalenderApp

## TechStack

- Nextjs (frontend)
- Spring boot (backend)
- MySql (DB)
- tailwind
- Mantine
- Axios (fetch)
- yup (validator)

## Startup

Running frontend NextJS
Navigate into calenderfrontend folder
Run commands:

```
npm install
npm run start
```

Running backend SpringBoot
Navigate into calenderbackend folder
Edit application.properties for your database

```
spring.datasource.url=jdbc:mysql://localhost:3306/"DB_NAME"
spring.datasource.username="MYSQL_USERNAME"
spring.datasource.password="MYSQL_PASSWORD"
```

Run commands:

```
mvn spring-boot:run
```

## Task

- [x] Calender basic
- [x] Basic backend for events
- [x] Frontend modal for events
- [ ] Calender view layout (week, year layout)
- [x] Add new labels
- [ ] Testing

### Current working on

- ~~Creating new labels and adding entity for labels in spring~~
- ~~Add new label~~
- Calender layouts
