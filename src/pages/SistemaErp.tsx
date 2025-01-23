import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Code, Cpu, PhoneCall, CheckCircle2 } from "lucide-react";
import Features from "@/components/Features";
import ParticlesBackground from "@/components/ParticlesBackground";
import ProfileHeader from "@/components/ProfileHeader";
import AboutMe from "@/components/AboutMe";
import CodeSnippets from "@/components/CodeSnippets";
import ModulesGrid from "@/components/ModulesGrid";

const SistemaErp = () => {
  const { toast } = useToast();

  const handleDemoRequest = () => {
    toast({
      title: "Solicitação Recebida!",
      description: "Em breve nossa equipe entrará em contato.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary via-primary-light to-secondary">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">
        <ProfileHeader />
        <AboutMe />

        <div className="absolute inset-0 opacity-30">
          <ParticlesBackground />
        </div>

        <div className="container relative z-20 px-4 mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <div className="relative inline-block mb-4 mt-16">
                <div className="text-4xl md:text-7xl font-bold text-white relative z-10 tracking-tight">
                  Rodrigo Dev
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl rounded-full" />
              </div>
              
              <div className="mb-8 animate-fade-up">
                <p className="text-lg md:text-2xl text-white/90 font-light leading-relaxed">
                  Transformando ideias em código, com a paixão de quem vive para criar 
                  <span className="block mt-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold">
                    e a expertise de quem respira tecnologia.
                  </span>
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-8">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 w-full sm:w-auto text-lg px-8 py-6 shadow-lg"
                  onClick={handleDemoRequest}
                >
                  <Code className="w-5 h-5 mr-2" />
                  Começar Agora
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/20 text-white hover:bg-white/10 w-full sm:w-auto text-lg px-8 py-6 backdrop-blur-sm"
                >
                  <Cpu className="w-5 h-5 mr-2" />
                  Ver Tecnologias
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CodeSnippets />
      <ModulesGrid />
      <Features />

      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-900/80 via-blue-800/80 to-purple-900/80 rounded-2xl p-8 lg:p-12 backdrop-blur-xl border border-white/20 shadow-2xl">
            <h2 className="text-3xl md:text-6xl font-extrabold mb-6 text-white drop-shadow-lg bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Pronto para Começar?
            </h2>
            <p className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto text-white font-semibold">
              Agende uma demonstração gratuita e descubra como nosso sistema pode
              transformar sua empresa
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 font-bold text-lg px-8 py-6"
                onClick={handleDemoRequest}
              >
                <PhoneCall className="w-5 h-5 mr-2" />
                Solicitar Contato
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/20 text-white hover:bg-white/10 font-bold text-lg px-8 py-6"
              >
                <CheckCircle2 className="w-5 h-5 mr-2" />
                Ver Planos
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SistemaErp;