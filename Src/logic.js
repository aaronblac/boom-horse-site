import data from "./data.js";

$(function() {
    const renderTemplate = (templateID, data, targetID) => {
        const template = $(templateID).html();
        Mustache.parse(template);
        const rendered = Mustache.render(template, data);
        $(targetID).html(rendered);
    }

    // Render itemCard
    renderTemplate("#itemCardTemplate", { itemCard: data.products }, "#FeaturedItems");
    
    // Render Desktop Checkboxes
    renderTemplate("#sizeCheckboxTemplate", { size: data.size, products: data.products }, "#SizeCheckboxes");
    renderTemplate("#genderCheckboxTemplate", { gender: data.gender, products: data.products }, "#GenderCheckboxes");
    renderTemplate("#typeCheckboxTemplate", { type: data.type, products: data.products }, "#TypeCheckboxes");

    // Render Mobile Checkboxes
    renderTemplate("#mobileSizeCheckboxTemplate", { size: data.size, products: data.products }, "#MobileSizeCheckboxes");
    renderTemplate("#mobileGenderCheckboxTemplate", { gender: data.gender, products: data.products }, "#MobileGenderCheckboxes");
    renderTemplate("#mobileTypeCheckboxTemplate", { type: data.type, products: data.products }, "#MobileTypeCheckboxes");
    
    //Checkbox filter logic
    $('.checkbox-filters').on('change','input[type=checkbox]', () => {
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
                const checkbox = $(`#checkbox-${attribute}-${value}`);
                return checkbox.length > 0 && checkbox.prop('checked');
            });

            showItem ? item.show() : item.hide();
        })
    }

    //View item template
    const viTemplate = $('.container--view-item').html();
    const viRendered = Mustache.render(viTemplate, data.products);
    viTemplate = viRendered;
    
    

});
