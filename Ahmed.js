function checkGroup1() {
    let radio = document.querySelector('input[name="group1"]:checked');
    let text  = document.getElementById("group1_text").value.trim();
    let msg = "";

    if (!radio || text === "") {
        msg = "من فضلك جاوب علي السؤالين ❌"
        document.getElementById("result1").style.color = "red";
    } else {
        msg = "شكرًا  لاجابتك  ✅"
        document.getElementById("result1").style.color = "green";
    }

    document.getElementById("result1").innerHTML = msg;
}

function checkGroup2() {
    let radio = document.querySelector('input[name="group2"]:checked');
    let text  = document.getElementById("group2_text").value.trim();
    let msg = "";

    if (!radio || text === "") {
        msg = "من فضلك جاوب علي السؤالين ❌";
        document.getElementById("result2").style.color = "red";
    } else {
        msg = "شكرًا لرأيك تم إرسال ملاحظاتك ✅";
        document.getElementById("result2").style.color = "green";
    }

    document.getElementById("result2").innerHTML = msg;
}
