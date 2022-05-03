let objOrigin = {}
let url_api = "https://ticketbook.azurewebsites.net/api/Flights?";
let flightsInfo = document.querySelector('#flightsInfo')

window.addEventListener('load', (e)=>{
    let origin = window.location.href
    let arrOrigin = ((origin.split('?')[1]).split('&'))

    fetch(`https://ticketbook.azurewebsites.net/api/Flights?${arrOrigin.join('&')}`).then(function(response) {
            return response.json();
            }).then(function(data) {
                console.log(data) 
                if (data.length > 0){
                    for (let i = 0; i < data.length; i ++){
                        ticketsItem.innerHTML += `<div class="list-flight-item col-12">
                        <div class="flight-card card">
                            <div class="row align-items-center flex-md-nowrap">
                                <div class="flight-card__row col-12 col-md text-center px-md-0">
                                    <div class="list-group list-group-flush flex-nowrap flex-md-row m-0">
                                        <div class="list-group-item">
                                            <div class="row d-md-inline-flex flex-md-column">
                                                <p id="fromCounrty">
                                                    ${data[i].from}
                                                </p>
                                            </div>
                                        </div>
                                        <div class="list-group-item" >
                                            <div class="row d-md-inline-flex flex-md-column text-md-right">
                                                <div class="title col-5 col-md-12">Departing date</div>
                                                <div class="col-7 col-md-12"></div>
                                            </div>
                                        </div>
                                        <div class="list-group-item" style="margin-right: 100px;">
                                            <div class="row d-md-inline-flex flex-md-column text-md-right">
                                                <div class="title col-5 col-md-12" class="departDate">
                                                    ${data[i].departureDate}
                                                </div>
                                                <div class="col-7 col-md-12"></div>
                                            </div>
                                        </div>
                                        <div class="list-group-item">
                                            <div class="row d-md-inline-flex flex-md-column">
                                                <div class="col-7 col-md-12 ml-auto text-nowrap" class="flyingDuration">
                                                    ${data[i].duration}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="list-group list-group-flush flex-nowrap flex-md-row m-0">
                                        <div class="list-group-item">
                                            <div class="row d-md-inline-flex flex-md-column">
                                                <p id="toCountry">
                                                    ${data[i].dest}
                                                </p>
                                            </div>
                                        </div>
                                        <div class="list-group-item">
                                            <div class="row d-md-inline-flex flex-md-column text-md-right">
                                                <div class="title col-5 col-md-12">Return date</div>
                                                <div class="col-7 col-md-12"></div>
                                            </div>
                                        </div>
                                        <div class="list-group-item">
                                            <div class="row d-md-inline-flex flex-md-column text-md-right">
                                                <div class="title col-5 col-md-12" class="returnDate">
                                                    ${data[i].returnDate}
                                                </div>
                                                <div class="col-7 col-md-12"></div>
                                            </div>
                                        </div>
                                        <!-- <div class="list-group-item">
                                            <div class="row d-md-inline-flex flex-md-column">
                                                <div class="col-7 col-md-12 ml-auto text-nowrap">
    
                                                </div>
                                            </div>
                                        </div> -->
                                    </div>
                                </div>
                                <div class="flight-card__total list-group list-group-flush col-12 col-md-auto">
                                    <div class="list-group-item text-center p-md-0">
                                        <div class="row justify-content-center align-items-center flex-md-column">
                                            <div class="col-5 col-md-12 mb-md-3">
                                                <div class="total text-nowrap" id="flightPrice">
                                                    ${data[i].totalPrice}
                                                €</div>
                                            </div>
                                            <div class="col-7 col-md-12"><button class="btn btn-secondary btn--round" role="button" class="bookNow">book now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`
                    }                
                }else{
                    flightsInfo.innerHTML = `
                    <div class="info bg-secondary rounded p-2 mx-auto text-center" style="width: 200px; font-size: 21px; color: #fff;">
                    No data found!
                  </div>
                    `
                }

                let bookNow = document.querySelectorAll('.bookNow');
                for (let i = 0; i < bookNow.length; i ++){
                    console.log('asfsdf')
                }
                bookNow.forEach((bookNowBtn) =>{
                    bookNowBtn.addEventListener('click', (e)=>{
                        console.log('sdfsdf')
                    })
                })
                console.log(bookNow)
                // bookNow.addEventListener('click', (e)=>{
                //     console.log('afasdfsdfsd')
                // })
                }
                ).catch(function() {
                console.log("Error!!");
            });



            fetch('https://ticketbook.azurewebsites.net/api/Reservations')
            .then(function(response) {
                return response.json();
                }).then(function(data) {
                    console.log(data)
                    
                }).catch(function() {
                    console.log("Error!!");
                });
})
