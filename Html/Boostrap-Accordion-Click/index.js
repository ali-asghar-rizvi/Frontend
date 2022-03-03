	$(document).on('click', function (event) {
      if (!$(event.target).closest('.header-menulinks-main').length) {
        // ... clicked on the 'body', but not inside of #menutop
        $('.collapse').collapse('hide');
      }
    });
