const problems = [
  {
    text: 'Школа делает упор на академические знания, а не на умение мыслить',
    color: '#5BC0EB',
  },
  {
    text: 'Индивидуальные особенности ребенка часто остаются за кадром',
    color: '#FF6B9A',
  },
  {
    text: 'Ребенка нельзя понять через тесты — нужно наблюдение в деле',
    color: '#3ED598',
  },
  {
    text: 'Мало практики самостоятельных решений в реальных ситуациях',
    color: '#5BC0EB',
  },
];

export function Problem() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
            Современное образование не развивает ключевые навыки будущего.
          </h2>
          <p className="text-xl text-gray-600">Настоящие качества проявляются только в действии</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <p className="text-gray-800 font-medium text-lg leading-relaxed">
                {problem.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
