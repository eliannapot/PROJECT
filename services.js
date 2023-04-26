const timeFrames = ["1 month","3 months","6 months","12 months"];
const prices = [100, 90, 80, 70];


function changeText(price,select,time){
    if (select === document.getElementById("globalPackageSelect")){
        const field = document.getElementById("globalPrice");
        field.innerHTML = `${price + 0.3*price}$ / month or ${(price + 0.3*price)*time}$ total` ;
    }
    else if(select === document.getElementById("localPackageSelect")){
        const field = document.getElementById("localPrice");
        field.innerHTML = `${price}$ / month or ${price*time}$ total` ;
    }
}


function findTimeFrame(timeFrame,select){
    for (let i = 0; i < timeFrames.length; i++) {
        if (timeFrame === timeFrames[i]) {
            time= parseInt(timeFrames[i]);
            changeText(prices[i],select,time);
        }
    }
}

function initialisePrices(){
    changeText(prices[0],document.getElementById("globalPackageSelect"),1);
    changeText(prices[0],document.getElementById("localPackageSelect"),1);
}

function log_in(x){
    let log_in_btn = document.getElementById("sign_in_button");
    log_in_btn.addEventListener("click",function(){x=!x;update_page(x);});
    return x;
}

function update_page(x){
    log_out(x);
    changeSignUp(x);
    changePurchaseModal(x);
}

function log_out(x){
    let log_out_btn = document.getElementById("Log-in");
    if (x == true){
        log_out_btn.innerText = "Log Out";}
    else{
        log_out_btn.innerText = "Log In";
    }
}

function changeSignUp(x){
    let signUpLocal = document.getElementById("localPurchase");
    let signUpGlobal = document.getElementById("globalPurchase");
    if (x == true){
        signUpLocal.innerHTML=`<button class="btn btn-primary other-service-btn" data-toggle="modal" data-target="#purchase_modal">Purchase</button> `;
        signUpGlobal.innerHTML=`<button class="btn btn-primary other-service-btn" data-toggle="modal" data-target="#purchase_modal">Purchase</button> `;
    }
    else{
        signUpLocal.classList.remove("d-none");
        signUpGlobal.classList.remove("d-none");
    }
}

function changePurchaseModal(x){
    let purchaseModal = document.getElementById("purchase-modal");
    let purchase_modal_Title = document.getElementById("purchase_modal_Title");
    let purchase_modal_Body = document.getElementById("purchase_modal_Body");
    if (x == true){
        purchase_modal_Title.innerHTML = `<h5>Thank you for your purchase!</h5>`;
        purchase_modal_Body.innerHTML = `<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>`;
    }
    else{
        purchase_modal_Title.innerHTML = `<h5 class="modal-title" id="purchase_modal_Title">PLEASE LOG IN TO PURCHASE!</h5>`;
        purchase_modal_Body.innerHTML = `<button type="button" class="btn btn-primary" data-dismiss="modal" aria-label="Close"> OK!</button>>`;
    }
}

const selectGlobal = document.getElementById("globalPackageSelect");
const selectLocal = document.getElementById("localPackageSelect");
let log_in_state = false;
log_in_state = log_in(log_in_state);

initialisePrices();

selectLocal.addEventListener("change", function(event){
    selectedLocalOption = event.target.value;
    findTimeFrame(selectedLocalOption,event.target);
});

selectGlobal.addEventListener("change", function(event){
    selectedGlobalOption = event.target.value;
    findTimeFrame(selectedGlobalOption,event.target);
});