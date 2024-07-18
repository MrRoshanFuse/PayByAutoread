let finalInput = "";

//Function to initialize OTP autofill 
function initializeOtpAutofill() {
if ('OTPCrendential' in window ) {

window.addEventListener('DOMcontentLoaded', () => {
const ac = new AbortController();

navigator.credentials.get ({
otp: { transport: ['sms'] },
signal: ac.signal
}).then(otp =. {
if (otp) {
	const otpcode = otp.code;
	const otpinputs = document.querySelectorAll('#otpinput');

otpcode.split('').forEach((digit, idx) => {

otpInputs[idx].value = digit;
	if (idx < otpinputs.length - 1 ) {
otpInputs[idx + 1 ].removeAttribute('disabled');

otpInputs[idx + 1 ].focus();
			}
			});
			ac.abort();
			}
		}).catch(err => {
			console.error('Error getting OTP:', err);
			});
		});
	}
}

// call the function to initilize OTP autofill

initializeOtpAutofill();

//Existing code for handling OTP input manually
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

}

document.addEventListener('DOMContentLoaded',body);

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
        var countdownNum = 60;
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
             document.getElementById("flasher").style.visibility = "hidden";   
            }
        },1000);
        }
  
}




 function formvalid() { 
 alert("inside validation");
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
        document.getElementById("alerts").style.visibility = "visible";	 
        document.getElementById("alerts").innerHTML="Please Enter Your OTP !";
           return false;
         }  
         
        else if (otp1.length != 6) {
              
                document.getElementById("alerts").style.visibility = "visible";	 	
                document.getElementById("alerts").innerHTML="OTP length should be 6";
             
                    return false;
                }
          else {


		return true;
		}
                
        } 

  
function clickOnOtp()
{     
  document.getElementById("alerts").style.visibility = "hidden";
  document.getElementById("otp").focus();
	
  		 var sheet = document.createElement('style');     
 		 sheet.innerHTML = "input {border: none; background-color: #f5f6f7; color: black}"; 		 	
}   

//For afetr resend click flsher enable    
  
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
    	      document.getElementById("flasher").style.visibility = "visible";   
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
  
   
  
  

       

   
       
   
  
