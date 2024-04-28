import { products, size, gender, type } from "./data.js";

$(function() {
    // itemCard
    const itemCardTemplate = $("#itemCardTemplate").html();
    Mustache.parse(itemCardTemplate);
    const itemCardRendered = Mustache.render(itemCardTemplate, { itemCard: products });
    $("#FeaturedItems").html(itemCardRendered);

    // sizes
    const sizeCheckboxTemplate = $("#sizeCheckboxTemplate").html();
    Mustache.parse(sizeCheckboxTemplate);
    const sizeCheckboxRendered = Mustache.render(sizeCheckboxTemplate, { size: size, products: products });
    $("#SizeCheckboxes").html(sizeCheckboxRendered);

    // gender
    const genderTemplate = $("#genderCheckboxTemplate").html();
    Mustache.parse(genderTemplate);
    const genderRendered = Mustache.render(genderTemplate, { gender: gender, products: products });
    $("#GenderCheckboxes").html(genderRendered);

    // type
    const typeCheckboxTemplate = $("#typeCheckboxTemplate").html();
    Mustache.parse(typeCheckboxTemplate);
    const typeCheckboxRendered = Mustache.render(typeCheckboxTemplate, { type: type, products: products });
    $("#TypeCheckboxes").html(typeCheckboxRendered);
    
    $(document).on('change','input[type=checkbox', () => {
        filterItems();
    })

    const filterItems = () => {
        const checkedAttributes = $('input[type=checkbox]:checked').map(function() {
            return $(this).data('attribute');
        }).get();

        $('.item').each(function() {
            const item = $(this);
            let showItem = true;

            checkedAttributes.forEach(attribute => {
                const value = item.data(attribute);
                if(!($(`#checkbox-${attribute}-${value}`).prop('checked'))) {
                    showItem = false;
                    return false;
                }
            });

            showItem ? item.show() : item.hide();
        })
    }
});
