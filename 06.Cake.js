function solve(input) {
    let index = 0;
    let width = Number(input[index]);
    index++;
    let height = Number(input[index]);
    index++;
    let takenPieces = input[index];
    index++

    let pieces = width * height;

    while (takenPieces !== "STOP") {
        takenPieces = Number(takenPieces);
        pieces -= takenPieces;

        if (pieces <= 0) {
            console.log(`No more cake left! You need ${Math.abs(pieces)} pieces more.`);
            return;
        }
        takenPieces = input[index];
        index++;
    }
    console.log(`${pieces} pieces are left.`);
}

solve(["10",
"10",
"20",
"20",
"20",
"20",
"21"]);