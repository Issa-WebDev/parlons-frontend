import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Headphones, MessageSquare, Share2 } from "lucide-react";
import { motion } from "framer-motion";
import { Mic } from "lucide-react";

const Landing = () => {
  return (
    <div className="bg-white">
      {/* Début de la nouvelle navbar */}
      <motion.nav className="bg-voicify-blue h-[10vh] dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <motion.div className="flex items-center">
              <Link
                to="/"
                className="flex text-white text-xl font-bold items-center gap-2"
              >
                PARLONS
              </Link>
            </motion.div>

            {/* Boutons */}
            <div className="flex items-center gap-4">
              <motion.div>
                <Link
                  to="/login"
                  className="text-white hover:underline px-4 py-2 rounded-lg transition-colors"
                >
                  Connexion
                </Link>
              </motion.div>

              <motion.div>
                <Link to="/register">
                  <Button className="bg-voicify-orange hover:bg-voicify-orange/90 rounded-lg">
                    S'inscrire
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.nav>

      {/* Hero Section avec bouton animé */}
      <section className="py-16 md:py-24 h-[80vh] bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div>
            <h1 className="text-3xl font-bold font-montserrat tracking-tight text-voicify-blue md:text-5xl">
              PARLEZ AU MONDE ENTIER
            </h1>
            <h2 className="pt-6 text-voicify-orange text-2xl">
              Viens tester le premier réseau social où on cause avec la voix
              seulement
            </h2>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              ! Ici, pas besoin d’écrire long long. Tu balances tes idées, tes
              pensées ou ton feeling en audio de 60 secondes, et puis c’est
              carré.  <br /> <br />
              Que tu veuilles dire un truc sérieux, raconter ta journée
              ou juste causer un peu, ta voix suffit pour te faire entendre. On
              est là pour tchatcher, ressentir, partager. Allons seulement !
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <motion.div>
                  <Link to="/register">
                    <Button
                      size="lg"
                      className="w-full sm:w-auto bg-voicify-orange hover:bg-voicify-orange/90 rounded-lg"
                    >
                      Commencer
                    </Button>
                  </Link>
                </motion.div>
                <motion.div>
                  <Link to="/login">
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full sm:w-auto rounded-lg bg-voicify-blue hover:bg-voicify-blue/90 text-white hover:text-white"
                    >
                      Se connecter
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center flex items-center justify-center h-[10vh] bg-voicify-blue/90">
        <span className="text-white text-center">
          PARLONS © 2025 - SIMPLON CI. Tous droits réservés.
        </span>
      </footer>
    </div>
  );
};

export default Landing;
