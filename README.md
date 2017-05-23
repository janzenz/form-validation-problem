# Form validation problem
You can open the `index.html` on the browser or do an `npm start` then go to `http://localhost:9000` when developing.

##Documentation
### Here are the steps I took in approaching this problem.
- First I read the `problem definition` and wrap my head around it.
- I then decided on what tools to use to solve this problem in JavaScript.
- Then setup the project using `webpack` and editor specific rules with `eslint` and `editorconfig`.
- I then began on adding the business rules under `test/rules.js`.
- And then searched for a validation package and found `validate.js` which has very good documentation and easy to use.

##Progressive enhancement
- If this is going to support more features later I'm going to refactor my code and separate its concerns further with OOP.
- Use `Sass` for the CSS
- Use React ;)

##Browser support
- Most major browsers: Chrome, FireFox, Safari, Edge, and IE 9+.

##Testing
- I used `chai` and `mocha` for testing and tested based on `problem definition`

##Tooling
I used `webpack` for building the script which really helped a lot making it fast to develop. It might be overkill but it's just easy to setup and can be leveraged to React/Angular later if need be.

I also used `polyfills` to polyfill some ES6 features like `Object.assign` and `Object.entries`.
