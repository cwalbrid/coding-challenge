Hello!

Ambassador_Challenge is a Front-End application built with AngularJS and Bootstrap. 

The repo for this project can be found at: https://github.com/cwalbrid/coding-challenge/tree/workshop

The app is hosted on Heroku at: https://mighty-fortress-65423.herokuapp.com/



PROBLEM-

The goal of the project was to build a prototype for Ambassador's referral automation software that included a LINK PAGE with a table of referral links that users could interact with, and a LANDING PAGE where each of these links would redirect. 



SOLUTION-

Ambassador_Challenge uses AngularJS' view feature to create the LINK PAGE and LANDING PAGE within the context of a single page app. The app uses AngularJS' routing feature to navigate between the two pages. Because Ambassador_Challenge is a single page app, users can add/interact with referral links on the LINK PAGE, navigate to the LANDING PAGE, and return to the LINK PAGE without prompting a full page reload and clearing out the referral links added to the link table. So long as users don't refresh their browser, the data persists. 

On the LINK PAGE, users are able to add referral links to a link table, and interact with links on the table. Duplicate links cannot be added to the table. When users click on a link 'title', they are redirected to the LANDING PAGE and the 'clicks' counter for that link will increase by 1. When users select the 'edit' option, an inline editing tool allows them change the selected link title. When users select the 'delete' option, the corresponding link is removed from the table. 

On the LANDING PAGE, the link 'title' clicked on by the user is added to the URL as a query parameter: '?link={link title}'. This query parameter is then used to populate the content of the LANDING PAGE with a message: '{link title} is a Great Referral, See You on the Web!' When users select the 'home' option, they're directed back to the LINK PAGE, where they are able to add/interact with other referral links.

The app's architecture is based on the Model-View-Controller design pattern. When users interact with referral links, the app uses various controllers to affect data stored on the model, fetch the new data, and use that new data to adjust the HTML markup. Index.html, link.html, and landing.html render the markup users see, app.js and route.js house the controllers that bind data to the view using the $scope object, and factory.js houses the data that makes up the model and the services used to manipulate that data.

Ambassador_Challenge uses Bootstrap as a UI framework. Bootstrap allows for efficient development of a simple, minimal UI design. The app also uses a plugin called Xeditable to provide an inline-editing feature on the link table. 



TRADE-OFFS-

While Ambassador_Challenge has a framework established for unit testing using Karma and Jasmine, the test spec doesn't cover the functionality of the app. I'm new to Jasmine and Karma, and I realized I wouldn't be able to write functional tests that covered the app within a reasonable amount of time. I appreciate the importance of Test Driven Development, and getting acquainted with different test suites is one of my immediate goals for growing as a developer. I left my Karma and Jasmine files in the files structure to demonstrate a basic understanding of test suite architecture.

I initially tried to learn/use Bower to install my front-end framework libraries, but encountrered problems when I linked to those dependencies in my index.html file. When I downloaded the libraries/plugins I needed manually and added them to a lib directory, these problems were resolved. I left the Bower files in my file structure because my Karma and Jasmine configuration relies on dependencies located in the bower_components directory. 

The UI design is still relatively basic. With more time, I would brighten it up with imported font families, an eye-catching color palette, and modern design principles of minimal apps. I would also make the app more mobile-friendly by fleshing out my use of Bootstrap's grid system. 


OTHER PROJECTS-

Brick Oven Pizza Company:

Brick Oven Pizza Co. is pizza chain website built with AngularJS.

The site has two views:

1. home.html: This view is the landing page for the site. It’s built with standard HTML markup, and includes a nav to different franchise locations. When users select a location in the nav, a corresponding filter keyword is set in the model (factory.js).

2. location.html: This view is where users can see information about each franchise. Rather than writing markup for each franchise page, this view uses AngularJS expressions to render elements. Data for each franchise is stored in the model (factory.js). When the location.html page loads, data for a specific franchise is bound to the $scope. The filter keyword determines which franchise’s information is bound to the $scope and rendered in the markup.

Because the data for each franchise populates a single view, adding new franchises does not require writing additional markup or linking to new html files. Instead, the information for the new franchise is added to the model (factory.js -> navData, viewData) and AngularJS does all the rendering.

Repo: https://github.com/cwalbrid/Nexient-Pizza-Project
Hosted: http://brick-oven-pizza-project.colinwalbridge.com/




