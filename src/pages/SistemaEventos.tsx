import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Calendar, Music, Users, Sparkles, Phone, Instagram } from "lucide-react";
import ParticlesBackground from "@/components/ParticlesBackground";
import { useNavigate } from "react-router-dom";

const SistemaEventos = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleContactClick = () => {
    window.open('https://wa.me/5566992480993', '_blank');
  };

  const handleSocialRedirect = () => {
    window.open('https://instagram.com/first_developer_mt', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-pink-800 to-orange-700">
      <section className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden pt-32">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("/lovable-uploads/deae0225-56db-4a40-9702-c232fc1b8504.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.2
          }}
        />
        
        {/* Particles Overlay */}
        <div className="absolute inset-0 z-10">
          <ParticlesBackground />
        </div>
        
        <div className="container relative z-20 px-4 mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <div className="relative inline-block mb-4 mt-16">
                <div className="text-4xl md:text-7xl font-bold text-white relative z-10 tracking-tight">
                  Sistema de Eventos
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl rounded-full" />
              </div>
              
              <div className="mb-8 animate-fade-up">
                <p className="text-lg md:text-2xl text-white/90 font-light leading-relaxed">
                  Transforme seus eventos em experiências inesquecíveis
                  <span className="block mt-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold">
                    com nossa plataforma completa de gestão
                  </span>
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {[
                  { icon: Calendar, text: "Gestão de Datas" },
                  { icon: Music, text: "Controle de Shows" },
                  { icon: Users, text: "Gestão de Público" },
                  { icon: Sparkles, text: "Efeitos Especiais" }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300"
                  >
                    <item.icon className="w-8 h-8 text-white mb-4" />
                    <h3 className="text-white font-semibold">{item.text}</h3>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white w-full sm:w-auto text-lg px-8 py-6"
                  onClick={handleContactClick}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Falar no WhatsApp
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent backdrop-blur-sm border-2 border-white/20 text-white hover:bg-white/10 w-full sm:w-auto text-lg px-8 py-6"
                  onClick={handleSocialRedirect}
                >
                  <Instagram className="w-5 h-5 mr-2" />
                  @first_developer_mt
                </Button>
              </div>
            </div>

            <div className="flex-1 relative">
              <img
                src="/lovable-uploads/deae0225-56db-4a40-9702-c232fc1b8504.png"
                alt="Evento com luzes e efeitos especiais"
                className="w-full h-auto rounded-2xl shadow-2xl animate-float"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SistemaEventos;