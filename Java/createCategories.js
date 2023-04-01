

export class CreateCategories{
    constructor(theAPI){
        this.showCategories = document.getElementById('showCategories').children[0]
            this.theAPI = theAPI
            console.log(this.theAPI);
            this.createCategories();
    }

    async createCategory(categoryImgSrc,categoryNameSrc) {

        //this function is used to create each element which contains meal img. and name 

        let myMeal = document.createElement('div')
        $(myMeal).attr('class','col-md-3 mb-4 eachMeal')
       
        let myMealInner = document.createElement('div')
        $(myMealInner).attr('class','meals1  w-100 position-relative overflow-hidden rounded-3')
        let mealImg = document.createElement('img')
        $(mealImg).attr('class','w-100 ')
        $(mealImg).attr('src',`${categoryImgSrc}`)
        let mealName = document.createElement('h3')
        $(mealName).text(`${categoryNameSrc}`)
        let mealNameContainer = document.createElement('div')
        $(mealNameContainer).attr('class','position-absolute meals1-disc p-2 d-flex align-items-center w-100 h-100')
        $(mealNameContainer).html(mealName)
        $(myMealInner).append(mealImg)
        $(myMealInner).append(mealNameContainer)
        $(myMeal).append(myMealInner)
       
        // this.showCategories.append(myMeal)
        return myMeal
    }

    async createCategories() {

        //this fucntion is used to call createElement function many times 
    
       let numOfMeals = await this.fetchApi()
    //    let elements = '';
    
       for (let i = 0; i < numOfMeals.length; i++) {
            
        //    elements = await `${(this.createElement(numOfMeals.meals[i].strMealThumb,numOfMeals.meals[i].strMeal))}`
        //    this.showCategories.append(elements)

          let oneElement = await this.createCategory(numOfMeals[i].strCategoryThumb,numOfMeals[i].strCategory)
           this.showCategories.append(oneElement)
       }
       

    }



    async fetchApi() {
        let response = await fetch(this.theAPI)
        let finalResponse = await response.json()
        return finalResponse.categories;
    }
}