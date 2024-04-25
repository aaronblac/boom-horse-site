import data from "./data.js";

$(function() {


 
 const itemCardTemplate = ` 
    {{ #itemCard }}
    {{#if (@index < getNumberOfItemCards())}} 
        <div class="card p-2 gap-1 round flex flex-column align-content-center ">
            <div class="container--item-thumb">
                <img src="{{ image }}" alt="{{ name }} Image">
            </div>
            <div class=" text-center">
                <span>{{ name }}</span>
            </div>
            <div class="flex justify-content-center">
                <a href="Pages/view-iteåçm.html">
                    <button role="button" class="button-primary button-small">View Item</button>
                </a>
            </div>
        </div>
    {{/if}}
    {{ /itemCard }}`;

    // itemCard
    Mustache.parse(itemCardTemplate);
    const itemCardRendered = Mustache.render(itemCardTemplate, { itemCard: data.products,currentIndex: (currentCard, index) => index });
    $("#FeaturedItemsHome").html(itemCardRendered);

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
});

const getNumberOfItemCards = () => {
    if (window.innerWidth >= 992) { 
        return 4;
      } 
}


const numberOfCards = getNumberOfItemCards();
console.log(numberOfCards);