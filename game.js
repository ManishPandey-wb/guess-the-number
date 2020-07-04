function checkNumber(){
    var answer = getElementById("answer").value;
    var userInput = document.getElementById("user-input").value;

    var msg = document.getElementById("msg");
    var results = document.getElementById("results");

    console.log(userInput);

    

    if(!answer){
        var answer = generateRandomAnswer();
        document.getElementById("answer").value = answer;
    }
    
    console.log(answer);

    if(!validateInput(userInput)){
        msg.innerHTML = "<p class='text-danger'>Number should be 4-digit long </p>"
        return;
    }
    else{
        msg.innerHTML = "";
    }

    var correctDigit = 0;
    var html = '<tr><td>' + userInput +'</td><td>'

    for(let i=0; i < userInput.length; i++){
        if(userInput[i] === answer[i]){
            html = html + '<i class="fa fa-check"></i>';
            correctDigit++;
        } else if(answer.indexOf(userInput[i]) > -1) {
            html = html + '<i class="fa fa-exchange"></i>';
        }
        else{
            html = html + '<i class="fa fa-times"></i>';
        }
    }

    html = html +'</td></tr>'

    results.innerHTML += html;
}

function generateRandomAnswer(){
    var num = (Math.floor(Math.random()* 8900) + 1000).toString();
    return num;
}

function validateInput(str){
    if(str.length == 4)
        return true;
    else
        return false;
}