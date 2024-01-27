let buttonEle = document.getElementById('btn')

buttonEle.addEventListener( 'click' , () => {
    const Name = document.getElementById('name').value;
    const NameError = document.getElementsByClassName("NameError")
    const Email = document.getElementById("myEmail").value;
    const EmailError = document.getElementsByClassName("EmailError")

    
    NameChecking()

    function NameChecking(){
        // -------  For Name Code 
        if(Name == ''){
            console.log("enter name");
            // Names.style.border = '1px solid red';
            NameError[0].textContent = "! Enter your name"
        } else{
            console.log(Name);
        }

        if(Name != ''){
            NameError[0].textContent = ""
        }
        EmailChecking()
    }

    function EmailChecking(){
        // -------  For Email Code 
        if(Email == ''){
            console.log('Enter your email');
            // Emails.style.border = '1px solid red';
            EmailError[0].textContent = "! Enter your Email"
        }
        if(Email != ''){
            console.log('Enter your email');
            // Emails.style.border = '1px solid red';
            EmailError[0].textContent = ""
        }
        EmaiVerificationl()
    }


    function EmaiVerificationl(){
        // -------  For Email Verification
        if(Email != ''){
            console.log(Email.toLowerCase());
            let EmailLowerCase = Email.toLowerCase()
            var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            if (EmailLowerCase.match(validRegex)) {
                console.log('Correct Email ID');
                SendingEmail()

            } else {
                console.log('InCorrect Email ID');
                EmailError[0].textContent = "! Enter your  correct email"
            }
        }

    }

    function SendingEmail(){
        if(Email != '' && Name != '' ){
            let params = {
                subject: "Message From Portfolio",
                sendername : document.getElementById('name').value,
                message : document.getElementById("myEmail").value,
                Subject : document.getElementById("subject").value,
                Messages : document.getElementById("message").value
            }
        
            emailjs.send("service_v1sa2lt", "template_224p52l", params).then(alert("email has sent"))
            console.log("Sent");
    
        }else{
            console.log("Not Send");
        }
    }
    
    
})

