const timeFrames = [1,3,6,12];
const prices = [100, 90, 80, 70];

function calculatePrice() {
    for (let i = 0; i < prices.length; i++) {
        if (timeFrame === timeFrames[i]) {
            return prices[i];
        }
    }
}

function changeText(price){
    field = doxument.getElementById("global-price");
    field.innerHTML = price;
}

function readOptionGlobal(){
    console.log(selectedGlobalOption);  
}

const selectGlobal = document.getElementById("globalPackageSelect");

selectGlobal.addEventListener("change", function(event){
    selectedGlobalOption = event.target.value;
    console.log(selectedGlobalOption);
});



function getTimeFrame() {
    timeFrame = document.getElementById("time_frame").value;
    price = calculatePrice();
    changeText(price);
}

