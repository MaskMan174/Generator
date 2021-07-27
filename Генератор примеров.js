function gen(){
    c=getRandomInt(4);
    if (c==0){
        a=getRandomInt(1000);
        b=getRandomInt(1000);
        document.getElementById("pr").innerHTML=a+"+"+b+"=?"
    }
    if (c==1){
        a=getRandomInt(1000);
        do{
        b=getRandomInt(1000);
        }while (b>=a);
        document.getElementById("pr").innerHTML=a+"-"+b+"=?"
    }
    if (c==2){
        do{
            a=getRandomInt(100);
            b=getRandomInt(10);
        }while (b==0)or(a==0);
        document.getElementById("pr").innerHTML=a+"x"+b+"=?"
    }
    if (c==3){
        do{
            a=getRandomInt(100);
            b=getRandomInt(10);
        }while (b==0)or(a==0);
        document.getElementById("pr").innerHTML=a+":"+b+"=?"
    }
    с=5;
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
document.addEventListener('keyup', function(event){
    if(event.key=="Enter"){
       gen();
    }
});