// Solution 1 — Match Winner
function matchWinner(teamAGoals, teamBGoals) {
    if (typeof teamAGoals !== "number" || typeof teamBGoals !== "number") {
        return "Invalid";
    }

    if (teamAGoals > teamBGoals) {
        return "Team A Won";
    } else if (teamBGoals > teamAGoals) {
        return "Team B Won";
    } else {
        return "Draw";
    }
}

// Solution 2 — Elevator Weight Safety Checker
function isElevatorSafe(weights) {
    if (!Array.isArray(weights)) {
        return "Invalid";
    }

    let totalWeight = 0;

    for (let i = 0; i < weights.length; i++) {
        if (typeof weights[i] !== "number") {
            return "Invalid";
        }

        totalWeight += weights[i];
    }

    if (totalWeight <= 400) {
        return true;
    } else {
        return false;
    }
}

// Solution 3 — AI Token Cost Calculator
function calculateAiCost(tokensUsed) {
    if (typeof tokensUsed !== "number" || tokensUsed < 0) {
        return "Invalid";
    }

    if (tokensUsed <= 500) {
        return 0;
    }

    let extraTokens = tokensUsed - 500;
    let charge = Math.floor(extraTokens / 100) * 5;

    return charge;
}

// Solution 4 — Top Rated Restaurant Finder
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

// Solution  5 —Debugging Challenge: API Response Time Monitor
function averageResponseTime(times) {
    if (!Array.isArray(times)) {
        return "Invalid";
    }

    if (times.length === 0) {
        return "Invalid";
    }

    let total = 0;

    for (let i = 0; i < times.length; i++) {
        if (typeof times[i] !== "number") {
            return "Invalid";
        }

        total += times[i];
    }

    return total / times.length;
}
