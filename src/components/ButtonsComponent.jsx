import { InfoButtons } from "./InfoButtons";

export const ButtonsComponent = () => {
  const interactiveButtons = [
    {
      name: "🏃‍♂️ ¡Incríbete y entretenemos!",
      href: "https://www.proyectowerun.com/",
    },
    {
      name: "📻 Voces de victoria",
      href: "https://open.spotify.com/show/0yXt7UtjjX9GyccFwfaVLp?go=1&sp_cid=079f56a21e3f0e871657691336be972f&utm_source=embed_player_p&utm_medium=desktop&nd=1",
    },
    {
      name: "NikeStore Calle 82 📍 Bogotá",
      href: "https://api.whatsapp.com/send?phone=573212092394&text=%C2%A1Estoy%20interesado%20en%20productos%20NIKE!",
    },
    {
      name: "NikeStore Santa fé 📍 Medellín",
      href: "https://api.whatsapp.com/send?phone=573208576389&text=%C2%A1Estoy%20interesado%20en%20productos%20NIKE!",
    },
    {
      name: "NikeStore Arboleda 📍 Pereira",
      href: "https://api.whatsapp.com/send?phone=573134786372&text=%C2%A1Estoy%20interesado%20en%20productos%20NIKE!",
    },
    {
      name: "NikeStore 📍 Panama",
      href: "https://www.sportline.com.pa/marcas/nike.html",
    },
    {
      name: "NikeStore 📍 Guatemala",
      href: "https://www.sportline.com.gt/marcas/nike.html",
    },
  ];
  return (
    <div className="container">
      <div className="container info">
        <h3 className="infoTitle"> 🏃‍♂️ ¡Mira lo que tenemos para ti!</h3>
      </div>
      <div className="containerPlaces">
        {interactiveButtons.map((value, key) => {
          return <InfoButtons href={value.href} name={value.name} key={key} />;
        })}
      </div>
    </div>
  );
};

export default ButtonsComponent;
