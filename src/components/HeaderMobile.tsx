import { FC, useState } from "react";
import styled from "styled-components";
import BurgerIcon from "./BurgerIcon";
import Button from "./Button";
import { HeaderMenuType, headerItems } from "./HeaderDesktop";
import Container from "./Container";
import Typography from "./Typography";


type BurgerIconProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  darkMode?: boolean;
};

const BIcon: FC<BurgerIconProps> = ({ isOpen, setIsOpen, darkMode }) => {
  return (
    <BurgerIcon
      className={isOpen ? "-open" : ""}
      onClick={() => setIsOpen(!isOpen)}
      darkMode={true}
    />
  );
};

const HeaderItemMobile: any = ({ name, items, setIsOpen }) => {
    return (
        <div className="mb-3">
            <Typography variant="p" className="mb-1">{name}</Typography>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>{item.label}</li>))}
            </ul>
        </div>
    )
}

const _renderItems = (setIsOpen: Function) => {
  return headerItems.map((item: HeaderMenuType) => {
    return <HeaderItemMobile key={item.id} {...item} setIsOpen={setIsOpen} />;
  });
};

type Props = {
  bgColor?:string;
  darkTextHeader?:boolean;
};

const HeaderMobile: FC<Props> = ({}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Outer className={`transition-all duration-300 ease-in py-6 !bg-zinc-900`}>
    
      <Wrapper>
        <a href="/" className="text-white">
            Boodh AI
        </a>
        <BIcon
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </Wrapper>

      {/* <Modal open={isOpen}> */}
      {isOpen && <div className="mt-4"> 
        <MenuWrapper>
          <Body>{_renderItems(setIsOpen)}
          <div className="flex flex-row gap-x-6 mt-6">
            <Button size="sm" href="/">Get in touch</Button>
            
          </div>
          </Body>
        </MenuWrapper>
        </div>}
    </Outer>
  );
};

export default HeaderMobile;

const Outer = styled.div`
  position: sticky;
  width: 100vw;
  top: 0;
  left: 0;
  
  
  background-color: rgba(255,255,255,.75);
  backdrop-filter: blur(150px);
  -webkit-backdrop-filter: blur(150px);

  z-index: 100 !important;

`;

const Wrapper = styled(Container)`
 
  padding: 0 24px;
  display: flex !important;
  justify-content: space-between;
  align-items: center;

  > a > img.labelbox-logo {
    width: 120px;
  }

  > i.material-icons {
    font-size: 36px;
  }
`;

const Head = Wrapper;

const Body = styled.div`
  padding: 24px;
  overflow-y: auto;

`;

const MenuWrapper = styled.div`
  height: 100vh;
  background-color: rgba(255,255,255,.75);
  backdrop-filter: blur(75px);
  -webkit-backdrop-filter: blur(75px);

`;
export const Arrow = styled.i`
    border: solid #000;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
    transition: transform .2s;
    
    &.right {
        transform: rotate(-45deg);
        -webkit-transform: rotate(-45deg);
    }

    &.left {
        transform: rotate(135deg);
        -webkit-transform: rotate(135deg);
    }

    &.up {
        transform: rotate(-135deg);
        -webkit-transform: rotate(-135deg);
    }

    &.down {
        transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
        margin-bottom: 6px;
    }
`;
