  export class Recipes {
  constructor(data) {
    this.name = data.name;
    this.ingredients = data.ingredients;
    this.time = data.time;
    this.description = data.description;
  }
  
  getRecipesDOM() {
    return `
            <article>
                <div class="back"></div>
                <div class="information">
                    <p id="name">${this.name}</p>
                    <div class="time">
                        <i class="fa-regular fa-clock"></i>
                        <p>${this.time}min</p>
                    </div>
                </div>
                <div class="description">
                    <div class="recipes">
                      ${this.ingredients.map(function(ingredient) {
                                            if(ingredient.quantity === undefined && ingredient.unit === undefined){
                                              return `<p>${ingredient.ingredient}</p>`
                                            } else if (ingredient.unit === undefined){
                                                return `<p>${ingredient.ingredient} : ${ingredient.quantity}</p>`
                                            }
                                            return `<p>${ingredient.ingredient}: ${ingredient.quantity} ${ingredient.unit}</p>`             
                                                  })
                                        .join("")
                      }
                    </div>
                    <p class="recette">${this.description}</p>
                </div>
            </article>
            `;
    }
  }
 
 
