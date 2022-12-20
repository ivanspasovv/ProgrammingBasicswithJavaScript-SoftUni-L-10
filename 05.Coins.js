function solve(input) {
    totalSum = Number(input[0]);
    let coins = Math.round(totalSum * 100);
    let coinsUsed = 0;

    while (coins > 0) {
        if (coins >= 200) {
            coins -=200;
            coinsUsed++;
        } else if (coins >= 100) {
            coins -=100;
            coinsUsed++;
        } else if (coins >= 50) {
            coins -=50;
            coinsUsed++;
        } else if (coins >= 20) {
            coins -=20;
            coinsUsed++;
        } else if (coins >= 10) {
            coins -=10;
            coinsUsed++;
        } else if (coins >= 5) {
            coins -=5;
            coinsUsed++;
        } else if (coins >= 2) {
            coins -=2;
            coinsUsed++;
        } else if (coins >= 1) {
            coins -=1;
            coinsUsed++;
        }
    }

    console.log(`${coinsUsed}`);
}

solve(["0.56"])