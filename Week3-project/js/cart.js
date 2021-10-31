/*function Item (title, price, img)
{
this.title = title;
this.price = price;
this.img = img;
}
$('#potts').click(function(){
    let title = 'Potts Marble Queen plant in a hanging pot';
    let price = 85; //$('#price').val();
    let img = '2.jpg';//$('#img').val();
    let newItem = new Item( title, price, img);
    let selectedItems =  JSON.parse(window.localStorage.getItem('SelectedItems'));
    console.log(selectedItems);
    if(selectedItems == null )
    {
        let a = [];
        a.push(newItem);
        console.log(newItem);
        window.localStorage.setItem('SelectedItems', JSON.stringify(a));
    } else
    {
        selectedItems.push(newItem);
        window.localStorage.setItem('SelectedItems', JSON.stringify(selectedItems));
    }
})*/


$(document).ready(function () {
  let cart = JSON.parse(window.localStorage.getItem('cart'))
  console.log(cart);

  $('.cart').append(`<div class="row">
<div class="col-12 col-sm-12 col-md-2 text-center">
<img class="img-responsive" id= "potts" src="img/${plants.img}" alt="" width="120" height="80">
</div>
<div class="col-12 text-sm-center col-sm-12 text-md-left col-md-6">
<h4 class="product-name"><strong>${plants.title}</strong></h4>
</div>
<div class="col-12 col-sm-12 text-sm-center col-md-4 text-md-right row">
<div class="col-3 col-sm-3 col-md-6  text-md-right" style="padding-top: 5px">
   <h6><strong>${plants.price} </strong></h6>
</div>
<div class="row">
    <div class="col-12 col-sm-12 col-md-2 text-center">
      <img class="img-responsive" id="vicks" src="img/${plants.img}" alt="" width="120" height="80">
    </div>
    <div class="col-12 text-sm-center col-sm-12 text-md-left col-md-6">
      <h4 class="product-name"><strong>${plants.title}</strong></h4>
      <h4>

      </h4>
    </div>
    <div class="col-12 col-sm-12 text-sm-center col-md-4 text-md-right row">
      <div class="col-3 col-sm-3 col-md-6 text-md-right" style="padding-top: 5px">
        <h6><strong>${plants.price} </strong></h6>
      </div>
      </div>
      </div>

`)
})




// Add item
$('.add-to-cart').click(function (event) {
  event.preventDefault();
  var name = $(this).data('name');
  var price = Number($(this).data('price'));
  shoppingCart.addItemToCart(name, price, 1);
  displayCart();
});

// Clear items
$('.clear-cart').click(function () {
  shoppingCart.clearCart();
  displayCart();
});


$('.show-cart').html(output);
$('.total-cart').html(shoppingCart.totalCart());
$('.total-count').html(shoppingCart.totalCount());


// Delete item button

$('.show-cart').on("click", ".delete-item", function (event) {
  var name = $(this).data('name')
  shoppingCart.removeItemFromCartAll(name);
  displayCart();
})


// -1
$('.show-cart').on("click", ".minus-item", function (event) {
  var name = $(this).data('name')
  shoppingCart.removeItemFromCart(name);
  displayCart();
})
// +1
$('.show-cart').on("click", ".plus-item", function (event) {
  var name = $(this).data('name')
  shoppingCart.addItemToCart(name);
  displayCart();
})

// Item count input
$('.show-cart').on("change", ".item-count", function (event) {
  var name = $(this).data('name');
  var count = Number($(this).val());
  shoppingCart.setCountForItem(name, count);
  displayCart();
});