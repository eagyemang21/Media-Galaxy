const { Router } = require("express");

//login
Router.put('/MG/login', logIn)

//sign up
Router.put('/MG/signup', signUp)


//User Accounts
Router.get('/MG/user/:id', displayUserProfile)
Router.put('/MG/user/:id/edit', editProfile)
Router.delete('/MG/user/:id/delete', deleteProfile)

//Website
//will display all media
Router.get('/MG/home', displayMedia)
Router.get('/MG/reviews/${title}', specificTitleReviews)
Router.post() 

//About 
Router.get('/MG/about/app', aboutApp)
Router.get('/MG/about/team', aboutTeam)

//Video Chat
Router.get('/MG/videoChat')