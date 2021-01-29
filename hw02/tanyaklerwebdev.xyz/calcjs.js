
var storedNum ='';
var op = '';
var currNum = '';

function pressNum(entry) {
  if (entry=='c') {
    document.getElementById("result").value = '';
    storedNum = '';
    currNum = '';
    op = '';
  } else if (entry=='+=') {

      op = '+';

      storedNum = currNum
      
      currNum = '';
      
      document.getElementById("result").value = storedNum;
    
    } else if (entry=='-' || entry=='*' || entry=='/') {
      
      op = entry;

      storedNum = currNum;

      currNum = '';

      document.getElementById("result").value = storedNum;

  } else if (entry=='.') {
    currNum += entry;
    document.getElementById("result").value = currNum;
  } else {
    currNum += entry;
    currNum = eval(storedNum + op + currNum);
    document.getElementById("result").value = currNum;
    }
}