#Hitch - The Next Thing in Ride-Sharing

##How to Use

[View App](https://hitch-ridesharing.herokuapp.com/)

Click on link, above and follow the prompts to sign up, create account and view drivers created by other users.

##Explanation of Technologies

In the formulation of this app I have primarily built the back end utilising Ruby and Sinatra. Naturally this is accompanied by a front end created and styles with HTML, CSS, Javascript. The app manages all data with an SQL database as well as utilises the Google Maps API to manage the maps available on various pages.

##Approachs Taken

The philosophy behind "Hitch" is to create a ride sharing app that allows the passenger to decide on the price they are willing to offer.

I have created the foundation of the app mobile ready with the homepage a list view of all requested drives. As a user you can either create a ride or view more information and offer to accept a ride. All users can view all rides, but users can also become drivers by providing additional information.

My sinatra app holds all data in an SQL database communicated with through Ruby and Active Record. By utilising Active Record I was able to avoid the language pitfalls and difficulties of SQL.

##Unsolved Problems / Things to Do

- Allow drivers to accept drivers
- Log in & Create account with Facebook
- Filter rides to only facebook friends, order by soonest & origin that is closest to current location
- Form validation to check data entered meets various requirements
- Google Maps show route between origin and destination
- Comments and/or contact system allowing users to interact about drives

##wireframes

Please find wireframes hosted on github at the following link.

[Wireframes](https://raw.githubusercontent.com/jozzzaa/hitch/master/public/Wireframes/hitch-wireframe.jpg)
