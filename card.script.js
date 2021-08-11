$(document).ready(function () {
     
    $('#processBtn').click(function(event) {
        event.preventDefault();
        
        let fullUri = "https://deckofcardsapi.com/api/deck/new/draw/?count=1";

        fetch(fullUri, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data =>
        {
            let resPropperties = data.cards[0];
            
            $('#divCard').text("");
            let result=`
            <div id="innerDivCard" class="card" style="width: 18rem;">
            </div>
            `;
            $('#divCard').append(result);

            var img = $('<img id="cardImg">');
            img.attr('src', resPropperties.image);
            img.attr('alt', resPropperties.code);
            img.appendTo('#divCard');

            let subDiv=`
                <div class="card-body"><h5 class="card-title">Card Information</h5>
                    <a href="#" id="cardValue" class="btn btn-primary">NA</a>  
                    <a href="#" id="cardSuit" class="btn btn-primary">NA</a>
                </div>
                `;
            $('#divCard').append(subDiv);

            $('#cardValue').text(resPropperties.value);
            $('#cardSuit').text(resPropperties.suit);

        })
        .catch(error => {
            console.log('fel! ' + error);
        })

    })    
})
