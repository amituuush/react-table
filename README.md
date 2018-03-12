# HelloFax Repositories
* Built in using `React` as a front end library
* `axios` as an http library
* `scss` as a css pre-processor

## Installation and Dependencies
1. Clone this repo locally
2. Run `npm install`
2. Run `npm start`
3. Open `index.html` in your browser

## Considerations
This app functions simply. On `ComponentDidMount`, an `AJAX` request is sent to the provided API endpoint and sets the response to `this.state.repos`. Within the `render()` function, we map through this list of repos and render a `<Repo />` component for each, passing in data and a method (`this.setCurrentlyViewedRepo`). `<Repo />` then renders out the appropriate data as a `<tr>`. If a row is clicked, `this.setCurrentlyViewedRepo` is called and sets that row's data as `this.state.currentlyViewedRepo`, which triggers the <Modal /> component to show. When a user clicks 'close' or clicks outside the modal, `this.state.currentlyViewedRepo` is set to `undefined`, which hides the modal.

## Possible Improvements
1. Format "Last Updated" timestamp
2. Render "Primary Language" icons
3. Not open modal when repo link is clicked
4. Modal scrolls with screen
5. Render more data on modal
6. Move API endpoint URL to config
7. Just set the necessary key:values as `this.state.currentlyViewedRepo` when a row is clicked instead of all of repo's data
8. Add `PropTypes` to components