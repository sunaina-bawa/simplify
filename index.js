function findTravelRoute() {
    const tickets = [
        { from: "Paris", to: "Skopje" },
        { from: "Zurich", to: "Amsterdam" },
        { from: "Prague", to: "Zurich" },
        { from: "Barcelona", to: "Berlin" },
        { from: "Kiev", to: "Prague" },
        { from: "Skopje", to: "Paris" },
        { from: "Amsterdam", to: "Barcelona" },
        { from: "Berlin", to: "Kiev" },
        { from: "Berlin", to: "Amsterdam" }
    ];

    const route = [];
    let currentLocation = "Kiev";

    while (tickets.length > 0) {
        const nextTicketIndex = tickets.findIndex(ticket => ticket.from === currentLocation);

        if (nextTicketIndex === -1) {
         
            break;
        }

        const nextTicket = tickets.splice(nextTicketIndex, 1)[0];
        route.push(nextTicket.from);
        currentLocation = nextTicket.to;
    }

    route.push(currentLocation);

    return route;
}

const travelRoute = findTravelRoute();
console.log("Travel Route:", travelRoute);
