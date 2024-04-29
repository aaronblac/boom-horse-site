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

    //View item template
    const viTemplate = $('container--view-item').html();
    const viRendered = Mustache.render(template, data.products);
    viTemplate = viRendered;
    
    //Checkbox filter logic
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

    // Add event listener to all "Remove Item" buttons
    $('.remove-item').forEach(button => {
        button.addEventListener('click', function() {
            // Find the parent <li> element and remove it
            const listItem = this.closest('li');
            if (listItem) {
                listItem.remove();
            }
        });
    });
    //Mobile Dropdown logic
    // JavaScript to show/hide the backdrop when the dropdown is toggled
    // document.querySelectorAll('.dropdown-toggle').forEach(function (dropdownToggle) {
    //     dropdownToggle.addEventListener('click', function () {
    //         var dropdownMenu = this.parentElement.querySelector('.dropdown-menu');
    //         if (dropdownMenu.classList.contains('show')) {
    //             dropdownMenu.classList.remove('show');
    //         } else {
    //             dropdownMenu.classList.add('show');
    //         }
    //     });
    // });

});
