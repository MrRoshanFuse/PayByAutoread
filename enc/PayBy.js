let finalInput = "";

function body() 
{
  const inputs = document.querySelectorAll("input"),
  button = document.querySelector("button");
inputs.forEach((input, index1) => {
  input.addEventListener("keyup", (e) => {
    const currentInput = input,
      nextInput = input.nextElementSibling,
      prevInput = input.previousElementSibling;
    if (currentInput.value.length > 1) {
      currentInput.value = "";
      return;
    }
    if (nextInput && nextInput.hasAttribute("disabled") && currentInput.value !== "") {
   // alert("remove disable")
      nextInput.removeAttribute("disabled");
      nextInput.focus();
    }
    if (e.key === "Backspace") {
      inputs.forEach((input, index2) => {
        if (index1 <= index2 && prevInput) {
          input.setAttribute("disabled", true);
          input.value = "";
          prevInput.focus();
        }
      });
    }
   
  });
});

  window.addEventListener("keyup", (e) => {
    if (inputCount > 5) {
     // submitButton.classList.remove("hide");
      //submitButton.classList.add("show");
      //submitButton.disabled=false;
      if (e.key == "Backspace") {
        finalInput = finalInput.substring(0, finalInput.length - 1);
        updateInputConfig(inputField.lastElementChild, false);
        inputField.lastElementChild.value = "";
        inputCount -= 1;
        submitButton.classList.add(disabled);
      }
    }
  });
  
    setTimeout (function(){
        },60000);
        var countdownNum = 5;
        incTimer();
        function incTimer(){
        setTimeout (function(){
            if(countdownNum != 0)
            {
              countdownNum--;
              document.getElementById("resend").style.visibility = "hidden";
             document.getElementById('timer').innerHTML = countdownNum + ' seconds';          
             incTimer();
            }
            else
            {
           document.getElementById("flasher").style.margin = "0px";
             document.getElementById("resend").style.visibility = "visible";
             document.getElementById("flashertimer").style.visibility = "hidden";   
            }
        },1000);
        }
  

}


 function formvalid() { 
 
 const inputs = document.querySelectorAll('input[type="password"]');
        const values = [];
  
        inputs.forEach(input => {
          values.push(input.value);
        });           
        textOtp=values.join('');
        var otpField=document.getElementById("OTP");
        otpField.value=textOtp;
        var getOtp=document.getElementById("OTP").value;
        otp1 =getOtp;
        
         if(otp1.length==0||otp1.length==null)
        {
        showMessage("Please Enter Your OTP !");
           return false;
         }  
         
        else if (otp1.length != 6) {
                alert('OTP length should be minimum 6');
                    return false;
                }
        else if (!(otp1.match(regexp1)))
          {
             alert("only numbers are allowed");
              return false;
          }
          else {

               // alert("else block");
		return true;
		}
                
        } 

  
function clickOnOtp()
{     
  document.getElementById("in").focus();
	
  		 var sheet = document.createElement('style');     
 		 sheet.innerHTML = "input {border: 1px solid white; background-color:#f5f6f7;; color: black}";
  		 document.body.appendChild(sheet);   
  	         document.getElementById("flasher").style.visibility = "hidden";   
    	   	  document.getElementById("flasher").style.marginTop="0px";	    
	
}   

//For afetr resend click flsher enable    
  function flashEnable()
    {
   //alert("RESEND )";
     setTimeout (function(){
        },60000);
        var countdownNum = 6;
        incTimer();
        function incTimer(){
        setTimeout (function(){
            if(countdownNum != 0){

            countdownNum--;
             document.getElementById("resend").style.visibility = "hidden";
    	     document.getElementById("flasher").style.visibility = "visible";   
    	     document.getElementById("flasher").style.marginTop="16px";	    
            document.getElementById('timer').innerHTML = countdownNum + ' seconds';          
            incTimer();
            }
        },1000);
       }    
    }  
 
  function flashEnable()
    {
    
     setTimeout (function(){
        },60000);
        var countdownNum = 60;
        incTimer();
        function incTimer(){
        setTimeout (function(){
            if(countdownNum != 0)
            {
              countdownNum--;
              document.getElementById("resend").style.visibility = "hidden";
    	      document.getElementById("flasher_timer").style.visibility = "visible";   
    	      document.getElementById("flasher").style.visibility = "hidden";	    
    	      document.getElementById("flasher").style.margin = "0px";
             document.getElementById('timer').innerHTML = countdownNum + ' seconds';          
             incTimer();
            }
            else
            {
            
             document.getElementById("resend").style.visibility = "visible";
             document.getElementById("flasher_timer").style.visibility = "hidden";   
            }
        },1000);
        }
     
    }
    
    function f1()
  {
        var otpField=document.getElementById("OTP");
        otpField.value="";
  }
 
     
