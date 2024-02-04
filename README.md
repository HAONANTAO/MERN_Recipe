# The Simple Recipe Web

The Simple Recipe Web with the User Register, Login, and Logout functionality with authentications

and Add/Delete Recipe information and Saved Individual user Recipes functionality

This Web uses **MERN** to show the knowledge to connect the Frontend--Backend-Database based on MongoDB-Express-React-Nodejs as a skills stack.

<!-- PROJECT SHIELDS -->

[![LinkedIn][linkedin-shield]][www.linkedin.com/in/haonan-tao-aaron]

<!-- PROJECT IMAGES -->
<br />

![Screenshot 2024-02-04 at 21.10.17](/Users/aarontao/Desktop/Screenshot 2024-02-04 at 21.10.17.png)

![Screenshot 2024-02-04 at 21.10.40](/Users/aarontao/Desktop/Screenshot 2024-02-04 at 21.10.40.png)


## Content

- [Basic Develop environment](#Basic Develop environment)
  - [Set-Up](#Set Up Steps)
  - [Database](#Database)
- [Files Catalog Contents](#Files Catalog Contents)
- [How to Use](#How to Use)
- [Deployment](#Deployment)
- [Skills](#Skills)
- [Contributor](#Contributor)
  - [Open Source](#Open Source)
- [Version Control](#Version Control)
- [Author](#Author)
- [External Links](#External Links)

### Basic Develop environment

###### **Set Up Steps**

Clone the repo

```sh
git clone https://github.com/HAONANTAO/MERN_Recipe.git
```

**Database**

* User

  Id, Username, Password, SavedRecipes

* Recipes

  Id, Name, Ingredients, Instructions, ImageURL, CookingTime, UserOwner

  

### Files Catalog ContentsFiles Catalog Contents

```
filetree 
├── README.md
├── LICENSE.txt
├── README.md
├── client
│  ├── src
│  │  ├── components
│  │  |   ├── navbar.jsx
│  │  ├── hooks
│  │  |   ├── useGetUserID.js
│  │  ├── pages
│  │  |   ├── auth.jsx
│  │  |   ├── create-recipe.jsx
│  │  |   ├── home.jsx
│  │  |   ├── saved-recipe.jsx
│  │  ├── App.css
│  │  ├── App.js
│  │  ├── index.js
│  ├── node_modules
│  ├── public
│  ├── .gitignore
│  ├── package.json
│  ├── yarn.lock

├── server
│  ├── src
│  │  ├── models
│  │  |   ├── Recipes.js
│  │  |   ├── Users.js
│  │  ├── routes
│  │  |   ├── users.js
│  │  |   ├── recipes.js
│  │  ├── index.js
│  ├── node_modules
│  ├── public
│  ├── .package-lock.json
│  ├── .gitignore
│  ├── package.json
│  ├── yarn.lock

├── .history
├── LICENSE

```

How to Use

The Web will display at http://localhost:3000/

1. First, you should connect to the database, which is my personal MongoDB

   then, open the backend server side and connect to the database.

   You should direct to the server files and install all node_modeles then run the database and server 

   ```
   cd server
   ```

   ```
   yarn
   ```

   ```
   yarn dev
   ```

   

2. open the frontend client side to connect with the server side

   You should direct to the client files and install all node_modeles then run the frontend page

   ```
   yarn
   ```

   ```
   yarn start
   ```

   

3. you will see the website shown on http://localhost:3000/

   

### Deployment

Not yet deploy



### Skills

- HTML, CSS, JavaScript

- React

- NodeJs

- Express

- MongoDB

- "bcrypt"

- "body-parser"

- "cors"

- jsonwebtoken"

- mongoose"

- "axios"

- "react-cookie"

- react-dom"

- react-router-dom"

  

### Contributor

HAONAN TAO(Same as Author)



#### Open Source

Contributing makes the open-source community a great place to learn, inspire and create. Any contribution you make is **very much appreciated**.


1. Fork the Project
2. Create your Feature Branch 
3. Commit your Changes 
4. Push to the Branch
5. Open a Pull Request



### Version Control

The project uses Git for versioning.(Git Desktop)



### Author

HAONAN TAO



### External Links


- [**MERN Recipe App with Authentication - Build & Deploy A React Intermediate Project** ](https://www.youtube.com/watch?v=P43DW3HUUH8)

  

- [GitHub Pages](https://github.com/HAONANTAO/MERN_Recipe)



