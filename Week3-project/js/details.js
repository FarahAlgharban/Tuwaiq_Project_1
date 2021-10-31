  $(document).ready(function () {
      //const currPlant = JSON.parse(window.localStorage.getItem("plant"))
      const Item = sessionStorage.getItem('Key');
      const currPlant = JSON.parse(window.localStorage.getItem(Item))

      $('.card').append(`
        <h2>${currPlant.title}</h2>
        <h3>${currPlant.price}</h3>
        <img src="img/${currPlant.img}" class="card-img-top" alt="...">
        <div class="card-body">
            <figure>
                <blockquote class="blockquote">
                  <h3>About the plant</h3>
                  <p>${currPlant.description}</p>
                </blockquote>
             </figure>
        </div>
        `)

        $('#addOne').click(function () {
            // console.log('inside addOne function');
            let qty = parseInt($('#qty').text());
            qty += 1;
            $('#qty').text(qty);
            // console.log(qty);
          })
          $('#subOne').click(function () {
            let qty = parseInt($('#qty').text());
            qty -= 1;
            if (qty < 1)
              qty = 1;
            $('#qty').text(qty);
          })

    //   const currBowl = JSON.parse(window.localStorage.getItem("bowl"))

    //   $('.card').append(`
    //     <h4>${currBowl.title}</h4>
    //           <h3>${currBowl.price}</h3>
    //           <img src="img/${currBowl.img}" class="card-img-top" alt="...">
    //           <div class="card-body">
    //               <figure>
    //                   <blockquote class="blockquote">
    //                     <h3>About the plant</h3>
    //                     <p>${currBowl.description}</p>
    //                   </blockquote>
    //                </figure>
    //           </div>
    //           `)



    //   const currSeeds = JSON.parse(window.localStorage.getItem("seeds"))
    //   $('.card').append(`
    //           <h4>${currSeeds.title}</h4>
    //                 <h3>${currBowl.price}</h3>
    //                 <img src="img/${currSeeds.img}" class="card-img-top" alt="...">
    //                 <div class="card-body">
    //                     <figure>
    //                         <blockquote class="blockquote">
    //                           <h3>About the plant</h3>
    //                           <p>${currSeeds.description}</p>
    //                         </blockquote>
    //                      </figure>
    //                 </div>
    //                 `)
  })