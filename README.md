# MEN-Stack-Application
Route table
|       **URL**               | **REST Route** | **HTTP Verb** | **CRUD Action** |   **EJS View(s)**        |
| --------------------------- | -------------- | ------------- | --------------- | ------------------------ |
| /                           |                | GET           | read            | home.ejs                 |
| /monitors                   | index          | GET           | read            | monitor-index.ejs        |
| /monitors/:id               | show           | GET           | read            | monitor-details.ejs      |
| /monitors/new               | new            | GET           |                 | new-monitor.ejs          |
| /monitors                   | create         | POST          | create          |                          |
| /monitors/:id/edit          | edit           | GET           | read            | edit-monitor.ejs         |
| /monitors/:id               | update         | PATCH/PUT     | update          |                          |
| /monitors/:id               | destroy        | DELETE        | delete          |                          |
| /reviews/                   | index          | GET           | read            | rev-index.ejs            |
| /reviews/:id                | show           | GET           | read            | rev-details.ejs          |
| /reviews/new/:monitorId     | new            | GET           | read            | new-rev.ejs              |
| /reviews/create/:monitorId  | create         | POST          | create          |                          |
| /reviews/:id                | destroy        | DELETE        | delete          |                          |
| /seed                       |                | GET           | delete & create |                          |
| /about                      |                | GET           |                 | about.ejs                |
| /*                          |                | GET           |                 | 404.ejs                  |
