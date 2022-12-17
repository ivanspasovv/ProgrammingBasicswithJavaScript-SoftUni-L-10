function solve(input) {
    let index = 0;

    let maxBadGrades = Number(input[index]);
    index++;

    let problemName = input[index];
    index++;

    let problemGrade = Number(input[index]);
    index++;

    let badGrades = 0;
    let gradeSum = 0;
    let gradesCount = 0;
    let lastProblem = "";

    while (problemName !== "Enough") {
        lastProblem = problemName

        if (problemGrade <= 4) {
            badGrades++
        }

        if (badGrades === maxBadGrades) {
            console.log(`You need a break, ${badGrades} poor grades.`);
            return;
        }

        gradeSum += problemGrade;
        gradesCount++;

        problemName = input[index];
        index++;

        problemGrade = Number(input[index]);
        index++;
    }

    let avgGrade = gradeSum / gradesCount;
    console.log(`Average score: ${avgGrade.toFixed(2)}`);
    console.log(`Number of problems: ${gradesCount}`);
    console.log(`Last problem: ${lastProblem}`);

}

solve([
"3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"]);