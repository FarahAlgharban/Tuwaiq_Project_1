let sum = 0;
$(document).ready(function(){
    let selectedItems =  JSON.parse(window.localStorage.getItem('SelectedItems'));
    for(let i=0; i<selectedItems.length; i++ ){
        $('.list-group').append(`<a href="#" class="list-group-item list-group-item-action">
    <div class="row">
        <div class="col-6" style="background-color: white;" id="fishBurger">
           ${selectedItems[i].name}
        </div>
        <div class="col-3" style="background-color: white;">
           ${selectedItems[i].qty}
        </div>
        <div class="col-3" style="background-color: white;">
        ${selectedItems[i].price}
        </div>
    </div>
</a>`)
sum = sum + selectedItems[i].qty * selectedItems[i].price
    }
    $('#totalPrice').text(sum)
})
$('#ok').click(function(){
    localStorage.removeItem('SelectedItems')
})