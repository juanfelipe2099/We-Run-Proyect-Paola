import { useState } from "react";
import { SubscribeModal } from "./SubscribeModal";

import { IconsComponent } from "./IconsComponent";
import { PrincipalTitle } from "./PrincipalTitle";

export const Header = () => {
  const iconsInfo = [
    {
      href: "https://www.instagram.com/proyectowerun/",
      src: "./src/assets/instagram.png",
      alt: "we run",
      width: 30,
      height: 30,
    },
    {
      href: "https://www.tiktok.com/@proyectowerun",
      src: "./src/assets/tik-tok.png",
      alt: "tik tok",
      width: 30,
      height: 30,
    },
    {
      href: "https://open.spotify.com/show/0yXt7UtjjX9GyccFwfaVLp?si=64a932bf85d14016&nd=1",
      src: "./src/assets/spotify.png",
      alt: "spotify",
      width: 30,
      height: 30,
    },
    {
      href: "https://www.youtube.com/@ProyectoWeRun",
      src: "./src/assets/youtube.png",
      alt: "youtube",
      width: 30,
      height: 30,
    },
  ];

  const [enable, setEnabled] = useState(false);
  const handleClose = () => {
    setEnabled(false);
  };

  const handleOpen = () => {
    setEnabled(true);
  };

  return (
    <>
      <div>
        <header>
          <div className="container">
            <div className="buttonContainer">
              <button
                className="btn btn-primary btn-style"
                type="button"
                onClick={() => handleOpen()}
              >
                <img
                  src="./src/assets/bell.svg"
                  alt="notification"
                  width={20}
                  height={20}
                  className="svgImage"
                />
                Subscribe
              </button>
            </div>
            <div className="container">
              <PrincipalTitle
                src="https://ugc.production.linktr.ee/hTZoQ6QoRUi4C7RR1Qh8_Jv348HJz49173k0o"
                title="proyectowerun"
              />
            </div>
            <div className="row">
              {iconsInfo.map((value, key) => {
                return (
                  <IconsComponent
                    src={value.src}
                    href={value.href}
                    alt={value.alt}
                    width={value.width}
                    height={value.height}
                    key={key}
                  />
                );
              })}
            </div>
          </div>
        </header>
        <div>{enable && <SubscribeModal handleClose={handleClose} />}</div>
      </div>
    </>
  );
};

export default Header;
