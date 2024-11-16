let sec = 0
var min = 0
var hor = 0 
var interval 
function twodigits (digit) {
    if (digit<10) {
        return ('0'+digit)
    } else {
        return (digit)
    }
}
function start () {
    watch()
    interval = setInterval(watch, 1000)
}

function pause () {
    clearInterval (interval)
}

function stop () {
    clearInterval (interval)
     sec= 0
     min= 0
     document.getElementById('watch').innerText="00:00:00"
}

function watch () {
       sec++
       if (sec==60) {
          min++
          sec=0 
          if (min == 60){
            hor++
            min=0
         } 
       }
       document.getElementById('watch').innerText=twodigits(hor)+':'+twodigits(min) +':'+twodigits(sec)
}

