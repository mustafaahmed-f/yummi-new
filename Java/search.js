import { CreateElements } from "./createElements.js"


export class Search{
    constructor(){
        this.search = document.getElementById('search')
        this.searchByName=document.getElementById('searchByName')
        this.searchByFL=document.getElementById('searchByFirstLetter')
        
        this.searchByName.addEventListener('keyup',async ()=>{
            // this.response = await this.SearchByNameAPI(this.searchByName.value)
            $('#showMeals').css('display','block')
            $('#showMeals > .row').html('')

            this.SearchByNameAPIvar= await `https://www.themealdb.com/api/json/v1/1/search.php?s=${this.searchByName.value}`
            this.createElements = new CreateElements(this.SearchByNameAPIvar)
            console.log(this.SearchByNameAPIvar);
            // $('.showMeals').css('display','block')

        })

        this.searchByFL.addEventListener('keyup',async ()=>{
            $('#showMeals').css('display','block')
              $('#areaSec').css('display','none')

            $('#showMeals > .row').html('')
            
            if (this.searchByFL.value==''){this.SearchByFLAPIvar= await `https://www.themealdb.com/api/json/v1/1/search.php?f=a`}
            
            else {
            this.SearchByFLAPIvar= await `https://www.themealdb.com/api/json/v1/1/search.php?f=${this.searchByFL.value}`

            }
            this.createElements = new CreateElements(this.SearchByFLAPIvar)


            
        })


        
        
    }

    


   async SearchByNameAPI(mealName){
        let reponse = await fetch (`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`)
        let lastResponse = await reponse.json();
        let meals = await lastResponse.meals
        // return meals;
        console.log(meals);
        return meals;
    }

    

    async SearchByFLAPI(letter){
       
        let reponse = await fetch (`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
        let lastResponse = await reponse.json();
        let meals = await lastResponse.meals
        // return meals;
      
        console.log(meals);
        return meals;

    }


}