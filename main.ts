radio.setGroup(1)

input.onButtonPressed(Button.A,function(){
    radio.sendString("yes")
})
 
 radio.onReceivedString(function(onReceivedString){
     if (onReceivedString == "No"){
         basic.showString("No")
     }
 })