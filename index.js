import { Recipes } from "./Factory/recipeFactory.js";
import { recipes } from "./recipes.js";

let section = document.querySelector(".article_container");
let currentRecipes = recipes;
const displayReceipes = () => {
  section.innerHTML = "";
  currentRecipes.forEach((recipe) => {
    const recipeFac = new Recipes(recipe);
    const articleRecipe = recipeFac.getRecipesDOM();
    section.innerHTML += articleRecipe;
  });
};

const searchAlgo = (e) => {
  let filterEntries = [];
  const userValue = e.target.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  if (userValue.length >= 3) {
    currentRecipes = [...recipes]
    filterEntries = currentRecipes.filter(
      (el) =>
        el.name.toLowerCase().includes(userValue) ||
        el.description.toLowerCase().includes(userValue) ||
        el.ingredients.some((ingredient) =>
          ingredient.ingredient.toLowerCase().includes(userValue)
        )
    );
    currentRecipes = [...filterEntries];

    const tagArrayIngredient = document.querySelectorAll(".tag_value_ingredient");
    const tagArrayUstensils = document.querySelectorAll(".tag_value_ustensils");
    const tagArrayAppareil = document.querySelectorAll(".tag_value_appareil");

    tagArrayIngredient.forEach((tagArr) => {
      console.log(tagArr.innerHTML.toLowerCase());
      currentRecipes = currentRecipes.filter((elTag) =>
        elTag.ingredients.some((ingredient) =>
          ingredient.ingredient
            .toLowerCase()
            .includes(tagArr.innerHTML.toLowerCase())
        )
      );
    });

    tagArrayUstensils.forEach((tagArr) => {
      console.log(tagArr.innerHTML.toLowerCase());
      currentRecipes = currentRecipes.filter((elTag) =>
        elTag.ustensils.some((ust) =>
          ust.toLowerCase().includes(tagArr.innerHTML.toLowerCase())
        )
      );
    });

    tagArrayAppareil.forEach((tagArr) => {
      console.log(tagArr.innerHTML.toLowerCase());
      currentRecipes = currentRecipes.filter((elTag) =>
        elTag.appliance.toLowerCase().includes(tagArr.innerHTML.toLowerCase())
      );
    });
    
    filterArray();
    displayReceipes();
  } else if (userValue.length < 3) {
    currentRecipes = recipes;

    const tagArrayIngredient = document.querySelectorAll(".tag_value_ingredient");
    const tagArrayUstensils = document.querySelectorAll(".tag_value_ustensils");
    const tagArrayAppareil = document.querySelectorAll(".tag_value_appareil");

    tagArrayIngredient.forEach((tagArr) => {
      console.log(tagArr.innerHTML.toLowerCase());
      currentRecipes = currentRecipes.filter((elTag) =>
        elTag.ingredients.some((ingredient) =>
          ingredient.ingredient
            .toLowerCase()
            .includes(tagArr.innerHTML.toLowerCase())
        )
      );
    });

    tagArrayUstensils.forEach((tagArr) => {
      console.log(tagArr.innerHTML.toLowerCase());
      currentRecipes = currentRecipes.filter((elTag) =>
        elTag.ustensils.some((ust) =>
          ust.toLowerCase().includes(tagArr.innerHTML.toLowerCase())
        )
      );
    });

    tagArrayAppareil.forEach((tagArr) => {
      console.log(tagArr.innerHTML.toLowerCase());
      currentRecipes = currentRecipes.filter((elTag) =>
        elTag.appliance.toLowerCase().includes(tagArr.innerHTML.toLowerCase())
      );
    });

    displayReceipes();
    filterArray();
  }
  if (section.innerHTML === "") {
    section.innerHTML += `
      <p class="erreur"> Aucune recette ne correspond à votre critère... Vous pouvez chercher « tarte aux pommes », « poisson », etc... </p>
      `;
  }
};
const rechecheBarre = () => {
  const search = document.querySelector(".main_search");
  search.addEventListener("keyup", searchAlgo);
};

const createTag = (ingredient) => {
  const tagContainer = document.querySelector(".tag_container");
  const createDiv = document.createElement("div")
  createDiv.setAttribute("class","tag_ingredient")
  const createSpan = document.createElement("span")
  createSpan.setAttribute("class", "tag_value_ingredient")
  const icon = document.createElement("i")
  icon.setAttribute("class","fa-regular fa-circle-xmark icon")
  tagContainer.appendChild(createDiv)
  createDiv.appendChild(createSpan)
  createDiv.appendChild(icon)
  createSpan.innerHTML += ingredient
  const tagActiveIngr = document.querySelectorAll(`.tag_ingredient`);
  tagActiveIngr.forEach((tagAct) => {
    tagAct.addEventListener("click", function () {
      tagAct.remove();
      const userValue = document.querySelector(".main_search").value;
      let filterEntries = [];
      filterEntries = recipes.filter(
        (el) =>
          el.name.toLowerCase().includes(userValue) ||
          el.description.toLowerCase().includes(userValue) ||
          el.ingredients.some((ingredient) =>
            ingredient.ingredient.toLowerCase().includes(userValue)
          )
      );
      console.log(filterEntries);
      currentRecipes = [...filterEntries];
      console.log(currentRecipes);
      const tagArrayIngredient = document.querySelectorAll(
        ".tag_value_ingredient"
      );
      const tagArrayUstensils = document.querySelectorAll(
        ".tag_value_ustensils"
      );
      const tagArrayAppareil = document.querySelectorAll(".tag_value_appareil");
      tagArrayIngredient.forEach((tagArr) => {
        console.log(tagArr.innerHTML.toLowerCase());
        currentRecipes = currentRecipes.filter((elTag) =>
          elTag.ingredients.some((ingredient) =>
            ingredient.ingredient
              .toLowerCase()
              .includes(tagArr.innerHTML.toLowerCase())
          )
        );
      });
      tagArrayUstensils.forEach((tagArr) => {
        console.log(tagArr.innerHTML.toLowerCase());
        currentRecipes = currentRecipes.filter((elTag) =>
          elTag.ustensils.some((ust) =>
            ust.toLowerCase().includes(tagArr.innerHTML.toLowerCase())
          )
        );
      });
      tagArrayAppareil.forEach((tagArr) => {
        console.log(tagArr.innerHTML.toLowerCase());
        currentRecipes = currentRecipes.filter((elTag) =>
          elTag.appliance.toLowerCase().includes(tagArr.innerHTML.toLowerCase())
        );
      });
      displayReceipes();
      filterArray();
    });
  });
};

const createAppTag = (appliance) => {
  const tagContainer = document.querySelector(".tag_container");
  const createDiv = document.createElement("div")
  createDiv.setAttribute("class","tag_app")
  const createSpan = document.createElement("span")
  createSpan.setAttribute("class", "tag_value_appareil")
  const icon = document.createElement("i")
  icon.setAttribute("class","fa-regular fa-circle-xmark icon")
  tagContainer.appendChild(createDiv)
  createDiv.appendChild(createSpan)
  createDiv.appendChild(icon)
  createSpan.innerHTML += appliance
  const tagActiveApp = document.querySelectorAll(`.tag_app`)
  tagActiveApp.forEach((test) => {
    test.addEventListener("click", function () {
      test.remove();
      let filterEntries = [];
      const userValue = document.querySelector(".main_search").value;
      filterEntries = recipes.filter(
        (el) =>
          el.name.toLowerCase().includes(userValue) ||
          el.description.toLowerCase().includes(userValue) ||
          el.appliance.toLowerCase().includes(userValue)
      );
      currentRecipes = [...filterEntries];
      const tagArrayIngredient = document.querySelectorAll(
        ".tag_value_ingredient"
      );
      const tagArrayUstensils = document.querySelectorAll(
        ".tag_value_ustensils"
      );
      const tagArrayAppareil = document.querySelectorAll(".tag_value_appareil");
      tagArrayIngredient.forEach((tagArr) => {
        console.log(tagArr.innerHTML.toLowerCase());
        currentRecipes = currentRecipes.filter(
          (elTag) =>
            elTag.ingredients.some((ingredient) =>
              ingredient.ingredient
                .toLowerCase()
                .includes(tagArr.innerHTML.toLowerCase())
            ) ||
            elTag.ustensils.some((ust) =>
              ust.toLowerCase().includes(tagArr.innerHTML.toLowerCase())
            ) ||
            elTag.appliance
              .toLowerCase()
              .includes(tagArr.innerHTML.toLowerCase())
        );
      });
      tagArrayUstensils.forEach((tagArr) => {
        currentRecipes = currentRecipes.filter(
          (elTag) =>
            elTag.ingredients.some((ingredient) =>
              ingredient.ingredient
                .toLowerCase()
                .includes(tagArr.innerHTML.toLowerCase())
            ) ||
            elTag.ustensils.some((ust) =>
              ust.toLowerCase().includes(tagArr.innerHTML.toLowerCase())
            ) ||
            elTag.appliance
              .toLowerCase()
              .includes(tagArr.innerHTML.toLowerCase())
        );
      });
      tagArrayAppareil.forEach((tagArr) => {
        currentRecipes = currentRecipes.filter(
          (elTag) =>
            elTag.ingredients.some((ingredient) =>
              ingredient.ingredient
                .toLowerCase()
                .includes(tagArr.innerHTML.toLowerCase())
            ) ||
            elTag.ustensils.some((ust) =>
              ust.toLowerCase().includes(tagArr.innerHTML.toLowerCase())
            ) ||
            elTag.appliance
              .toLowerCase()
              .includes(tagArr.innerHTML.toLowerCase())
        );
      });
      displayReceipes();
      filterArray();
    });
  });
};

const createUstTag = (ustensils_item) => {
  const tagContainer = document.querySelector(".tag_container");
  const createDiv = document.createElement("div")
  createDiv.setAttribute("class","tag_ust")
  const createSpan = document.createElement("span")
  createSpan.setAttribute("class", "tag_value_ustensils")
  const icon = document.createElement("i")
  icon.setAttribute("class","fa-regular fa-circle-xmark icon")
  tagContainer.appendChild(createDiv)
  createDiv.appendChild(createSpan)
  createDiv.appendChild(icon)
  createSpan.innerHTML += ustensils_item
  const tagActiveUst = document.querySelectorAll(`.tag_ust`);
  tagActiveUst.forEach((tagAct) => {
    tagAct.addEventListener("click", function () {
      console.log(tagAct);
      tagAct.remove();
      let filterEntries = [];
      const userValue = document.querySelector(".main_search").value;
      filterEntries = recipes.filter(
        (element) =>
          element.name.toLowerCase().includes(userValue) ||
          element.description.toLowerCase().includes(userValue) ||
          element.ustensils.some((ustensil) => ustensil.includes(userValue))
      );
      currentRecipes = [...filterEntries];
      console.log(currentRecipes);
      
      const tagArrayIngredient = document.querySelectorAll(".tag_value_ingredient");
      const tagArrayUstensils = document.querySelectorAll(".tag_value_ustensils");
      const tagArrayAppareil = document.querySelectorAll(".tag_value_appareil");

      tagArrayIngredient.forEach((tagArr) => {
        console.log(tagArr.innerHTML.toLowerCase());
        currentRecipes = currentRecipes.filter((elTag) =>
          elTag.ingredients.some((ingredient) =>
            ingredient.ingredient
              .toLowerCase()
              .includes(tagArr.innerHTML.toLowerCase())
          )
        );
      });

      tagArrayUstensils.forEach((tagArr) => {
        console.log(tagArr.innerHTML.toLowerCase());
        currentRecipes = currentRecipes.filter((elTag) =>
          elTag.ustensils.some((ust) =>
            ust.toLowerCase().includes(tagArr.innerHTML.toLowerCase())
          )
        );
      });

      tagArrayAppareil.forEach((tagArr) => {
        console.log(tagArr.innerHTML.toLowerCase());
        currentRecipes = currentRecipes.filter((elTag) =>
          elTag.appliance.toLowerCase().includes(tagArr.innerHTML.toLowerCase())
        );
      });

      displayReceipes();
      filterArray();
    });
  });
};

const ingredientSearch = document.querySelector(".ingredients");
function inputIngredient(ingredientList) {
  const ingr = document.querySelector(".ingr_list");
  ingr.innerHTML = "";
  ingredientList.forEach((ingredient) => {
    ingr.innerHTML += `
        <li class="ingredient_item">${ingredient}</li>
        `;
  });
  const li = document.querySelectorAll(".ingredient_item");
  li.forEach((ingredient) => {
    ingredient.addEventListener("click", function () {
      console.log(ingredient.innerHTML);
      createTag(ingredient.innerHTML);
      currentRecipes = currentRecipes.filter((el) =>
        el.ingredients.some((ingre) =>
          ingre.ingredient
            .toLowerCase()
            .includes(ingredient.innerHTML.toLowerCase())
        )
      );
      displayReceipes();
      filterArray();
    });
  });
  ingredientSearch.addEventListener("keyup", function (e) {
    const test = document.querySelectorAll(".ingredient_item");
    const valueTarget = e.target.value.toLowerCase();
    test.forEach((ingredient) => {
      if (ingredient.innerHTML.toLowerCase().includes(valueTarget)) {
        ingredient.style.display = "block";
      } else {
        ingredient.style.display = "none";
      }
    });
  });
}
ingredientSearch.addEventListener("click", function () {
  const ingredient_list = document.querySelector(".ingr_container");
  const icon = document.querySelector(".ingred")
  if (ingredient_list.style.display === "block") {
    ingredient_list.style.display = "none"
    ingredientSearch.classList.remove("active")
    icon.classList.remove("rotate")
  } else {
     ingredient_list.style.display = "block"
     ingredientSearch.classList.add("active")
     icon.classList.add("rotate")
  }
});
let inputApp = document.querySelector(".appareils");
const appareils = document.querySelector(".app_list");
function inputAppareils(applianceSort) {
  appareils.innerHTML = "";
  applianceSort.forEach((appliance) => {
    appareils.innerHTML += `
        <li class="appliance_item">${appliance}</li>
        `;
  });
  const li = document.querySelectorAll(".appliance_item");
  li.forEach((appliance) => {
    appliance.addEventListener("click", function () {
      console.log(appliance.innerHTML.toLowerCase());
      createAppTag(appliance.innerHTML);
      currentRecipes = currentRecipes.filter((el) =>
        el.appliance.toLowerCase().includes(appliance.innerHTML.toLowerCase())
      );
      displayReceipes();
      filterArray();
    });
  });
  inputApp.addEventListener("input", function (e) {
    const appContainer = document.querySelectorAll(".appliance_item");
    const valueTarget = e.target.value;
    appContainer.forEach((appliance) => {
      if (appliance.innerHTML.toLowerCase().includes(valueTarget)) {
        appliance.style.display = "block";
      } else {
        appliance.style.display = "none";
      }
    });
  });
}
inputApp.addEventListener("click", function () {
  const icon = document.querySelector(".appli")
  const appliance_list = document.querySelector(".app_container");
  if (appliance_list.style.display === "block") {
    appliance_list.style.display = "none"
    icon.classList.remove("rotate")
  } else {
    appliance_list.style.display = "block"
    icon.classList.add("rotate")
  }
});
let input = document.querySelector(".ustensiles");
function inputUstensil(ustensilSort) {
  const ustensils = document.querySelector(".ust_list");
  ustensils.innerHTML = "";
  ustensilSort.forEach((ustensil) => {
    ustensils.innerHTML += `
            <li class="ustensiles_item">${ustensil}</li>
        `;
  });
  const li = document.querySelectorAll(".ustensiles_item");
  li.forEach((ustensils_item) => {
    ustensils_item.addEventListener("click", function () {
      createUstTag(ustensils_item.innerHTML);
      currentRecipes = currentRecipes.filter((ust) =>
        ust.ustensils.some((ust_tag) =>
          ust_tag.toLowerCase().includes(ustensils_item.innerHTML.toLowerCase())
        )
      );
      displayReceipes();
      filterArray();
    });
  });
  input.addEventListener("input", function (e) {
    const ustContainer = document.querySelectorAll(".ustensiles_item");
    const valueTarget = e.target.value;
    ustContainer.forEach((ustensil) => {
      if (ustensil.innerHTML.toLowerCase().includes(valueTarget)) {
        ustensil.style.display = "block";
      } else {
        ustensil.style.display = "none";
      }
    });
  });
}
input.addEventListener("click", function () {
  const icon = document.querySelector(".uste")
  const ustensil_list = document.querySelector(".ust_container");
  if (ustensil_list.style.display === "block") {
    ustensil_list.style.display = "none"
    icon.classList.remove("rotate")
  } else {
    ustensil_list.style.display = "block"
    icon.classList.add("rotate")
  }
});
const filterArray = () => {
  let ingredientList = [];
  let applianceList = [];
  let ustensilList = [];
  currentRecipes.forEach((element) => {
    const { ingredients, ustensils } = element;
    ingredientList = [
      ...ingredientList,
      ...ingredients.map((ingredient) => ingredient.ingredient),
    ].sort();
    applianceList = [
      ...currentRecipes.map((appliance) => appliance.appliance),
    ].sort();
    ustensilList = [
      ...ustensilList,
      ...ustensils.map((ustensils) => ustensils),
    ].sort();
  });
  ingredientList = new Set([...ingredientList]);
  applianceList = new Set([...applianceList]);
  ustensilList = new Set([...ustensilList]);
  inputIngredient(ingredientList);
  inputAppareils(applianceList);
  inputUstensil(ustensilList);
};

const init = () => {
  rechecheBarre();
  displayReceipes();
  filterArray();
};
init();