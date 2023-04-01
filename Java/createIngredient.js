

export class CreateIngredients{
    constructor(theAPI){
        this.ingredientsSec = document.getElementById('ingredientsSec').children[0]
        this.theAPI = theAPI
        console.log(this.theAPI);
        this.createIngredients();
    }



    async createIngredient(mealIngredientName,mealIngredientDisc) {
        
        //this function is used to create each element which contains meal img. and name 



        let myIngredient = document.createElement('div')
        $(myIngredient).attr('class','col-md-3 mb-4')
       
        let myIngredientInner = document.createElement('div')
        $(myIngredientInner).attr('class','text-center')

        let ingredientIcon = document.createElement('div')
        $(ingredientIcon).attr('class','each-area')
        let ingredientInnerIcon = document.createElement('i')
        $(ingredientInnerIcon).attr('class','fa-solid fa-drumstick-bite fa-4x')
        $(ingredientInnerIcon).attr('onclick','return false')

        // $(mealImg).attr('src',`${}`)
        let ingredientName = document.createElement('h3')
        $(ingredientName).attr('class','text-white')
        $(ingredientName).text(`${mealIngredientName}`)
        let ingredientDisc = document.createElement('p')
        $(ingredientDisc).attr('class','text-white')
        $(ingredientDisc).text(`${mealIngredientDisc}`)

        $(ingredientIcon).append(ingredientInnerIcon)
        $(myIngredientInner).append(ingredientIcon)
        $(myIngredientInner).append(ingredientName)
        $(myIngredientInner).append(ingredientDisc)

        $(myIngredient).append(myIngredientInner)

        return myIngredient
    }

    async createIngredients() {

        //this fucntion is used to call createIngredient function many times 
    
       let numOfMeals = await this.fetchApi()
    //    let elements = '';
    console.log(numOfMeals.length);
    
       for (let i = 0; i < numOfMeals.length; i++) {
            
        //    elements = await `${(this.createIngredient(numOfMeals.meals[i].strMealThumb,numOfMeals.meals[i].strMeal))}`
        //    this.ingredientsSec.append(elements)
            let disc = numOfMeals[i].strDescription
            let cutDisc = disc.substr(0,130);
          let oneIngredient = await this.createIngredient(numOfMeals[i].strIngredient,cutDisc)
           this.ingredientsSec.append(oneIngredient)
       }
       

    }



    async fetchApi() {
        let response = await fetch(this.theAPI)
        let finalResponse = await response.json()
        return finalResponse.meals;
    }
}