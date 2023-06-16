function bai1() {
    let num1 = +document.getElementById("Num1").value;
    let num2 = +document.getElementById("Num2").value;
    let num3 = +document.getElementById("Num3").value;
    let num4 = +document.getElementById("Num4").value;
    let num5 = +document.getElementById("Num5").value;
    let num6 = +document.getElementById("Num6").value;
    let result1 = document.getElementById("result1");
    let total = num4 + num5 + num6 + num2 + num3;
    if (num4 === 0 || num5 === 0 || num6 === 0) {
        result1.innerHTML = "Bạn bị rớt do có môn được 0 điểm"
    } else if (total >= num1) {
        result1.innerHTML = `Bạn đã trúng tuyển với số điểm là : ${total}`;
    } else {
        result1.innerHTML = `Bạn đã rớt. Điểm của bạn là ${total}`;
    }
}


const kw1 = 500;
const kw2 = 650;
const kw3 = 850;
const kw4 = 1100;
const kw5 = 1300;

function bai2() {
    let num1_2 = document.getElementById("Num1_2").value;
    let num2_2 = +document.getElementById("Num2_2").value;
    let result2 = document.getElementById("result2");

    let total = 0;
    let formatter = new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" });

    if (num2_2 <= 50 && num2_2 > 0) {
        total = kw1 * num2_2;
    } else if (num2_2 <= 100) {
        total = 50 * kw1 + (num2_2 - 50) * kw2;
    } else if (num2_2 <= 200) {
        total = 50 * kw1 + 50 * kw2 + (num2_2 - 100) * kw3;
    } else if (num2_2 <= 350) {
        total = 50 * kw1 + 50 * kw2 + 100 * kw3 + (num2_2 - 200) * kw4;
    } else {
        total = 50 * kw1 + 50 * kw2 + 100 * kw3 + 150 * kw4 + (num2_2 - 350) * kw5;
    }

    let formattedTotal = formatter.format(total);
    result2.innerHTML = `Họ tên: ${num1_2}; Tiền điện: ${formattedTotal}`;
}

document.getElementById("btn_bill").onclick = bai2;

//bài 3
function bai3() {
    let num1_3 = document.getElementById("Num1_3").value;
    let num2_3 = +document.getElementById("Num2_3").value;
    let num3_3 = +document.getElementById("Num3_3").value;
    let total = 0;
    let formatter = new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" });
    total_tax = num2_3 - 4e+6 - num3_3 * 16e+5;
    console.log(total_tax);
    if (total_tax <= 60e6 && total_tax > 0) {
        total = total_tax * 0.05;
    } else if (total_tax <= 120e6) {
        total = 60e6 * 0.05 + (total_tax - 60e6) * 0.1;
    } else if (total_tax <= 210e6) {
        total = 60e6 * 0.05 + 60e6 * 0.1 + (total_tax - 120e6) * 0.15;
    } else if (total_tax <= 384e6) {
        total = 60e6 * 0.05 + 60e6 * 0.1 + 90e6 * 0.15 + (total_tax - 210e6) * 0.2
    } else if (total_tax <= 624e6) {
        total = 60e6 * 0.05 + 60e6 * 0.1 + 90e6 * 0.15 + 174e6 * 0.2 + (total_tax - 384e6) * 0.25;
    } else if (total_tax <= 960e6) {
        total = 60e6 * 0.05 + 60e6 * 0.1 + 90e6 * 0.15 + 174e6 * 0.2 + 240e6 * 0.25 + (total_tax - 624e6) * 0.3;
    } else {
        total = 60e6 * 0.05 + 60e6 * 0.1 + 90e6 * 0.15 + 174e6 * 0.2 + 240e6 * 0.25 + 336e6 * 0.3 + (total_tax - 960e6) * 0.35;
    }
    let formattedTotal = formatter.format(total);
    result3.innerHTML = `Họ tên: ${num1_3}; Tiền thuế thu nhập cá nhân: ${formattedTotal}`;
}
document.getElementById("btn_tax").onclick = bai3;
//bài 4
function bai4() {
    let num1_4 = +document.getElementById("Num1_4").value;
    let num2_4 = document.getElementById("Num2_4").value;
    let num3_4 = +document.getElementById("Num3_4").value;
    let num4_4 = +document.getElementById("Num4_4").value;
    let result4 = document.getElementById("result4");
    let total = 0;
    let formatter = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });
    if (num1_4 == 1) {
        total = 4.5 + 20.5 + 7.5 * num3_4;
    } else if (num1_4 == 2) {
        if (num4_4 > 10) {
            total = 15 + 75 + 50 * num3_4 + (num4_4 - 10) * 5;
        } else {
            total = 15 + 75 + 50 * num3_4;
        }
    }
    let formattedTotal = formatter.format(total);
    result4.innerHTML = `Mã khách hàng: ${num2_4}; Tiền cáp: ${formattedTotal}`;

}
document.getElementById("btn_tien_cap").onclick = bai4;

function func4() {
    let company = +document.getElementById("Num1_4").value;
    if (company == 2) {
        document.getElementById("Num4_4").style.display = "block";
    } else {
        document.getElementById("Num4_4").style.display = "none";
    }
}