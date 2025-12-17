import secondaryImage from "@/assets/secondary-adv5.jpg";

const SecondaryImageSectionTrauma = () => {
  return (
    <section className="py-2">
      <div className="container-article">
        <div className="relative rounded-xl overflow-hidden shadow-md">
          <img 
            src={secondaryImage} 
            alt="Mujer agotada mostrando fatiga crónica y sistema nervioso" 
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default SecondaryImageSectionTrauma;
