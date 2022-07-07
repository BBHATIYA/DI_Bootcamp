

let inp = document.getElementById('input')
      inp.addEventListener("keypress", remnum);
      function remnum(ev){
        if(!(((ev.keyCode >= 65) && (ev.keyCode <= 90)) || ((ev.keyCode >= 97) && (ev.keyCode <= 122)))){
          ev.preventDefault()
        }
      }