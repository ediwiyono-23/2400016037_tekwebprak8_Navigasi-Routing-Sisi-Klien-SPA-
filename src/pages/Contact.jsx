export default function Contact() {
  return (
    <section className="w-full min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold mb-10">Contact Me</h1>

        {/* FORM */}
        <form className="space-y-5 mb-12">
          <input
            type="text"
            placeholder="Nama"
            className="w-full p-4 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full p-4 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
          />

          <textarea
            rows="4"
            placeholder="Pesan"
            className="w-full p-4 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
          ></textarea>

          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition font-semibold"
          >
            Kirim Pesan
          </button>
        </form>

        {/* INFO KONTAK */}
        <div className="border-t border-slate-700 pt-6 space-y-3 text-gray-300">
          <p>
            📧 Email:{" "}
            <a
              href="mailto:ediwiyono001@gmail.com"
              className="text-blue-400 hover:underline"
            >
              ediwiyono001@gmail.com
            </a>
          </p>

          <p>
            📱 WhatsApp:{" "}
            <a
              href="https://wa.me/6282337736023"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              +62 823-3773-6023
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
