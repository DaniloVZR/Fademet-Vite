export const servicesList = [
  "Techos Metálicos",
  "Casetas",
  "Pérgolas",
  "Acero Inoxidable",
  "Impermeabilización de superficies con soluciones asfálticas",
  "Asesoría, diseño y fabricación de todo tipo de prototipos metálicos",
  "Cubiertas",
  "Pisos en deck",
  "Bases Metálicas",
  "Cárcamos Metálicos",
  "Puertas fijas, batientes y corredizas con motor",
  "Cerramientos",
  "Montaje de cubiertas en placa de superboard o fibrocemento",
  "Escaleras Metálicas",
  "Ventanería en Aluminio",
  "Soldadura en general MIG-MAG en acero al carbono e inoxidable",
  "Fascia o áticos en aluminio",
  "Soportes de acero en general",
  "Mezzanine",
  "Pasamanos industriales y domésticos",
  "Plataformas",
  "Ingeniería, diseño, fabricación de estructuras metálicas",
  "Manifolds, spools y bypass de tuberías con accesorios completos, prefabricado de tuberías",
]

export const scrollToTop = () => {
  setTimeout(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, 100)
};

export const scrollTo = (idSection) => {
  setTimeout(() => {
    const aboutElement = document.getElementById(idSection);
    const offsetTop = aboutElement.offsetTop - 82.75;
    window.scrollTo({ top: offsetTop, behavior: "smooth" });
  }, 100);
}