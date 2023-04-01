import { CreateCategories } from "./createCategories.js";
import { CreateElements } from "./createElements.js"


export class Catrgories{
constructor(){
    this.showMeals = document.getElementById('showMeals').children[0]
    this.sendAPI();
    $('#showCategories').css('display','block')
    $('#showMeals').css('display','none')
    $('#areaSec').css('display','none')

    //  $('#showMeals > .row').html('')

    this.showCategoryContent();
     
}

async sendAPI() {
    this.api= await 'https://www.themealdb.com/api/json/v1/1/categories.php'
    this.createElements = new CreateCategories(this.api)
}

async showCategoryContent(){
    $('#showCategories').on('click',async (e)=>{

        if (($(e.target).text())!=''){
            $('#showCategories').css('display','none')
            $('#showMeals').css('display','block')
             $('#showMeals > .row').html('')
    
            console.log($(e.target).text());
            this.createElements = new CreateElements(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${$(e.target).text()}`)
        }
       
     })
}
}