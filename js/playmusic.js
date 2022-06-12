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
     document.getElementById("content").innerHTML = document.getElementById("content").textContent='play：白月光与朱砂痣';
    }
    else{    
     audio1.pause();// 暂停
     document.getElementById("content").innerHTML = document.getElementById("content").textContent='suspend：白月光与朱砂痣';  
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
     document.getElementById("content").innerHTML = document.getElementById("content").textContent='play：烟火星辰';
    }
    else{    
     audio2.pause();// 暂停    
     document.getElementById("content").innerHTML = document.getElementById("content").textContent='suspend：烟火星辰';
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
     document.getElementById("content").innerHTML = document.getElementById("content").textContent='play：星辰不坠落';
    }
    else{    
     audio3.pause();// 暂停    
     document.getElementById("content").innerHTML = document.getElementById("content").textContent='suspend：星辰不坠落';
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
     document.getElementById("content").innerHTML = document.getElementById("content").textContent='play：情结'; 
    }
    else{    
     audio4.pause();// 暂停
     document.getElementById("content").innerHTML = document.getElementById("content").textContent='suspend：情结';    
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
     document.getElementById("content").innerHTML = document.getElementById("content").textContent='play：此生不换';
    }
    else{    
     audio5.pause();// 暂停    
     document.getElementById("content").innerHTML = document.getElementById("content").textContent='suspend：此生不换';
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
     document.getElementById("content").innerHTML = document.getElementById("content").textContent='play：The Way I Still Love You';
    }
    else{    
     audio6.pause();// 暂停  
     document.getElementById("content").innerHTML = document.getElementById("content").textContent='suspend：The Way I Still Love You';  
    }  
}