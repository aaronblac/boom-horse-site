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
    
    // Checkbox filter logic
    $('.checkbox-filters').on('change', 'input[type=checkbox]', () => {
        filterItems();
    });

    const filterItems = () => {
        // store for attributes
        const checkedAttributes = {
            size: [],
            gender: [],
            type: []
        };

        // Collect checked attributes
        $('input[type=checkbox]:checked').each(function() {
            const attribute = $(this).data('attribute');
            const value = $(this).data('value');
            console.log(`attribute: ${attribute}, value: ${value}`)
            if (value !== 'All') {
                checkedAttributes[attribute].push(value);
            }
        });

        /// Filter items
        $('.item').each(function() {
            const item = $(this);
            let hideItem = false; // Use a flag to track hiding
            let showItem = true;
        
            // Check if item matches any checked attributes
            Object.keys(checkedAttributes).forEach(attribute => {
            const values = checkedAttributes[attribute];
            const itemValue = item.data(attribute);

            //If none are checked show all
            if(values.length === 0){
                showItem = true;
                return;
            }
            
            // If "All" is selected, skip hiding for this attribute
            if (itemValue === 'All' || values.includes('All')) {
                return;
            }
            
            // Check if item attribute value doesn't match any checked value (excluding "All")
            if (values.length > 0 && !values.includes(itemValue)) {
                hideItem = true; // Set flag to hide
            }
            });
        
            // Show/Hide based on the hideItem flag
            hideItem ? item.hide() : item.show();
        });
  
    };

    // Clear filter items
    $('.clear-filter').on('click', e => {
        e.preventDefault();
        $('.checkbox-filters input[type=checkbox]:checked').prop("checked", false);
    })

    //View item template
    const viTemplate = $('.container--view-item').html();
    const viRendered = Mustache.render(viTemplate, data.products);
    viTemplate = viRendered;
    
    

});
