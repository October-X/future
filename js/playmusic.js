    var audio1 = document.getElementById('audio1'); 
    var audio2 = document.getElementById('audio2');    
    var audio3 = document.getElementById('audio3'); 
    var audio4 = document.getElementById('audio4'); 
    var audio5 = document.getElementById('audio5'); 
    var audio6 = document.getElementById('audio6'); 
function play1(){   
    if(audio1.paused){       
     audio2.pause();audio2.currentTime = 0; 
     audio3.pause();audio3.currentTime = 0;
     audio4.pause();audio4.currentTime = 0;
     audio5.pause();audio5.currentTime = 0;
     audio6.pause();audio6.currentTime = 0; 
     audio1.play();//audio.play();// 播放  
    }
    else{    
     audio1.pause();// 暂停
     document.getElementById('p1').style.content='black';   
    }      
}
function play2(){     
    if(audio2.paused){  
     audio1.pause();audio1.currentTime = 0; 
     audio3.pause();audio3.currentTime = 0;
     audio4.pause();audio4.currentTime = 0;
     audio5.pause();audio5.currentTime = 0;
     audio6.pause();audio6.currentTime = 0;                
     audio2.play();//audio.play();// 播放  
    }
    else{    
     audio2.pause();// 暂停    
    }      
}
function play3(){      
    if(audio3.paused){ 
     audio1.pause();audio1.currentTime = 0; 
     audio2.pause();audio2.currentTime = 0;
     audio4.pause();audio4.currentTime = 0;
     audio5.pause();audio5.currentTime = 0;
     audio6.pause();audio6.currentTime = 0;                 
     audio3.play();//audio.play();// 播放  
    }
    else{    
     audio3.pause();// 暂停    
    }      
}
function play4(){      
    if(audio4.paused){ 
     audio1.pause();audio1.currentTime = 0; 
     audio2.pause();audio2.currentTime = 0;
     audio3.pause();audio3.currentTime = 0;
     audio5.pause();audio5.currentTime = 0;
     audio6.pause();audio6.currentTime = 0;                 
     audio4.play();//audio.play();// 播放  
    }
    else{    
     audio4.pause();// 暂停    
    }      
}
function play5(){       
    if(audio5.paused){   
     audio1.pause();audio1.currentTime = 0; 
     audio2.pause();audio2.currentTime = 0;
     audio3.pause();audio3.currentTime = 0;
     audio4.pause();audio5.currentTime = 0;
     audio6.pause();audio6.currentTime = 0;               
     audio5.play();//audio.play();// 播放  
    }
    else{    
     audio5.pause();// 暂停    
    }      
}
function play6(){       
    if(audio6.paused){   
     audio1.pause();audio1.currentTime = 0;  
     audio2.pause();audio2.currentTime = 0; 
     audio3.pause();audio3.currentTime = 0;
     audio4.pause();audio4.currentTime = 0;
     audio5.pause();audio5.currentTime = 0;             
     audio6.play();//audio.play();// 播放  
    }
    else{    
     audio6.pause();// 暂停    
    }      
}