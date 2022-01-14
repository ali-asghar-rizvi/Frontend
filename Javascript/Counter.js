



//           <div class="col-md-10 mx-auto">
//                 <div class="row">
//                     <div class="col-md-3">
//                         <div class="acheivement">
//                             <h2><span class="counter counter1">4500</span>+</h2>
//                             <p>Satisfied Customers</p>
//                         </div>
//                     </div>
//                     <div class="col-md-3">
//                         <div class="acheivement">
//                             <h2><span class="counter counter1">175</span>+</h2>
//                             <p>Tutors On-board</p>
//                         </div>
//                     </div>
//                     <div class="col-md-3">
//                         <div class="acheivement">
//                             <h2><span class="counter counter1">1480</span>+</h2>
//                             <p>Classes Completed</p>
//                         </div>
//                     </div>
//                     <div class="col-md-3">
//                         <div class="acheivement">
//                             <h2><span class="counter counter1">200</span>+</h2>
//                             <p>Subjects Covered</p>
//                         </div>
//                     </div>

//                 </div>
//             </div>














$(window).on('scroll', function () {
    if ($(window).scrollTop() >= $(
        '.six-wrap').offset().top + $('.six-wrap').
            outerHeight() - window.innerHeight) {
            
            counterrr();
            
    }
});


function counterrr()
{
    $('.counter').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 3000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
    $('.counter1').removeClass('counter');
}
