# api-integration-starter

A beginner API integration activity using JavaScript and the Dog API.

## Goal

Click a button, call a real API, and display a random dog image on the page.

## What You’ll Learn

- How to use `fetch()`
- How to convert an API response to JSON
- How to use API data in HTML
- Why `console.log(data)` is useful

---

## 1. Clone the Repo

```bash
git clone https://github.com/nehalc200/api-integration-starter.git
cd api-integration-starter
```

Open the folder in VS Code.

Then open `index.html` in your browser.

---

## 2. Open `script.js` in VS Code

Find this function:

```js
async function getRandomDog() {
  // We will write our API code here
}
```

We will add our API code inside this function.

---

## 3. Add a Loading Message

Inside `getRandomDog()`, add:

```js
dogContainer.innerHTML = "<p>Loading dog...</p>";
```

Now your function should look like:

```js
async function getRandomDog() {
  dogContainer.innerHTML = "<p>Loading dog...</p>";
}
```

Click the button and make sure the text changes.

---

## 4. Call the API

Add this below the loading message:

```js
const response = await fetch(dogApiUrl);
```

This asks the Dog API for data.

---

## 5. Convert the Response to JSON

Add this below the `fetch()` line:

```js
const data = await response.json();
```

This turns the API response into usable JavaScript data.

---

## 6. Check the Data

Add:

```js
console.log(data);
```

Open the browser console. You should see something like:

```js
{
  message: "https://images.dog.ceo/...",
  status: "success"
}
```

The dog image URL is stored in:

```js
data.message
```

---

## 7. Display the Image

Add this below `console.log(data);`:

```js
dogContainer.innerHTML = `
  <p>Here is your random dog!</p>
  <img src="${data.message}" alt="Random dog image">
`;
```

Click the button. A random dog image should appear.


---

## Customize It

Try one small change:

- Change the button text
- Change the caption
- Change the page colors
- Change the image size
- Add rounded corners

Example:

```css
#dogContainer img {
  max-width: 100%;
  border-radius: 30px;
}
```

---

## Key Pattern

Most API calls follow this pattern:

```js
const response = await fetch(apiUrl);
const data = await response.json();
console.log(data);
```

Then use something from `data` in your project.

For this activity, the dog image URL is:

```js
data.message
```

For other APIs, you might use:

```js
data.temperature
data.name
data.quote
data.results
```

Always use `console.log(data)` first so you can see what the API sends back.