

export class Details {
    constructor(){
        

        $('.showMeals').on('click',async (e)=>{
            console.log(e.target);
           
            let mealName = $(e.target).text();
             $('#showSec').css('display','block')
             this.finally = await this.fetchApi(mealName);

             $('#mealNameinDetails').html(`${this.finally.strMeal}`);
             $('#mealImgInDetails').attr('src',`${this.finally.strMealThumb}`)
            $('#areaInDetails').html(`${this.finally.strArea}`)
            $('#instructions').html(`${this.finally.strInstructions}`)
            $('#categorIinDetails').html(`${this.finally.strCategory}`)
           
            $('#source').attr('href',`https://www.bbcgoodfoodme.com/`)
            $('#youtube').attr('href',`${this.finally.strYoutube}`)

            this.createMeasures();

            

             $('#showSec').css('display','none')
            $('#detailsSec').css('display','block')
          
         })

         
        

    }

    createMeasure(oneMeasure){
        let measure = document.createElement('li');
        $(measure).attr('class', 'alert alert-info m-2 p-1');
        $(measure).html(`${oneMeasure}`)
        $('#measures').append(measure)
        
     }

     createMeasures(){
        
        this.createMeasure(`${this.finally.strMeasure1} ` + `${this.finally.strIngredient1}`)
        this.createMeasure(`${this.finally.strMeasure2} ` + `${this.finally.strIngredient2}`)
        this.createMeasure(`${this.finally.strMeasure3} ` + `${this.finally.strIngredient3}`)
        this.createMeasure(`${this.finally.strMeasure4} ` + `${this.finally.strIngredient4}`)
        this.createMeasure(`${this.finally.strMeasure5} ` + `${this.finally.strIngredient5}`)
        this.createMeasure(`${this.finally.strMeasure6} ` + `${this.finally.strIngredient6}`)
        this.createMeasure(`${this.finally.strMeasure7} ` + `${this.finally.strIngredient7}` )
        this.createMeasure(`${this.finally.strMeasure8} ` + `${this.finally.strIngredient8}`)
        this.createMeasure(`${this.finally.strMeasure9} ` + `${this.finally.strIngredient9}`)
        this.createMeasure(`${this.finally.strMeasure10} ` + `${this.finally.strIngredient10}`)
        this.createMeasure(`${this.finally.strMeasure11} ` + `${this.finally.strIngredient11}`)
        this.createMeasure(`${this.finally.strMeasure12} ` + `${this.finally.strIngredient12}`)
        this.createMeasure(`${this.finally.strMeasure13} ` + `${this.finally.strIngredient13}`)
        this.createMeasure(`${this.finally.strMeasure14} ` + `${this.finally.strIngredient14}`)
        this.createMeasure(`${this.finally.strMeasure15} ` + `${this.finally.strIngredient15}`)
     }

    async fetchApi(mealName) {
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`)
        let lastResponse = await response.json()
        let finalRespone = lastResponse.meals[0]
        
        return finalRespone;
    }

    
}