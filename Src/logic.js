import data from "./data.js";
import mustache from './mustache.js';

$(function() {
    // itemCard
    const itemCardTemplate = $("#itemCardTemplate").html();
    mustache.Mustache.parse(itemCardTemplate);
    const itemCardRendered = mustache.Mustache.render(itemCardTemplate, { itemCard: data.products });
    $("#FeaturedItemsHome").html(itemCardRendered);

    // sizes
    const sizeCheckboxTemplate = $("#sizeCheckboxTemplate").html();
    mustache.Mustache.parse(sizeCheckboxTemplate);
    const sizeCheckboxRendered = mustache.Mustache.render(sizeCheckboxTemplate, { size: data.sizes });
    $("#SizeCheckboxes").html(sizeCheckboxRendered);

    // gender
    const genderTemplate = $("#genderCheckboxTemplate").html();
    mustache.Mustache.parse(genderTemplate);
    const genderRendered = mustache.Mustache.render(genderTemplate, { gender: data.gender });
    $("#GenderCheckboxes").html(genderRendered);

    // type
    const typeCheckboxTemplate = $("#typeCheckboxTemplate").html();
    mustache.Mustache.parse(typeCheckboxTemplate);
    const typeCheckboxRendered = mustache.Mustache.render(typeCheckboxTemplate, { type: data.type });
    $("#TypeCheckboxes").html(typeCheckboxRendered);
});

const getNumberOfItemCards = () => {
    if (window.innerWidth >= 992) { 
        return 4;
      } 
}


const numberOfCards = getNumberOfItemCards();
console.log(numberOfCards);