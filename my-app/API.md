# Routes DOC:

## Signup and Login:
### "/signup"
* Signing up users into the website & database. They will add email, password, and create a unique username.

### "/login"
* Login users into the website. Will fetch data from DB to see if the creditials align. 

## WEBSITE
### "/AboutTeam"
* Will display biography about me & link portfolio

### "/AboutAPP"
* Will display info about the app

### "/{StreamingSite}"
* Will display movies and tv shows that belong to that streaming site.

### "/Reviews"
* Gets all reviews for movies and tv

### "/Reviews/${title}"
* Returns all reviews for specific title

## USERS
### "/user/:id"
* Will return the user's information in their profile. The information will contain their email, password, username 

*(stretch features)posts made, levels of Reviewer*