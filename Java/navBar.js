

export class NavBar {
    constructor(){
        this.closeBtn=document.getElementById('closeBtn')
        
        this.innerwidthLeftNav = $('.nav-left').innerWidth();
       
        

        this.closeBtn.addEventListener('click',()=>{
            if ($('.sideNavBar').css('left')=='0px'){
                $('.sideNavBar').animate({left : `-${this.innerwidthLeftNav}`},700)
                $('.links > ul > li').animate({top : `300`},700)
                $('#closeBtn').html('☰')
            }
            else {
                $('#closeBtn').html('<i class="fa-solid fa-close"></i>')
                $('.sideNavBar').animate({left : `0`},300 , ()=> {
                    $('.links > ul > li').eq(0).animate({top : `0`},150 , ()=> {
                        $('.links > ul > li').eq(1).animate({top : `0`},150 , ()=> {
                            $('.links > ul > li').eq(2).animate({top : `0`},150 , ()=>{
                                $('.links > ul > li').eq(3).animate({top : `0`},150 , ()=>{
                                    $('.links > ul > li').eq(4).animate({top : `0`},150)
                                    
                                    
                                })
                            })
                        })
    
                    })
                })
                
                
            }
            

        })

    }

    
    
}