
var panel1=document.getElementById("panel-1")
var panel2=document.getElementById("panel-2")
var panel3=document.getElementById("panel-3")
var panel4=document.getElementById("panel-4")
var panel5=document.getElementById("panel-5")
var panel6=document.getElementById("panel-6")
var panel7=document.getElementById("panel-7")


// panel1.classList.add('active')- to add class(active)

// var panels= document.getElementsByClassName("panel")-will study later after loops and arrays
function resetactivepanel(){
        panel1.classList.remove('active')
        panel2.classList.remove('active')
        panel3.classList.remove('active')
        panel4.classList.remove('active')
        panel5.classList.remove('active')
        panel6.classList.remove('active')
        panel7.classList.remove('active')
}
function selectpanel(panelId){
        resetactivepanel()
        document.getElementById(panelId).classList.add('active')//bit optimised compared to switch
        // switch(panelno){
        //         case 1:
        //         panel1.classList.add('active')
        //         break
        //         case 2:
        //         panel2.classList.add('active')
        //         break
        //         case 3:
        //         panel3.classList.add('active')
        //         break
        //         case 4:
        //         panel4.classList.add('active')
        //         break
        //         case 5:
        //         panel5.classList.add('active')
        //         break
        // }
}

// document.getElementById("xyz"),classList.add('class2')