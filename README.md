# MEN-Stack-Application

![Embedded screenshot](/public/assets/MEN_stack_app_screenshot.png)

Route table
|       **URL**               | **REST Route** | **HTTP Verb** | **CRUD Action** |   **EJS View(s)**        |
| --------------------------- | -------------- | ------------- | --------------- | ------------------------ |
| /                           |                | GET           | read            | home.ejs                 |
| /monitors                   | index          | GET           | read            | monitor-index.ejs        |
| /monitors/:id               | show           | GET           | read            | monitor-details.ejs      |
| /monitors/new               | new            | GET           |                 | new-form.ejs          |
| /monitors                   | create         | POST          | create          |                          |
| /monitors/:id/edit          | edit           | GET           | read            | edit-monitor.ejs         |
| /monitors/:id               | update         | PATCH/PUT     | update          |                          |
| /monitors/:id               | destroy        | DELETE        | delete          |                          |
| /reviews/                   | index          | GET           | read            | review-index.ejs            |
| /reviews/:id                | show           | GET           | read            | review-details.ejs          |
| /reviews/new/:monitorId     | new            | GET           | read            | new-form.ejs              |
| /reviews/create/:monitorId  | create         | POST          | create          |                          |
| /reviews/:id                | destroy        | DELETE        | delete          |                          |
| /seed                       |                | GET           | delete & create |                          |
| /about                      |                | GET           |                 | about.ejs                |
| /*                          |                | GET           |                 | 404.ejs                  |

## Technologies Used

- HTML
- CSS
- Express
- EJS
- Node.js
- MongoDB Atlas
- Postman

## Installation Instructions

- Fork and clone to local environment
- Install necessary packages with ***npm i***
- Create .env file and add these lines

    PORT=3000
    
    MONGODBURI="mongodb+srv://yourUsername:**REPLACEWITHYOURDATABASE**"

- start application with ***npm run dev*** or ***node server.js***

## User Stories

- As someone who is looking for a new PC monitor, I want to see reviews of monitors and decide what fits my needs.
- As a monitor manufacturer, I want to add my products to the app so that people can see what specifications my products have.
- As an owner of a multiple monitors, I want to leave reviews so that it will help others decide on which monitor to choose.

## Wireframes

![home page](/public/assets/home.png)
![about me page](/public/assets/about.png)
![monitors index page](/public/assets/index.png)
![monitors show page](/public/assets/show.png)

## Unsolved Problems

None so far.

## Hurdles Overcome

Implementing a filter method and assigning query parameters to my categories was a challenge. I initially planned on creating separate routes for my categories but incorporating query parameters in the URL proved to be the more efficient approach.

## Next Steps

- Add a search bar
- Incorporate an API
- Sign up/log in functionality