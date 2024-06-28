var button = document.getElementById("button");
button.addEventListener("click", getvalue);
function getvalue() {
    const name = document.getElementById("name").value;
    const gmail = document.getElementById("gmail").value;
    const pass = document.getElementById("pass").value;
    const confirmPass = document.getElementById("confirm-pass").value;
    const sdt = document.getElementById("sdt").value;
    if (name === "" && gmail === "" && pass === "" && confirmPass === "" && sdt === "") {
        alert("Vui lòng điền đầy đủ thông tin");
    } if (pass.length < 6) {
        alert("mật khẩu phải trên 6 chữ số")
    } 
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!gmailRegex.test(gmail)) {
        alert('Email must be a valid @gmail.com address.');
        return;
    } if (sdt.length < 10 && sdt.length > 11) {
        alert("số điện thoại sai định dạng")
    }
     else if (pass !== confirmPass) {
        alert("Mật khẩu xác nhận không khớp");
    } else {
        var dangky = {
            name: name,
            gmail: gmail,
            sdt: sdt,
            pass: pass
        };
        var json = JSON.stringify(dangky);
        localStorage.setItem(name, json);
        alert("Tạo tài khoản thành công");
        location.href = "./dangnhap.html";
    }
}