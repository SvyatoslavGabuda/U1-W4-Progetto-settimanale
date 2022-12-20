const timeLeft = 30;
   let elem = document.getElementById('some_div');
    
    let timerId = setInterval(countdown, 1000);
    
    function countdown() {
      if (timeLeft == -1) {
        clearTimeout(timerId);
        doSomething();
      } else {
        elem.innerHTML = 'seconds'+ timeLeft +  'remaining';
        timeLeft--;
      }
    }
    <div id="some_div">
</div>