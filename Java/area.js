import { CreateAreas } from "./createAreas.js";
import { CreateElements } from "./createElements.js";


export class Areas{
    constructor(){
        this.areaSec = document.getElementById('areaSec').children[0]
        this.sendAPI();
        $('#areaSec').css('display','block')
        $('#showMeals').css('display','none')
        $('#showCategories').css('display','none')
    
        //  $('#showMeals > .row').html('')
    
        this.showAreaContent();
    }

    async sendAPI() {
        this.api= await 'https://www.themealdb.com/api/json/v1/1/list.php?a=list'
        this.createElements = new CreateAreas(this.api)
    }
    
    async showAreaContent(){
        $('#areaSec').on('click',async (e)=>{
            if (($(e.target).text())!=''){
          
                $('#areaSec').css('display','none')
            $('#showMeals').css('display','block')
             $('#showMeals > .row').html('')
    
            console.log($(e.target).text());
            this.createElements = new CreateElements(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${$(e.target).text()}`)
            }
            
           
         })
    }

}