# danny-website



## NOTES

- decided not to go with modules

- ... there was something else when I was setting up the project I thought
    - I think there's a bunch of new Angular files
    - And I think you don't delete the app.component files

- had to change the `npm run build` command


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
```



## TODO

- gitignore cleanup

- [-] need to figure out navbar shit
    - [-] active home link solution
    - [-] hamburger styling and feature
    - [-] collapse items
    - [-] should I jsut use bootstrap?

- need to figure out bootstrap color overrides
- user icon in navbar

- project structure for models and such

- need to make a graphic

- [x] Footer, social icons and contact

- [-] Deploying for Angular to github pages
    - [-] whats the HREF situation?

## BUGS

- [x] Home link stays highlighted
- [-] Footer styling is messed up on modal