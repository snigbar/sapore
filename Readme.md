# Sapore

## This project is created using Tailwind Css and React and DaisyUI

### Server is build using express js and deployed in vercel

# Home Page 


* ### Header Section
    * Header Section included a navbar and hero area. Navbar has some links for navigation and a button call apply now.
    * The Navlinks are created with "Link"to prevent reloading and to show active links
    * Header section contains some text and an image and buttons
    * Navbar when user is available is shows profile pic and name and logout button.
    * When User isn't available, it shows a login button which redirects to login page
    
    

* ### Chef Section
    * Chef section loads data from link and displays all the chefs information and necessary data.
    * There is a button on each recipes card of the chef card to view all the recepies of the chef. Only authorised us can see that section.
    * If user not logged in, clicking this button will redirects to loging page.
    * After login or Register the site will redirected to that chef recipe which one was clicked.
 
* ### find us section
    * React leaflet package is used to show map in this section

    ### Video section
    * A video backround is used using tailwind css
* 


* ### Footer section
    * The footer section includes some static links and logo and company name.

   
# Recipes page

 * This is a protected route created using private route only authorised public can have access to this.
 * There is a section showing profile data of Chefs.
 * Below this section you can find all the recipes of that chef.
 * By clicking add to favourite creates the button disabled and show a toast.


 
# Login page 

* Loign page includes email, password or login with github and google option
* It has a navbar and footer.
* there is a link to register


# Registration page

* Creating user account with name,email, photo link and password
* Password should be 6 characters long at least
* After registration completed its redirects to the home page
# Blog 

* It's another route.
* It includes some questions with answers related to react.

# error
* There is an error element page which shows error to an unrecognized route. 


