# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

<<<<<<< HEAD
* ...
=======
### Goals

- _Build a Ruby on Rails server with at least 3-table database,_
- _Utilize Rails to define models for interacting with the database,_
- _Implement and utilize Authentication using JWT,_
- _Implement full CRUD on the backend,_
- _Build a functional interactive React APP._
- _Consume data from the Ruby on Rails API, and render that data in the components,_
- _Utilize React Router for client-side routing,_
- _Style with CSS,_
- _Implement 2 media queries,_
- _Deploy back-end via Heroku and front-end via Surge or Netlify,_

<br>

### Libraries

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       |                                            |
|   React Router   |                                            |
|      Rails       |                                            |


<br>

### Client (Front End)

#### Wireframes

<img src="https://i.imgur.com/jAywBrl.jpg" />

<img src=https://i.imgur.com/VvaIz9L.png />

<img src="https://i.imgur.com/AFGHQaC.jpg" />

<img src="https://i.imgur.com/rFLihDw.png" />

<img src="https://i.imgur.com/BgAjxsL.png" />

<img src="https://i.imgur.com/L9sRHtI.png" />

<img src="https://i.imgur.com/gplokjc.png" />

#### Component Tree

<img src="https://i.imgur.com/OVEpjg3.png" />

#### Component Hierarchy

``` structure

src
|__ assets/
      |__ fonts
|__ components/
      |__ Header.jsx
      |__ Login.jsx
      |__ Register.jsx
      |__ Profile.jsx
      |__ CreatePost.jsx
      |__ EditPost.jsx
      |__ ShowPosts.jsx
      |__ ShowUserPosts.jsx
|__ services/

```

#### Component Breakdown


|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | functional |   n   |   n   | _The header will contain the navigation and logo._               |
|  Login           | functional |   y   |   y   | _This will validate current user to sign in._                                                                |
|  Register        | functional |   y   |   y   | _This will save new user credentials to local storage and grant access.                              |
|  CreatePost      |    class   |   y   |   y   | _The new post created will render the post info via props._      |
|  UpdatePost      |    class   |   y   |   y   | _The updated post will render the post info via props._         |
|  ShowPosts       | functional |   y   |   y   | _This will render all users posts._                         |
|  ShowUserPosts   |  functional |   y   |   n   | _The showPosts will render only current user's posts.              |
|    Footer        | functional |   n   |   n   | _The footer will show copyright and link to portfolio._ |

#### Component Estimates

| Task                      | Priority | Estimated Time | Time Invested | Actual Time |
| ----------------------    | :------: | :------------: | :-----------: | :---------: |
| Build Rails Server        |    L     |     5 hrs      |               |     TBD     |
| Implement Authentication  |    M     |     3 hrs      |               |     TBD     |
| Create CRUD Actions       |    H     |     6 hrs      |               |     TBD     |
| Create React Components   |    H     |     12 hrs     |               |     TBD     |
| Render Data in Components |    H     |     8 hrs      |               |     TBD     |
| Utilize React Router      |    H     |     3 hrs      |               |     TBD     |
| Utilize Authentication    |    H     |     6 hrs      |               |     TBD     |
| Style Components          |    H     |     10 hrs      |               |     TBD     |
| Style layout with Flex Box|    H     |     8 hrs      |               |     TBD     |
| Implement Media Queries   |    H     |     4 hrs      |               |     TBD     |
| TOTAL                     |          |     65 hrs     |               |     TBD     |


<br>

### Server (Back End)

#### ERD Model

<img src="https://i.imgur.com/P3kl73r.png" alt= "ERD Model"/>

<br>

***

## Post-MVP

- Geo-location enabled
- More Animation
- Add a chatbot/dm for those signed online
- Search bar for job by title or content or username
- Calendar component
- Real-time job match alerts while signed in, via text, via e-mail

***

## Code Showcase



## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution, if you'd like.
>>>>>>> fc8eb1ee582921121eb5366de07d1ff429c202af
