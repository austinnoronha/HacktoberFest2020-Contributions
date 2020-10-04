//Fibonacci Series
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function run(n = 1){
    var t1 = 0, t2 = 1, msg = "";

    for (i = 1; i <= n; ++i)
    {
        msg += " "+ t1 + " +";
        var sum = t1 + t2;
        t1 = t2;
        t2 = sum;
    }
    
    console.info(msg.slice(0, -1));
}

rl.question("Please enter a number (ex between 1 - 100)? ", function(inpNo) {
    inpNo = parseInt(inpNo) || 0;
    if(inpNo >= 1 && inpNo <= 100){
        console.info(`You have entered the number ${inpNo}, generating Fibonacci Series`);
        run(inpNo);
    }
    else{
        console.error("Sorry you have entered a wrong number!");
    }
});

rl.on("close", function() {
    console.log("\nBYE BYE !!!");
    process.exit(0);
});