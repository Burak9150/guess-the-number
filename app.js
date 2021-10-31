



let input1=document.getElementById("input")
let tıklama=document.getElementById("button")
let p1=document.getElementsByClassName("p1")[0]
let p2=document.getElementsByClassName("p1")[1]
let p3=document.getElementsByClassName("p3")[0]
let p4=document.getElementsByClassName("p3")[1]
let tahmin=document.getElementById("hid-box4")



tıklama.addEventListener("click",sonuç

)


let t=0
function sonuç() {
    
    let rastgele =Math.round(Math.random()*100+1)
    

    if (input1.value==rastgele) {
        t+=1
        p1.innerHTML=input1.value
        input1.value=""
        tahmin.innerHTML="Tebrikler doğru tahmin  "
    }else{
        if (0<input1.value && input1.value<101) {
            t+=1
            p1.innerHTML=input1.value
            p2.innerHTML=input1.value
            input1.value=""
            // p2.innerHTML=rastgele
            tahmin.innerHTML="Yanlış tahmin sayısı :  "+ t
        }else{
            p1.innerHTML=0
            p2.innerHTML=0
            input1.value=""
            // p2.innerHTML=rastgele
            tahmin.innerHTML="yanlış giriş...\n 1-100 arası sayı giriniz"
        }
  
      
   
    }
    
    let element=document.getElementsByClassName("hid-box")[0];
    let element2=document.getElementsByClassName("hid-box2")[0];
    let element3=document.getElementsByClassName("hid-box1")[0];
    let element4=document.getElementsByClassName("hid-box3")[0];
    console.log(element);
    if(parseInt(t)%2==0){
        console.log(parseInt(t));
        element.style.bottom = "100%"; 
        element2.style.bottom = "100%"; 
        p4.innerHTML=rastgele
        element3.style.bottom = "100%"; 
        element4.style.bottom = "100%"; 
    }
    else if(parseInt(t)%2==1){
        element.style.bottom =  0; 
        element2.style.bottom = 0; 
        p3.innerHTML=rastgele
        element3.style.bottom = 0; 
        element4.style.bottom = 0; 
    }

    }  



    

