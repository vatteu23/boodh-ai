import { FC, useState, useEffect } from "react";
import HeaderMobile from "./HeaderMobile";
import HeaderDesktop from "./HeaderDesktop";

type HeaderProps = {
 bgColor?:string;
 bannerSection?:any;
 darkTextHeader?:boolean;
}

const Header: FC<HeaderProps> = ({bgColor,darkTextHeader}) => {
  let [width, setWidth] = useState(400);

  useEffect(() => {
    const getWidth = () =>
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    setWidth(getWidth());
    const resizeListener = () => {
      setWidth(getWidth());
    };
    
    window.addEventListener("resize", resizeListener);
    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);


  return width < 1024 ? (
    <HeaderMobile />
  ) : (
    <HeaderDesktop />
  );
};

export default Header;
