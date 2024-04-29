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
    const processData = {
        ...data,
        sizeList: data.size.map(size => size.replace(' ', '-')),
        genderList: data.gender.map(gender => gender.replace(' ', '-')),
        typeList: data.type.map(type => type.replace(' ', '-'))
    }
    // Render Desktop Checkboxes
    renderTemplate("#sizeCheckboxTemplate", { size: processData.sizeList, products: data.products }, "#SizeCheckboxes");
    renderTemplate("#genderCheckboxTemplate", { gender: processData.genderList, products: data.products }, "#GenderCheckboxes");
    renderTemplate("#typeCheckboxTemplate", { type: processData.typeList, products: data.products }, "#TypeCheckboxes");

    // Render Mobile Checkboxes
    renderTemplate("#mobileSizeCheckboxTemplate", { size: processData.sizeList, products: data.products }, "#MobileSizeCheckboxes");
    renderTemplate("#mobileGenderCheckboxTemplate", { gender: processData.genderList, products: data.products }, "#MobileGenderCheckboxes");
    renderTemplate("#mobileTypeCheckboxTemplate", { type: processData.typeList, products: data.products }, "#MobileTypeCheckboxes");
    
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
