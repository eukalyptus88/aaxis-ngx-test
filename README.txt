AAXIS-NGX-TEST - EDUARDO IRAGORRI

I started the project from an MDB for Angular Free Seed [https://mdbootstrap.com/angular/]

First of All, the app/services/api folder, and made a Module for it.

I declared 3 interfaces in the ApiModule corresponding to the object structures found in the Example API Response.

Then I created an ApiService which uses @angulat/http to make http requests.
Inside it I created 2 methods... One for querying the API in the way that was asked, and the other one for Error Handling

Following that, I imported the ApiModule in the AppModule, and then I made the Html scaffolding for the app.component.html

I used the mdb-navbar component from the Seed, but then I Found Out the progressbar that comes with the seed is a Premium
Component, So I resorted to importing the progress-bar from https://material.angular.io/components/progress-bar/

To display the list, I resorted to an *ngFor that shows an array of items declared in the component and initialized as an
empty array.

I declared a Loading boolean to toggle the status for the progress-bar

I declared setters and clearers for the Items array and the Loading boolean

I created a Query method that sets the Loading boolean and invokes the queryAutoCompleteByProductName ApiService method
and when it's done sets the Items array to the response.

I then made an updateItems method, which clear the Items and then, if the input is not blank, runs the query method.

I made the app.component implement OnInit and then added an ngOnInit method that makes sure that when the page is loaded
the updateItems method is run with a blank string.

Finally, back to the html, I made the following changes:

I bound the mode property of the mat-progress-bar to the loading boolean. If it's true, then the mode is 'indeterminate', 
otherwise, it's 'query', and I also set the progress to zero, so that the bar looks empty when not loading.

I bound the imageUrl, itemId, name and nameComplete fields to the data models (each item from the items array)

I bound the keyup event from the input to the updateItems method, with the inputs value as argument to the method.

