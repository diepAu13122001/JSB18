// cach 1
var input = prompt("Nhap diem cua ban: ");

function checkScore(score) {
    if(score < 4) {
        return "Dat loai yeu";
    } else if(score < 6) {
        return "Dat loai tb";
    }else if(score < 8) {
        return "Dat loai kha";
    } else if(score < 9.5) {
        return "Dat loai gioi";
    } else {
        return "Dat loai xuat sac";
    }
}

document.getElementById("input_score").innerHTML = checkScore(input);

// cach 2
function checkScore2 () {
    const score = document.getElementById("input_score2").value;
    let result = "";
    if(score < 4) {
        result = "Dat loai yeu";
    } else if(score < 6) {
        result = "Dat loai tb";
    }else if(score < 8) {
        result = "Dat loai kha";
    } else if(score < 9.5) {
        result = "Dat loai gioi";
    } else {
        result = "Dat loai xuat sac";
    }

    document.getElementById("result").innerHTML = result;
}