$(document).ready(function () {
     
        $('#processBtn').click(function(event) {
            event.preventDefault();
            if($('#inputtext').val()===""){
                alert("Field is required");
                return;
            }

            let fullUri = "https://www.swapi.tech/api/people/?name=" + $('#inputtext').val();

            fetch(fullUri, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(res => res.json())
            .then(data =>
            {
                let resPropperties=data.result[0].properties;
                
                let s = `Height: ${resPropperties.height}, Mass: ${resPropperties.mass}, Gender: ${resPropperties.gender}, Hair Color: ${resPropperties.hair_color}`;
                console.log(s);
                $('#form-output').html(s); 
            })
            .catch(error => {
                console.log('fel! ' + error);
            })

    })    
})
