
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

        localStorage.setItem("current-city", city);
    }
}



// async function validCity(cityName) {
//     try {
//         let response = await fetch("../Assets/worldcities.csv");
//         let data = await response.text();
//         let rows = data.split("\n");
        
//         for (let i = 1; i < rows.length; i++) {
//             let columns = rows[i].split(",");
//             let city = columns[0].trim();
//             if (city.toLowerCase() === cityName.toLowerCase()) {
//                 return true; // ✅ City found
//             }
//         }
        
//         return false; // ❌ City not found
//     } catch (error) {
//         console.error("Error reading CSV:", error);
//         return false;
//     }
// }
