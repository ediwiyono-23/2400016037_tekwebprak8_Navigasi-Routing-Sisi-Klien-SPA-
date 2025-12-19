export default function Projects() {
  const projects = [
    {
      title: "Ruang Ekspresi",
      desc: "Website organisasi Ruang Ekspresi",
      tech: "HTML, CSS, JavaScript",
      link: "https://ediwiyono-23.github.io/2400016037_tekwebprak7_React-Vite/"
    },
    {
      title: "To-Do List",
      desc: "Aplikasi To-Do List dengan DOM",
      tech: "HTML, CSS, JavaScript",
      link: "https://ediwiyono-23.github.io/pertemuan-3-html-DOM/"
    },
    {
      title: "My Portfolio (HTML)",
      desc: "Portofolio sederhana HTML & CSS",
      tech: "HTML, CSS",
      link: "https://ediwiyono-23.github.io/2400016037_tekwebprak5_My-Portfolio/"
    },
  ];

  return (
    <section className="w-full min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold mb-10">Projects</h1>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, index) => (
            <a
              key={index}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-slate-800 rounded-xl p-6 hover:bg-slate-700 transition"
            >
              <h2 className="text-xl font-semibold mb-2">{p.title}</h2>
              <p className="text-gray-300 mb-4">{p.desc}</p>
              <span className="text-sm text-blue-400">{p.tech}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
