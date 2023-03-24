// new WOW({
//     animateClass:'animate__animated',
// }).init();
//
// $('h1').html("Самая крутая пицца ждет <span>только в нашем ресторане</span>");
//
// $('#products-title').css('color', '#000000');
//
// $('.btn:not(#no-touch)').css({
//     backgroundColor: 'transparent',
//     border: '1px solid rgb(255, 175, 24)',
//     color: 'rgb(255, 175, 24)'
// });
//
// let productInput = $('#product-input');
// productInput.attr('placeholder', "Имя");
//
// // //год от текущей даты
// $('.rights span').text((new Date()).getFullYear());
//
// //добавление текста в заголовок четных продуктов
// let products = $('.product');
// for(let i = 0; i < products.length; i++){
//     if (i % 2 === 1){
//         let element = products.eq(i).children().eq(1);
//         element.text(element.text() + '*');
//     }
// }
//
//
//
// //при клике на элемент, плавно переходила к показу пиццы
// $('#choose-pizza').click(function () {
//     $('.products')[0].scrollIntoView({behavior: "smooth"});
// });
//
//
// $('.btn-add-to-cart').click((e) => {
//     productInput.val($(e.target).parents('.product').find('.product-title').text());
//     $('order')[0].scrollIntoView({behavior: "smooth"});
// })
//
//
//
//
//
//
// //по кнопке "В корзину" в input вставляется название пиццы
// // let addToCardButtons = document.getElementsByClassName('btn-add-to-cart');
// //
// // for (let i = 0; i < addToCardButtons.length; i++) {
// //     addToCardButtons[i].onclick = function (e) {
// //         productInput.value = e.target.parentElement.previousElementSibling.previousElementSibling.innerText;
// //         document.getElementsByClassName('order')[0].scrollIntoView({behavior: "smooth"});
// //     }
// // }
//
// //создание валидации (проверка на заполнение всех полей в форме)
// $('#create-order').click(function () {
//     let addressInput = $('#address-input');
//     let phoneInput = $('#phone-input');
//
//     if(!productInput.val()) {
//         alert('Заполните пиццу');
//         return;
//     }
//     if(!addressInput.val()) {
//         alert('Заполните адрес');
//         return;
//     }
//     if(!phoneInput.val()) {
//         alert('Заполните телефон');
//         return;
//     }
//
//     alert('Спасибо за заказ');
// });