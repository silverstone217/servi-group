import Hero from "@/components/Hero";
import Services from "@/components/Services";
import { Target } from "lucide-react";

export default function Home() {
  return (
    <div className="p-4">
      {/* Hero Section */}
      <Hero />
      {/* Intro Section */}
      {/* Intro Section */}
      <section className="w-full py-24 pb-0 px-6 max-w-2xl mx-auto text-center">
        <div className="flex flex-col items-center gap-3 mb-6">
          <div className="bg-primary/10 p-4 rounded-2xl shadow-sm">
            <Target className="text-primary" size={42} />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Servi Group
          </h2>
        </div>

        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Servi Group offre une gamme de services conçus pour accompagner votre
          croissance, simplifier vos opérations et booster votre succès dans le
          monde des affaires.
        </p>

        <p className="text-sm md:text-base font-medium text-gray-600 mt-4">
          Nous recherchons constamment l’innovation et l’excellence pour vous
          offrir le meilleur.
        </p>
      </section>

      {/* Services */}
      <Services />

      {/* Inspirational Quote Section */}
      <section className="w-full py-16 px-6 bg-gray-50 flex justify-center">
        <div className="max-w-3xl text-center px-6 py-10 bg-white rounded-3xl shadow-lg">
          <p className="text-xl md:text-2xl text-gray-800 italic leading-relaxed">
            “Le succès semble être lié à l’action. Les gens qui réussissent
            continuent d’avancer. Ils font des erreurs, mais ils n’abandonnent
            pas.”
          </p>
          <span className="block mt-6 text-right text-gray-600 font-semibold">
            – Conrad Hilton
          </span>
        </div>
      </section>
    </div>
  );
}
