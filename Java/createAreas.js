

export class CreateAreas{
    constructor(theAPI){
        this.areaSec = document.getElementById('areaSec').children[0]
        this.theAPI = theAPI
        console.log(this.theAPI);
        this.createAreas();
    }



    async createArea(mealArea) {

        //this function is used to create each element which contains meal img. and name 

        let myArea = document.createElement('div')
        $(myArea).attr('class','col-md-3 mb-4')
        // $(myArea).attr('id','eachArea')
       
        let myAreaInner = document.createElement('div')
        $(myAreaInner).attr('class','text-center')

        let areaIcon = document.createElement('div')
        $(areaIcon).attr('class','each-area')
        let areaInnerIcon = document.createElement('i')
        $(areaInnerIcon).attr('class','fa-solid fa-house-laptop')
        $(areaInnerIcon).attr('onclick','return false')
        // $(mealImg).attr('src',`${}`)
        let areaName = document.createElement('h3')
        $(areaName).attr('class','text-white')
        $(areaName).text(`${mealArea}`)

        $(areaIcon).append(areaInnerIcon)
        $(myAreaInner).append(areaIcon)
        $(myAreaInner).append(areaName)
        $(myArea).append(myAreaInner)

        return myArea
    }

    async createAreas() {

        //this fucntion is used to call createArea function many times 
    
       let numOfMeals = await this.fetchApi()
    //    let elements = '';
    console.log(numOfMeals.length);
    
       for (let i = 0; i < numOfMeals.length; i++) {
            
        //    elements = await `${(this.createArea(numOfMeals.meals[i].strMealThumb,numOfMeals.meals[i].strMeal))}`
        //    this.areaSec.append(elements)

          let oneArea = await this.createArea(numOfMeals[i].strArea)
           this.areaSec.append(oneArea)
       }
       

    }



    async fetchApi() {
        let response = await fetch(this.theAPI)
        let finalResponse = await response.json()
        return finalResponse.meals;
    }
}