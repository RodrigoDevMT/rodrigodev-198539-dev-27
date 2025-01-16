import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-primary to-primary-light">
      <div className="container mx-auto px-4">
        <div className="text-center text-white max-w-4xl mx-auto relative">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up">
                Transformando Ideias em Soluções Digitais
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-up">
                Desenvolvimento de sistemas personalizados, aplicativos web e mobile para impulsionar seu negócio ao próximo nível.
              </p>
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 animate-fade-up"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Fale Conosco
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row gap-8 animate-fade-up w-full md:w-auto">
              <img 
                src="/lovable-uploads/3cd42689-d953-409e-be7c-a086e97c130a.png" 
                alt="Sistema 1"
                className="w-full sm:w-72 md:w-96 h-auto object-contain hover:scale-105 transition-transform duration-300"
              />
              <img 
                src="/lovable-uploads/b0db2735-0ba8-4c37-bbc2-0cec9837d6b5.png" 
                alt="Sistema 2"
                className="w-full sm:w-72 md:w-96 h-auto object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;