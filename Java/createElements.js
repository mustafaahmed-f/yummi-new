

export class CreateElements {
    constructor(theAPI){
        this.showMeals = document.getElementById('showMeals').children[0]
        this.theAPI = theAPI
        console.log(this.theAPI);
        this.createElements();
    }


    async createElement(mealImgSrc,mealNameSrc) {

        //this function is used to create each element which contains meal img. and name 

        let myMeal = document.createElement('div')
        $(myMeal).attr('class','col-md-3 mb-4 eachMeal')
       
        let myMealInner = document.createElement('div')
        $(myMealInner).attr('class','meals1  w-100 position-relative overflow-hidden rounded-3')
        let mealImg = document.createElement('img')
        $(mealImg).attr('class','w-100 ')
        $(mealImg).attr('src',`${mealImgSrc}`)
        let mealName = document.createElement('h3')
        $(mealName).text(`${mealNameSrc}`)
        let mealNameContainer = document.createElement('div')
        $(mealNameContainer).attr('class','position-absolute meals1-disc p-2 d-flex align-items-center w-100 h-100')
        $(mealNameContainer).html(mealName)
        $(myMealInner).append(mealImg)
        $(myMealInner).append(mealNameContainer)
        $(myMeal).append(myMealInner)
       
        // this.showMeals.append(myMeal)
        return myMeal
    }

    async createElements() {

        //this fucntion is used to call createElement function many times 
    
       let numOfMeals = await this.fetchApi()
    //    let elements = '';
    
    
       for (let i = 0; i < numOfMeals.length; i++) {
            
        //    elements = await `${(this.createElement(numOfMeals.meals[i].strMealThumb,numOfMeals.meals[i].strMeal))}`
        //    this.showMeals.append(elements)

          let oneElement = await this.createElement(numOfMeals[i].strMealThumb,numOfMeals[i].strMeal)
           this.showMeals.append(oneElement)
       }
       

    }



    async fetchApi() {
        let response = await fetch(this.theAPI)
        let finalResponse = await response.json()
        return finalResponse.meals;
    }
}