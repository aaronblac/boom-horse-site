import data from "./data.js";

$(function() {
    // itemCard
    const itemCardTemplate = $("#itemCardTemplate").html();
    Mustache.parse(itemCardTemplate);
    const itemCardRendered = Mustache.render(itemCardTemplate, { itemCard: data.products,currentIndex: (currentCard, index) => index });
    $("#FeaturedItems").html(itemCardRendered);

    // sizes
    const sizeCheckboxTemplate = $("#sizeCheckboxTemplate").html();
    Mustache.parse(sizeCheckboxTemplate);
    const sizeCheckboxRendered = Mustache.render(sizeCheckboxTemplate, { size: data.sizes });
    $("#SizeCheckboxes").html(sizeCheckboxRendered);

    // gender
    const genderTemplate = $("#genderCheckboxTemplate").html();
    Mustache.parse(genderTemplate);
    const genderRendered = Mustache.render(genderTemplate, { gender: data.gender });
    $("#GenderCheckboxes").html(genderRendered);

    // type
    const typeCheckboxTemplate = $("#typeCheckboxTemplate").html();
    Mustache.parse(typeCheckboxTemplate);
    const typeCheckboxRendered = Mustache.render(typeCheckboxTemplate, { type: data.type });
    $("#TypeCheckboxes").html(typeCheckboxRendered);
    
    // const getNumberOfItemCards = () => {
    //     if (window.innerWidth >= 992) { 
    //         return 4;
    //       } 
    // }
    
    
    // const numberOfCards = getNumberOfItemCards();
    // console.log(numberOfCards);
});
