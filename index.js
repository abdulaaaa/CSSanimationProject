let score =0;
const addscore = () =>{
    score++;
    document.getElementById("score").innerHTML = score;
}

const reset = () =>{
    score =0;
    document.getElementById("score").innerHTML = score;
}