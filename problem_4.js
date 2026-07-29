function topRatedRestaurant(restaurants) {
    if (!Array.isArray(restaurants) || restaurants.length === 0) {
        return "Invalid";
    }

    let bestRestaurant = restaurants[0];

    for (let i = 0; i < restaurants.length; i++) {
        if (
            typeof restaurants[i].name !== "string" ||
            typeof restaurants[i].rating !== "number"
        ) {
            return "Invalid";
        }

        if (restaurants[i].rating > bestRestaurant.rating) {
            bestRestaurant = restaurants[i];
        }
    }

    return bestRestaurant.name.toUpperCase();
}

console.log(
    topRatedRestaurant([
        { name: "Chillox", rating: 4.5 },
        { name: "Sultan's Dine", rating: 4.8 }
    ])
);

console.log(
    topRatedRestaurant([
        { name: "KFC", rating: 4.2 },
        { name: "Pizza Hut", rating: 4.6 }
    ])
);

console.log(topRatedRestaurant([]));
console.log(topRatedRestaurant("restaurants"));