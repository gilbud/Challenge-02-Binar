const dataPenjualanNovel = [
  {
    idProduct: "BOOK002421",
    namaProduk: "Pulang - Pergi",
    penulis: "Tere Liye",
    hargaBeli: 60000,
    hargaJual: 86000,
    totalTerjual: 150,
    sisaStok: 17,
  },
  {
    idProduct: "BOOK002351",
    namaProduk: "Selamat Tinggal",
    penulis: "Tere Liye",
    hargaBeli: 75000,
    hargaJual: 103000,
    totalTerjual: 171,
    sisaStok: 20,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Garis Waktu",
    penulis: "Fiersa Besari",
    hargaBeli: 67000,
    hargaJual: 99000,
    totalTerjual: 213,
    sisaStok: 5,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Laskar Pelangi",
    penulis: "Andrea Hirata",
    hargaBeli: 55000,
    hargaJual: 68000,
    totalTerjual: 20,
    sisaStok: 56,
  },
];

function getInfoPenjualan(dataPenjualan) {
  let totalKeuntungan = 0;
  let totalModal = 0;
  let bukuTerlaris = { judul: "", jumlahTerjual: 0 };
  let penulisTerlaris = { nama: "", jumlahTerjual: 0 };

  for (let i = 0; i < dataPenjualan.length; i++) {
    const book = dataPenjualan[i];
    let totalStock = book.totalTerjual + book.sisaStok;
    totalModal += book.hargaBeli * totalStock;
    let TotalJual = book.totalTerjual * book.hargaJual;
    totalKeuntungan += totalModal - TotalJual;
    for (let i = 0; i < dataPenjualan.length; i++) {
      const penulis = dataPenjualan[i].penulis;
      let totalTerjual = 0;
      for (let j = 0; j < dataPenjualan.length; j++) {
        if (dataPenjualan[j].penulis === penulis) {
          totalTerjual += dataPenjualan[j].totalTerjual;
        }
      }
      if (totalTerjual > penulisTerlaris.jumlahTerjual) {
        penulisTerlaris.nama = penulis;
        penulisTerlaris.jumlahTerjual = totalTerjual;
      }
    }

    if (book.totalTerjual > bukuTerlaris.jumlahTerjual) {
      bukuTerlaris.judul = book.namaProduk;
      bukuTerlaris.jumlahTerjual = book.totalTerjual;
    }
  }

  const persentaseKeuntungan = (totalKeuntungan / totalModal) * 100;

  return {
    totalKeuntungan,
    totalModal,
    bukuTerlaris,
    penulisTerlaris,
    persentaseKeuntungan,
  };
}

console.log(getInfoPenjualan(dataPenjualanNovel));
