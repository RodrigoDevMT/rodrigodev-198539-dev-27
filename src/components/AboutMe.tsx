const AboutMe = () => {
  return (
    <div className="w-full max-w-[85%] md:max-w-5xl mx-auto mt-24 mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12 animate-fade-up">
        Sobre Mim
      </h2>
      <div className="bg-white/10 p-8 md:p-12 rounded-2xl backdrop-blur-md border border-white/20 shadow-xl">
        <div className="space-y-8 max-w-4xl mx-auto">
          <p className="text-lg md:text-xl text-white/90 leading-relaxed">
            Rodrigo Oliveira é um desenvolvedor de 39 anos, do estado de Mato Grosso, apaixonado por sistemas e tecnologia. Com uma sólida formação em desenvolvimento de software, ele tem se destacado na criação de soluções inovadoras que otimizam processos e melhoram a experiência do usuário.
          </p>
          <div className="space-y-4">
            <h4 className="text-2xl font-semibold text-white mb-4">Experiência Profissional</h4>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              Rodrigo acumulou experiência em diversas áreas da tecnologia, incluindo desenvolvimento web, aplicativos móveis e sistemas de gestão. Ele já trabalhou em projetos desafiadores que exigiram habilidades em linguagens de programação como Flutter, FlutterFlow, Java, Python e JavaScript, além de ter experiência com bancos de dados e metodologias ágeis. O desenvolvimento com inteligência artificial também agiliza os processos e permite entregas com alta escalabilidade.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-2xl font-semibold text-white mb-4">Interesses e Hobbies</h4>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              Fora do ambiente profissional, Rodrigo é um entusiasta da tecnologia e adora acompanhar as últimas tendências do setor. Ele também se dedica a projetos pessoais, como desenvolver aplicativos que ajudam a resolver problemas do dia a dia. Além disso, é fã de jogos eletrônicos e frequentemente participa de comunidades online para compartilhar suas experiências e aprender com outros desenvolvedores.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-2xl font-semibold text-white mb-4">Objetivos Futuros</h4>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              Rodrigo busca constantemente aprimorar suas habilidades e expandir seu conhecimento em áreas como inteligência artificial e aprendizado de máquina. Ele está sempre em busca de novos desafios que possam contribuir para seu crescimento profissional e pessoal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;