function hitung_parkir() {
    let Jam_masuk = document.getElementById("in").value;
    let Jam_keluar = document.getElementById("out").value;
    let durasi = Jam_keluar - Jam_masuk;

    let tarif_awal = 3000;
    let selisih_waktu = Math.round(durasi - 2);
    let tarif_selanjutnya = selisih_waktu * 1000;
    let total_bayar = tarif_awal + tarif_selanjutnya;

    document.getElementById("durasi").innerHTML = "durasi = " + durasi + " jam";
    document.getElementById("hasil").innerHTML = "Total bayar = Rp. " + total_bayar;

    
}