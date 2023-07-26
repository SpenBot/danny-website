# danny-website

https://www.blucrabhouse.com/menu#menu=dine-in-dinner

## NOTES

- decided not to go with modules

- ... there was something else when I was setting up the project I thought
    - I think there's a bunch of new Angular files
    - And I think you don't delete the app.component files

- had to change the `npm run build` command

## RESOURCES

- https://www.npmjs.com/package/ngx-device-detector

- Used gThumb on Linux to edit screenshots
    - ratio is 2:39:1 for cropping

- Adding Outline to Text Using CSS
    - https://www.codesdope.com/blog/article/adding-outline-to-text-using-css/

- Images are not loading after deploying angular app on github pages - Stack Overflow
    - https://stackoverflow.com/questions/56379595/images-are-not-loading-after-deploying-angular-app-on-github-pages

- 5 Ways to Crop Images in HTML/CSS | Cloudinary
    - https://cloudinary.com/guides/automatic-image-cropping/5-ways-to-crop-images-in-html-css

## SAMPLES

- https://github.com/SpenBot/angular-project-starter-2023
- https://github.com/SpenBot/primeng-breadcrumbs

- GitHub Pages Deploy & Domain - YouTube
    - https://www.youtube.com/watch?v=SKXkC4SqtRk

- How to Deploy an Angular App to GitHub Pages (like a PRO) - YouTube
    - https://www.youtube.com/watch?v=F3HbnbT1Maw

## SETUP

``` sh
    # install bootstrap
    $ npm install bootstrap@4.6.2 --save --force
    # update styles.scss with bootstrap import
    # test <button type="button" class="btn btn-primary">Bootstrap</button>
    
    # install prime-ng
    $ npm install primeng@14.2.2 --save
    $ npm install primeicons
    # update angular.json styles  
    # test by importing module into app.module, and add component


    # update version in package.jspn
    # update npm commands if you want in package.json


    $ npm i ngx-device-detector --force --save

```


## MVP-1

- [-] Graphic
- [-] Google Maps
- [-] Menu Items
- [-] About Section

## MVP-2

- [-] Image Carosels and Stuff

- I can put in fancier stuff like pop-windows, image-gallery type stuff.
- I'm like 6 hours in for now


## TODO

- gitignore cleanup

- [-] need to figure out navbar shit
    - [-] active home link solution
    - [-] hamburger styling and feature
    - [-] collapse items
    - [-] should I jsut use bootstrap?
    - [-] user icon
    - [-] hyperlinks should be on the left side
    - [-] sticky

- need to figure out bootstrap color overrides
- user icon in navbar

- project structure for models and such

- need to make a graphic

- [x] Footer, social icons and contact

- [-] Deploying for Angular to github pages
    - [-] whats the HREF situation?

- [-] HONESTLY ... ITS PROBABLY EASIER JUST TO BUILD YOUR OWN NAVBAR
- [-] THERES GOTTA BE A BETTER WAY TO DO MOBILE STYLING THAN THIS SHIT
    - [-] LIKE THE FOOTER

## BUGS

- [x] Home link stays highlighted
- [-] Footer styling is messed up on modal