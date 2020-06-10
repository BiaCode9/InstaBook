# InstaBook README <!-- omit in toc -->



- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries](#libraries)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Breakdown](#component-breakdown)
    - [Component Estimates](#component-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

_InstaBook** is an accelerated, real-time job-booking app.  It provides a platform for the user / job-poster to fill his/her job position last-minute and connect with a job-seeker who is readily available to fill the position in real-time.  The job-seeker will be alerted in real-time for openings that match his/her job profile.


<br>

## MVP

<br>

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

<img src="https://i.imgur.com/q8FuU2G.png" />

<img src="https://i.imgur.com/rFLihDw.png" />

<img src="https://i.imgur.com/Ivzz2fq.png" />

<img src="https://i.imgur.com/4VSfM4P.png" />

<img src="https://i.imgur.com/53LKPYt.png" />

#### Component Tree

<img src="https://i.imgur.com/OVEpjg3.png" />

#### Component Hierarchy

``` structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
      |__ wireframes
|__ components/
      |__ Header.jsx
      |__ Navigation.jsx
      |__ Profile.jsx
      |__ CreatePost.jsx
      |__ UpdatePost.jsx
      |__ ShowPost.jsx
      |__ ShowPosts.jsx
      |__ Login.jsx
      |__ Register.jsx
|__ services/

```

#### Component Breakdown


|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | functional |   n   |   n   | _The header will contain the navigation and logo._               |
|  Navigation  | functional |   n   |   n   | _The navigation will provide a link to each of the pages._       |
|  Login       | functional |   y   |   y   | _                                                                |
|  Register    | functional |   y   |   y   | _                                                                |
|  CreatePost  | functional |   y   |   y   | _The new post created will render the post info via props._      |
|  UpdatePost  | functional |   y   |   y   | _The updated post  will render the post info via props._         |
|  ShowPost    | functional |   y   |   y   | _This will be the individual post page._                         |
|  ShowPosts   |   class    |   y   |   n   | _The showPosts will render the posts on one page_                |
|    Footer    | functional |   n   |   n   | _The footer will show info about me and a link to my portfolio._ |

#### Component Estimates

| Task                      | Priority | Estimated Time | Time Invested | Actual Time |
| ----------------------    | :------: | :------------: | :-----------: | :---------: |
| Build Rails Server        |    L     |     5 hrs      |               |     TBD     |
| Implement Authentication  |    M     |     5 hrs      |               |     TBD     |
| Create CRUD Actions       |    H     |     6 hrs      |               |     TBD     |
| Create React Components   |    H     |     12 hrs     |               |     TBD     |
| Render Data in Components |    H     |     6 hrs      |               |     TBD     |
| Utilize React Router      |    H     |     3 hrs      |               |     TBD     |
| Utilize Authentication    |    H     |     6 hrs      |               |     TBD     |
| Style Components          |    H     |     8 hrs      |               |     TBD     |
| Style layout with Flex Box|    H     |     6 hrs      |               |     TBD     |
| Implement Media Queries   |    H     |     6 hrs      |               |     TBD     |
| TOTAL                     |          |     64 hrs     |               |     TBD     |


<br>

### Server (Back End)

#### ERD Model

<img src="https://i.imgur.com/P3kl73r.png" alt= "ERD Model"/>

<br>

***

## Post-MVP

- GPS functionality
- More Animation
- Add a chatbot for those signed online
- Search box by title, content, or username
- Calendar component
- Real-time alerts

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution, if you'd like.
