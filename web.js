function hitung_dollar() {
    let rupiah = 16000;
    let d = document.getElementById("dollar").value;
    let h = d*rupiah;
    document.getElementById("hasil").innerHTML = "Rp. =" + h;
}

function hitung_rupiah() {
    let dollar = document.getElementById("rupiah").value;
    let h = dollar*(1/16000);
    document.getElementById("hasil2").innerHTML = "$. =" + h.toFixed(2);
}