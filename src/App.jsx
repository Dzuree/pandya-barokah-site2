export default function App() {
  return (
    <div className="font-sans text-gray-800">
      <nav className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-green-700">Pandya Barokah</h1>
        <div className="space-x-6">
          <a href="#home" className="hover:text-green-700">Beranda</a>
          <a href="#produk" className="hover:text-green-700">Katalog</a>
          <a href="#tentang" className="hover:text-green-700">Tentang</a>
          <a href="#kontak" className="hover:text-green-700">Kontak</a>
        </div>
      </nav>

      <section id="home" className="bg-green-100 p-10 text-center">
        <h2 className="text-4xl font-bold mb-4">Furniture Custom Berkualitas</h2>
        <p className="text-lg">Pesan furniture impian Anda di Pandya Barokah!</p>
      </section>

      <section id="produk" className="p-10 bg-white">
        <h3 className="text-3xl font-bold mb-6 text-center">Katalog Produk</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {["Meja", "Lemari", "Kursi"].map((item) => (
            <div key={item} className="border rounded-2xl p-4 shadow-sm">
              <img src={`https://via.placeholder.com/300x200?text=${item}`} alt={item} className="rounded-xl mb-4" />
              <h4 className="text-xl font-semibold">{item} Custom</h4>
              <p className="text-sm text-gray-600">Desain sesuai keinginan Anda.</p>
            </div>
          ))}
        </div>
      </section>

      <section id="tentang" className="bg-gray-100 p-10 text-center">
        <h3 className="text-3xl font-bold mb-4">Tentang Pandya Barokah</h3>
        <p className="max-w-2xl mx-auto">
          Pandya Barokah adalah produsen furniture custom di Bandung yang sudah berpengalaman lebih dari 10 tahun. 
          Kami melayani pembuatan furniture rumah, kantor, hingga cafe.
        </p>
      </section>

      <section id="kontak" className="bg-white p-10 text-center">
        <h3 className="text-3xl font-bold mb-4">Hubungi Kami</h3>
        <p>📍 Jl. Raya Cipatik No.33</p>
        <p>📱 WhatsApp: <a className="text-green-700" href="https://wa.me/6281214474300">0812-1447-4300</a></p>
        <p>📷 Instagram: <a className="text-green-700" href="https://instagram.com/pandyabarokah">@pandyabarokah</a></p>
      </section>

      <footer className="bg-green-700 text-white text-center p-4">
        &copy; 2025 Pandya Barokah. All rights reserved.
      </footer>
    </div>
  );
}
