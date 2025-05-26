// main.js

function logout() {
  localStorage.removeItem("role");
  localStorage.removeItem("username");
  window.location.href = "login.html";
}

function goBack() {
  const role = localStorage.getItem("role");
  if (role) {
    window.location.href = "dashboard.html";
  } else {
    window.history.back();
  }
}

function initDefaultData() {
  if (!localStorage.getItem("users")) {
    const users = [
      { username: "admin", password: "admin123", role: "admin" },
      { username: "kasir", password: "kasir123", role: "kasir" },
      { username: "aldo", password: "123", role: "pelanggan" },
      { username: "siska", password: "123", role: "pelanggan" },
      { username: "mutiara", password: "123", role: "pelanggan" }
    ];
    localStorage.setItem("users", JSON.stringify(users));
  }

  if (!localStorage.getItem("layanan")) {
    const layanan = [
      { nama: "Cuci Kering", harga: 7000 },
      { nama: "Cuci Setrika", harga: 10000 }
    ];
    localStorage.setItem("layanan", JSON.stringify(layanan));
  }

  if (!localStorage.getItem("pelanggan")) {
    const pelanggan = [
      { nama: "aldo", telepon: "0811111111", alamat: "Jl. Mawar No.1" },
      { nama: "siska", telepon: "0822222222", alamat: "Jl. Melati No.2" },
      { nama: "mutiara", telepon: "0833333333", alamat: "Jl. Anggrek No.3" }
    ];
    localStorage.setItem("pelanggan", JSON.stringify(pelanggan));
  }

  if (!localStorage.getItem("transaksi")) {
    const transaksi = [
      { pelanggan: "aldo", layanan: "Cuci Kering", berat: 3, harga: 7000, status: "belum" },
      { pelanggan: "aldo", layanan: "Cuci Setrika", berat: 2, harga: 10000, status: "lunas" },
      { pelanggan: "siska", layanan: "Cuci Kering", berat: 5, harga: 7000, status: "lunas" },
      { pelanggan: "siska", layanan: "Cuci Setrika", berat: 4, harga: 10000, status: "belum" },
      { pelanggan: "mutiara", layanan: "Cuci Kering", berat: 2, harga: 7000, status: "belum" },
      { pelanggan: "mutiara", layanan: "Cuci Setrika", berat: 1, harga: 10000, status: "lunas" }
    ];
    localStorage.setItem("transaksi", JSON.stringify(transaksi));
  }
}

function checkLogin(redirectIfMissing = true) {
  const role = localStorage.getItem("role");
  if (!role && redirectIfMissing) {
    alert("Silakan login terlebih dahulu.");
    window.location.href = "login.html";
  }
  return role;
}

function loadFromStorage(key, fallback = []) {
  return JSON.parse(localStorage.getItem(key)) || fallback;
}

function saveToStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function createOption(value, label = null) {
  const option = document.createElement("option");
  option.value = value;
  option.textContent = label || value;
  return option;
}

window.addEventListener("DOMContentLoaded", () => {
  initDefaultData();

  const container = document.querySelector(".container");
  if (container) {
    const backBtn = document.createElement("button");
    backBtn.textContent = "← Kembali";
    backBtn.style.marginBottom = "1rem";
    backBtn.onclick = goBack;
    container.insertBefore(backBtn, container.firstChild);
  }
});
