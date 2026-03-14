const n = 5; // Rows in the top half

// Part 1: Upper Half
for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n - i; j++) {
        row += " ";
    }
    for (let k = 1; k <= (2 * i - 1); k++) {
        if (k === 1 || k === (2 * i - 1)) {
            row += "*";
        } else {
            row += " ";
        }
    }
    console.log(row);
}

// Part 2: Lower Half
for (let i = n - 1; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= n - i; j++) {
        row += " ";
    }
    for (let k = 1; k <= (2 * i - 1); k++) {
        if (k === 1 || k === (2 * i - 1)) {
            row += "*";
        } else {
            row += " ";
        }
    }
    console.log(row);
}