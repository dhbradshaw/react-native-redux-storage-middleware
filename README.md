# Minumum Viable ES6 NPM Package

## Why create minimum viable es6 npm package repo?
A minimum viable npm **es5** package is very simple -- just create a package.json with a name and a version in a folder and upload.

However, if you want to write in **es6**, then you probably want to still publish in es5.  This adds a little complexity.

This package has a few parts put in place to make that work.

1. The source files are placed in a `src` folder.
2. .babelrc and package.json are set up so that a build command will populate the `build` folder.
3. main is declared to be `index.js` in the build folder.
4. tests are in the `tests` folder
5. jest is added as a dev-dependancy and a test script is provided
6. .gitignore avoids committing the generated es5 so that github isn't polluted with generated code.
7. .npmignore avoids adding the source code so that npm isn't polluted with es6 code.

## Cool.  So what do I do to use it?

It's pretty easy.  Here are the steps.

### 1. Clone this repo
```
$ git clone git@github.com:dhbradshaw/minimal-es6-npm-package.git
```
### 2. Customize package.json
You'll have to update the package name.
You may will want to update at least some of several other fields: author, license, etc.  
And of course you'll probably want to configure your dependencies and dev dependencies.

### 3. Add your code to src
Make sure that you export any part of your api that you want will available in the end product.

### 4. Add your tests to `tests` and run them
Make sure to run your tests before deploying your package.

### Run babel to populate the build directory
```
yarn babel
```
or 
```
npm run babel
```
### Register with npm if necessary
You can register with npm by using the add user command if you're not already there:
```
$ npm adduser
```

### Publish!
From the same directly as your package.json, run
```
npm publish
```
Or, if it's a scoped package that you want to ensure is public,
```
npm publish --access=public
```

## Resources:

https://docs.npmjs.com/getting-started/publishing-npm-packages

https://docs.npmjs.com/getting-started/scoped-packages

http://stackoverflow.com/questions/29738381/how-to-publish-a-module-written-in-es6-to-npm
