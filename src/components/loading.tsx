import React, { useRef, useEffect } from "react";
import Style from "../styles/loading.module.css";
import { gsap } from "gsap";

const Loading = () => {
  const imageName: any = useRef();
  const hide: any = useRef();
  const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

  useEffect(() => {
    gsap.to(imageName.current, { duration: 1.5, y: "0%", delay: 0.5 });
    gsap.to(hide.current, { duration: 1.5, y: "-100%", delay: 2 });
  }, []);

  return (
    <div ref={hide} className={Style.main}>
      <div className={Style.hide}>
        <img className={Style.image} ref={imageName} src="/logo.png" />
      </div>
    </div>
  );
};

export default Loading;
