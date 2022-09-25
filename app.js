var randomNumber = parseInt((Math.random()*100)+1);
// var randomNumber = 55;

var guessed_num = [];
var count = 10;

var result = document.getElementById("result");

function check() {
     var number = +document.getElementById("number").value;

     if (number < 1 || number > 100 || typeof(number)===String) {
          result = "Hãy nhập số trong khoảng từ 1 đến 100"
     } else {
          guessed_num.push(number)
          count--;
          console.log(guessed_num);
          if (number > randomNumber) {
               result = "Hãy nhập số bé hơn"
               document.getElementById("guessed").innerHTML = "Các số đã nhập: " + guessed_num;
               document.getElementById("remain").innerHTML = "Số lần còn lại " + count;
          } else if (number < randomNumber) {
               result = "Hãy nhập số lớn hơn"
               document.getElementById("guessed").innerHTML = "Các số đã nhập: " + guessed_num;
               document.getElementById("remain").innerHTML = "Số lần còn lại " + count;
          } else {
               result = "You Win!!!!"
               document.getElementById("guessBtn").disabled = true;
               document.getElementById("guessed").innerHTML = "Các số đã nhập: " + guessed_num;
               document.getElementById("remain").innerHTML = "Số lần còn lại " + count;
          }
     }

     if (count==0 && number!=randomNumber) {
          document.getElementById("remain").innerHTML = "Số lần còn lại " + count;
          result = "You Lose!!!"
          document.getElementById("guessBtn").disabled = true;
     }

     document.getElementById("number").value ='';

     document.getElementById("result").innerHTML= result;

}

function restart() {
     location.reload();
}



     

