# yugioh_deck_browser

> A Yu - Gi - Oh Deck Browser App with Vue.js and Bootstrap.

Technologies: Vue.js, Bootstrap, Jest(Unit Testing).

I built the project using  Vue-cli 3. Dependencies include axios for the api request and bootstrap for styling. Unit tests with Jest are included.
The project contains three components. The heading component that displays the page title, the Cards component that displays all the cards (their name and type) and the Card component that displays a default card and all of its data, if the user has not clicked a card, otherwise it displays the clicked card's data. In the Cards component all the cards are fetched and placed in an array. I loop through the array using v-for and display them on the page. In each card there is a click handler - showCardDetails(card) - that takes as a parameter the specific card, so that when a card is clicked the card's data is 'stored'. I transfer the data of the Cards component to the Card component using a serverBus (that contains a copy of the Vue instance). With the help of the serverBus I emit and then trigger custom events that transfer to the Card component, a) a default card that is displayed if the user has not clicked on a card yet, and b) the selected card which is displayed if the user has clicked on a card. If the card data does not contain null values the Card component displays all the values provided by the api, otherwise it displays '-' in place of them. 
I created a jest test for each component. The Card.spec.js tests if the isCardSelected variable defaults to false. The Cards.spec.js tests if the cards are 20 and the Heading.spec.js tests if the h1 element renders the correct content.


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
