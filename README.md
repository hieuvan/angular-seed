# Assessment Builder App


**Before you continue**, make sure that you have [nodejs], [ruby] and [sass] installed in your machine. Please go to the respective websites to find installation instructions.

The following set up instruction will be same for linux or windows machine. Open your preferred CLI and run:

    $ git clone ssh://git@stash.inside:7999/oars/builder-client.git
    $ cd builder-client
    $ npm install
    $ node_modules/.bin/bower install

Note: If `bower` asks for suitable version for angular, select the one associated with `Angular requirejs seed`.

The above will set up all the dependencies required for the application to run.


### Development

Run the following command. The command does whole bunch stuff. Let it finish and you will have your site running at `http://localhost:8000`.

    $ node_modules/.bin/grunt serve

You must have the `serve` task running while you are developing. Here are the things the above task does for you:

1. Set up server to acces the site at `http://localhost:8000`
2. Live reload. Browser reloads automatically everytime you make a change to your js, sass, css or html files.
3. Runs tests everytime you make a change to javascript files.
4. Automatically compiles your sass or scss files
4. Reports for jslint, code standard, errors, etc
5. Automatically compiles angular templates to template cache

### Building

There are various tasks to bulid the site, based upon what you are building for. All builds create a `dist` folder on the same level as the `app` and will have all the files necessary for deploying.
The structure of dist folder will look like following:

```sh
    dist
      index.html
      - images
      - js
          main.js
      - styles
          - fonts
              // all necessary fonts
          main.css
```

**Optimised build:** Compressed and optimised files.

    $ node_modules/.bin/grunt build


**Expanded build:** Non compressed files that are ideal for debugging.

    $ node_modules/.bin/grunt build


**Deployment:** For deployment run grunt with no parameters. It runs all tests and builds the deployment ready build.

    $ node_modules/.bin/grunt

### Running Tests

Tests are ran automatically while developing or as part of build task. However, if you need to run tests manually, you can do following:

    $ node_modules/.bin/grunt test


**IMPORTANT**
The project is using `editorconfig` for consistant standard on the file line-endings, spacing, tabs, etc. So, please make sure to install [editorconfig] before making any modification or commiting project files.


## Useful links

[yeoman](http://yeoman.io/)

[angular](https://angularjs.org/)

[requirejs](http://requirejs.org/)

[angular-seed](https://github.com/adikari/angular-seed)

[angular-styleguide](https://github.com/johnpapa/angular-styleguide)

[nodejs]: http://nodejs.com
[ruby]: http://rubyinstaller.org/
[sass]: http://sass-lang.com/install

[editorconfig]: http://editorconfig.org/
