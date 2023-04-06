function log_in(x){
    let log_in_btn = document.getElementById("sign_in_button");
    log_in_btn.addEventListener("click",function(){x=!x;update_page(x);});
    return x;
}

function update_page(x){
    weekly_streak(x);
    log_out(x);
}

function log_out(x){
    let log_out_btn = document.getElementById("Log-in");
    if (x == true){
        log_out_btn.innerText = "Log Out";}
    else{
        log_out_btn.innerText = "Log In";
    }
}

function weekly_streak(x){
    let weekly_streak= document.getElementById("weekly_streak");
    if (x==true){
        weekly_streak.innerHTML = "You have a weekly streak of 3 days";
    }
    else{
        weekly_streak.innerHTML = "Please Log in to see your weekly streak";
    }
}
let log_in_state = false;
log_in_state = log_in(log_in_state);