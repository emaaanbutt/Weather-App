
function submitForm(event)
{
    event.preventDefault();
}

function searchCity()
{
    let city = document.querySelector(".form-control").value;
    if (city != "")
    {
        localStorage.setItem("current-city", city);
        window.location.href = "../pages/main.html";
    }
}



// $(function() {
//     $('#cityInput').on('input', function() {
//         var query = $(this).val().trim();

//         if (query.length < 2) {
//             $('#suggestions').empty().hide(); 
//             return;
//         }

//         let api_url = 'https://api.api-ninjas.com/v1/city?name=' + encodeURIComponent(query) + '&limit=5';

//         $.ajax({
//             url: api_url,
//             method: 'GET',
//             headers: {
//                 'X-Api-Key': 'd/X07qv9XuiDWVpGkNL8g==ZbJlrqForjZq9w9F'
//             },
//             success: function(response) {
//                 $('#suggestions').empty();

//                 if (response.length === 0) {
//                     $('#suggestions').hide();
//                     return;
//                 }

//                 response.forEach(function(city) {
//                     $('#suggestions').append('<li>' + city.name + '</li>');
//                 });

//                 $('#suggestions').show(); 

//                 $('#suggestions li').on('click', function() {
//                     $('#cityInput').val($(this).text());
//                     $('#suggestions').empty().hide();
//                 });
//             },
//             error: function(error) {
//                 console.error('Autocomplete error:', error);
//                 $('#suggestions').hide();
//             }
//         });
//     });

//     $(document).on('click', function(e) {
//         if (!$(e.target).closest('#cityInput, #suggestions').length) {
//             $('#suggestions').empty().hide();
//         }
//     });
// });




