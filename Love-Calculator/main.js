function calculateLove() {
    const yourName = document.getElementById("yourName").value.trim();
    const partnerName = document.getElementById("partnerName").value.trim();
    // console.log(yourName);
    // console.log(partnerName);

    if (yourName === "" || partnerName === "") {
        alert('Please enter both names.');
} else{
    
    const lovePercentage = Math.floor(Math.random() * 101);

    const result = document.getElementById("result");

    result.innerHTML = `${yourName} and ${partnerName} 's Love Percentage: ${lovePercentage}%`;

    if(lovePercentage < 30) {
        result.innerHTML += "<br> Not a Great Match. Keep looking!"
    } else if(lovePercentage >= 30 && lovePercentage < 70){
        result.innerHTML += "<br> There is potential. Give it a try!"
    } else{
        result.innerHTML += "<br> Great Match. Love in the Air!"
    }

    }
}