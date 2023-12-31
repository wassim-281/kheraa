const elhour=document.getElementById('hour')
const elMinuts=document.getElementById('minutes')
const elSecound=document.getElementById('secounds')

setInterval(()=>{
    let time= new Date()
    let secounds=time.getSeconds()
    let minuts=time.getMinutes()
    let hour=time.getHours()
    
    
    elhour.innerHTML=hour+':'
    elMinuts.innerHTML=minuts+':'
    elSecound.innerHTML=secounds



},1000)

