# Travel Route Finder

This is a simple JavaScript function `findTravelRoute` that helps you find a travel route based on a list of tickets. It can be used to determine the order of cities to visit in a multi-leg journey.

## Usage

1. Include the `findTravelRoute` function in your JavaScript code.

2. Define a list of tickets as an array of objects. Each object should have a `from` and `to` property representing the source and destination cities.

3. Call the `findTravelRoute` function with your list of tickets to calculate the travel route.

4. The function will return an array representing the ordered list of cities to visit, starting from the current location and following the ticket connections.

5. You can then use this list for navigation or display to the user.

Here's an example usage:

```javascript
const tickets = [
    { from: "Paris", to: "Skopje" },
    { from: "Zurich", to: "Amsterdam" },
    { from: "Prague", to: "Zurich" },
    // ... other ticket objects ...
];

const travelRoute = findTravelRoute(tickets);
console.log("Travel Route:", travelRoute);



Function Details
The findTravelRoute function takes an array of ticket objects as input.

It iterates through the tickets, starting from a specified current location (in this case, "Kiev").

The function finds the next ticket that matches the current location as the source city and updates the current location to the destination city.

It continues this process until no more valid tickets are available.

The function returns an array representing the travel route, including the cities to visit in the correct order.

```
