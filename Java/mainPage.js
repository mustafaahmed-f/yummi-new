import { Areas } from "./area.js";
import { Catrgories } from "./categories.js";
import { Contact } from "./contact.js";
import { CreateElements } from "./createElements.js";
import { Details } from "./details.js";
import { Ingredient } from "./ingredient.js";
import { NavBar } from "./navBar.js";
import { Search } from "./search.js";

export class mainPage {
    constructor(){
        this.showMeals = document.getElementById('showMeals').children[0]
        $(document).ready(()=>{
            $('#loader').fadeOut((500),async ()=>{
                $('#showSec').css('display','block')
               
               
            })
        })     
        
        this.mainApi = `https://www.themealdb.com/api/json/v1/1/search.php?s=`;

        this.createElements = new CreateElements(this.mainApi);

       $('#search').on('click',()=>{
        $('section').css('display','none')
        $('#showSec').css('display','block')
        $('#showMeals').css('display','none')
        $('.searchBar').css('display','block')
          $('#areaSec').css('display','none')
          $('#ingredientsSec').css('display','none')

       this.search = new Search();

       })

       $('#categories').on('click',()=>{
        $('section').css('display','none')
        $('#showSec').css('display','block')
        $('#showMeals').css('display','block')
        $('.searchBar').css('display','none')
        $('#areaSec').css('display','none')
        $('#ingredientsSec').css('display','none')

       this.category = new Catrgories();

       })

       $('#area').on('click',()=>{
        $('section').css('display','none')
        $('#showSec').css('display','block')
        $('#showMeals').css('display','block')
        $('.searchBar').css('display','none')
        $('#areaSec').css('display','block')
        $('#ingredientsSec').css('display','none')

        this.area = new Areas();
       })

       $('#ingredients').on('click',()=>{
        $('section').css('display','none')
        $('#showSec').css('display','block')
        $('#showMeals').css('display','block')
        $('.searchBar').css('display','none')
        $('#areaSec').css('display','none')
        $('#ingredientsSec').css('display','block')

        this.ingredient = new Ingredient();

       })


       this.navBar = new NavBar();

        this.details=new Details();
        this.contact = new Contact();

        
    }

    
}
