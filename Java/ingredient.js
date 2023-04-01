import { CreateElements } from "./createElements.js";
import { CreateIngredients } from "./createIngredient.js";


export class Ingredient{
    constructor(){
        this.areaSec = document.getElementById('areaSec').children[0]
        this.sendAPI();
        $('#ingredientsSec').css('display','block')
        $('#areaSec').css('display','none')
        $('#showMeals').css('display','none')
        $('#showCategories').css('display','none')

    
       
    
        this.showIngredient();
    }

    async sendAPI() {
        this.api= await 'https://www.themealdb.com/api/json/v1/1/list.php?i=list'
        this.createElements = new CreateIngredients(this.api)
    }
    
    async showIngredient(){
        $('#ingredientsSec').on('click',async (e)=>{
            if (($(e.target).text())!='' && ($(e.target).text().length)<129){
                $('#ingredientsSec').css('display','none')
                $('#showMeals').css('display','block')
                 $('#showMeals > .row').html('')
        
             
                this.createElements = new CreateElements(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${$(e.target).text()}`)
            }
            
         })
    }


}