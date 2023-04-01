

export class Contact {
    constructor(){

        this.contactName=document.getElementById('contactName')
        this.contactEmail=document.getElementById('contactEmail')
        this.contactPhone=document.getElementById('contactPhone')
        this.contactAge=document.getElementById('contactAge')
        this.contactPassword=document.getElementById('contactPassword')
        this.contactRepassword=document.getElementById('contactRepassword')

        
        $('#contactUs').on('click',()=>{
            $('section').css('display','none')
            $('#contactSec').css('display','block')
        })

        $(this.contactPhone).on('keyup',()=>{
            this.checkphoneNumber();
            this.enableButton();
        })
        $(this.contactName).on('keyup',()=>{
            this.checkName();
            this.enableButton();
        })
        $(this.contactEmail).on('keyup',()=>{
            this.checkEmail();
            this.enableButton();
        })
        $(this.contactAge).on('keyup',()=>{
            this.checkAge();
            this.enableButton();
        })
        $(this.contactPassword).on('keyup',()=>{
            this.checkPassword();
            this.enableButton();
        })
        $(this.contactRepassword).on('keyup',()=>{
            this.checkRePassword();
            this.enableButton();
        })

        
    
    }

    enableButton(){
        if ($(this.submitBtn).hasClass('disabled')){
            if (this.checkphoneNumber() && this.checkName() && this.checkEmail() && this.checkAge() && this.checkPassword() && this.checkRePassword()){
                $(this.submitBtn).removeClass('disabled')
            }
        }
        
        else{
            if (!this.checkphoneNumber() || !this.checkName() || !this.checkEmail() || !this.checkAge() || !this.checkPassword() || !this.checkRePassword()){
                $(this.submitBtn).addClass('disabled')
            }
        }
    }

    checkphoneNumber(){
        let regx = /^[0-9]{10,12}$/
        if (regx.test(this.contactPhone.value)){
            $('#phoneAlert').css('display','none')
            return true;
        }
        else{
            $('#phoneAlert').css('display','block')
            return false
        }
    }
    checkName(){
        let regx = /^[a-zA-Z]{1,}$/
        if (regx.test(this.contactName.value)){
            $('#nameAlert').css('display','none')
           return true
        }
        else{
            $('#nameAlert').css('display','block')
            console.log(this.contactName.value);
           return false
        }
    }
    checkEmail(){
        let regx = /^[a-zA-Z]{1,}@[a-zA-Z]{1,}\.[a-zA-Z]{1,}$/
        if (regx.test(this.contactEmail.value)){
            $('#emailAlert').css('display','none')
            return true;
        }
        else{
            $('#emailAlert').css('display','block')
            console.log(this.contactEmail.value);
           return false
        }
    }
    checkAge(){
        let regx = /^([1-9]|[1-9][0-9])$/
        if (regx.test(this.contactAge.value)){
            $('#ageAlert').css('display','none')
           return true
        }
        else{
            $('#ageAlert').css('display','block')
            console.log(this.contactAge.value);
             return false
    }
    }
    checkPassword(){
        let regx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
        if (regx.test(this.contactPassword.value)){
            $('#passwordAlert').css('display','none')
           return true
        }
        else{
            $('#passwordAlert').css('display','block')
            console.log(this.contactPassword.value);
             return false
    }
    }
    checkRePassword(){
        if(this.contactRepassword.value==this.contactPassword.value){
            $('#repasswordAlert').css('display','none')
            return true
        }
        else{
            $('#repasswordAlert').css('display','block')
            return false
        }
    }

    
}