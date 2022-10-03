import { Recipes } from "./Factory/recipeFactory.js";
import { recipes } from "./recipes.js";

const section = document.querySelector(".article_container")
let currentRecipes = recipes
const displayReceipes = () => {
    section.innerHTML=""
    currentRecipes.forEach((recipe) => {
        const recipeFac = new Recipes(recipe)
        const articleRecipe = recipeFac.getRecipesDOM()
        section.innerHTML += articleRecipe
    })
} 
const rechecheBarre = () => {
    const search = document.querySelector(".main_search"); 
    search.addEventListener("keyup", function(e){
        const userValue = e.target.value
            if(userValue.length >= 3){
                let filterEntries = currentRecipes.filter(el => el.name.toLowerCase().includes(userValue) || el.description.toLowerCase().includes(userValue))
                currentRecipes = filterEntries
                console.log(currentRecipes)
                displayReceipes()
        } 
             else {
                section.innerHTML = `
                    <div class=""erreur_container">
                        <p class="erreur"> Aucune recette ne correspond à votre critère... Vous pouvez chercher « tarte aux pommes », « poisson », etc... </p>
                    </div>
                `
            } 
    })
    
}
function inputIngredient(ingredientSort){
    const input = document.querySelector(".ingredients")
    const ingr = document.querySelector(".ingr_list")
    ingredientSort.forEach((ingrS)=>{
        ingr.innerHTML += `
        <li class="ingredient_list">${ingrS}</li>
        `
    })
    
    input.addEventListener("input", function(e){
        const test = document.querySelectorAll(".ingredient_list")
        const valueTarget = e.target.value.toLowerCase()
        test.forEach((ingredient) => {
                if(ingredient.innerHTML.toLowerCase().includes(valueTarget)){
                    ingredient.style.display='block'
                } else {
                    ingredient.style.display="none"
                }
        })
    })
}
function inputAppareils(applianceSort){
    let input = document.querySelector(".appareils")
    const appareils = document.querySelector(".app_list")
    applianceSort.forEach((appliance) => {
        appareils.innerHTML += `
        <li class="appliance_list">${appliance}</li>
        `
    })
    input.addEventListener("input", function(e){
        const appContainer = document.querySelectorAll(".appliance_list")
        const valueTarget = e.target.value
        appContainer.forEach((appliance) => {
            if(appliance.innerHTML.toLowerCase().includes(valueTarget)){
                appliance.style.display='block'
            } else {
                appliance.style.display="none"
            }
        })
    })



    
}  
function inputUstensil(ustensilSort){
    let input = document.querySelector(".ustensiles");
    const ustensils = document.querySelector(".ust_list");
    ustensilSort.forEach((ustensil) => {
        ustensils.innerHTML += `
            <li class="ustensiles_list">${ustensil}</li>
        `
    })
    input.addEventListener("input", function(e){
        const ustContainer = document.querySelectorAll(".ustensiles_list")
        const valueTarget = e.target.value
        ustContainer.forEach((ustensil) => {
            if(ustensil.innerHTML.toLowerCase().includes(valueTarget)){
                ustensil.style.display="block"
            } else {
                ustensil.style.display="none"
            }
        })

    })
    
} 


const filterArray = () => {
    let ingredientList = []
    let applianceList = []
    let ustensilList = []
   currentRecipes.forEach((element) => {
    const {ingredients, ustensils} = element
    ingredientList = [...ingredientList, ...ingredients.map((ingredient) => ingredient.ingredient)]
    applianceList = [...currentRecipes.map((appliance) => appliance.appliance)]
    ustensilList = [...ustensilList,...ustensils.map((ustensils) => ustensils)]
})
   ingredientList = new Set([...ingredientList])
   applianceList = new Set([...applianceList])
   ustensilList = new Set ([...ustensilList])
   let ingredientSort = Array.from(ingredientList).sort((a,b) => a.localeCompare(b));
   const applianceSort = Array.from(applianceList).sort((a,b) => a.localeCompare(b));
   const ustensilSort = Array.from(ustensilList).sort((a,b) => a.localeCompare(b));
   inputIngredient(ingredientSort)
   inputAppareils(applianceSort);
   inputUstensil(ustensilSort);
}


const init = () => {
    rechecheBarre()
    displayReceipes()
    filterArray()
}
init()