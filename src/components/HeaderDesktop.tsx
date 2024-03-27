import { useEffect } from "react";
import Typography from "./Typography";
import Container from "./Container";
import Button from "./Button";

type DesktopNavProps = {
}
export type HeaderMenuType = {
    name: string;
    id?: string;
    items: HeaderItemType[];
}
export type HeaderItemType = {
    label: string;
    url: string;
    id: string;
}

export const headerItems: HeaderMenuType[] = [
   
    {
        name:"COMPANY",
        id:"company",
        items:[
            {
                label:"About",
                url:"/company/",
                id:"about"
            },
            {
                label:"Careers",
                url:"/company/careers/",
                id:"careers"
            },
            {
                label:"Partnerships",
                url:"/company/partnerships/",
                id:"partnerships"
            },
            {
                label:"Press",
                url:"/company/press/",
                id:"press"
            }
        ]
    }, {
        name: "SOLUTIONS",
        id: "solutions",
        items: [
            {
                label: "Advertising",
                url: "",
                id: "service1",
            },
           {
                label: "Financial Services",
                url: "",
                id: "service2",
            },
            {
                label: "Healthcare",
                url: "",
                id: "service3",
            },
            {
                label: "Retail",
                url: "",
                id: "service4",
            },
        ],
    },
]


const HeaderDesktop: React.FC<DesktopNavProps> = (props: DesktopNavProps) => {

  return (<header
    className={`sticky top-0 z-50 bg-zinc-900 transition-all duration-300 ease-in`}
  >
    <Container className=" flex space-between mx-auto p-3 ">
      <span className="2xl:grow 2xl:flex-1 flex items-center">
        <a href="/" className="text-white">
          BOODH AI
        </a>
      </span>
      <span className="block lg:block ml-5 2xl:ml-0">
        <span className=" h-full flex items-center">
          {headerItems.map((item: HeaderMenuType, index: number) => {
            return <span className="relative group cursor-pointer px-3 py-2"
              key={index} id={item.id}
            
            >
              <button
                className={`
                  group-hover:opacity-70 text-sm font-normal text-white tracking-widest
                  `}
                aria-haspopup="true"
              >
                {item.name}
              </button>
              <div
                className={`
                  absolute top-7
                  invisible group-hover:!visible
                  z-50
                  w-max
                  `}
              >
                <div
                  className="bg-white 
                  backdrop-blur-3xl
                    opacity-0 group-hover:opacity-100 duration-150 ease-in relative top-6  rounded-xl shadow-xl w-full"
                >
                  <div className="relative z-60 flex flex-col gap-y-2 p-4">
                    {item.items.map((subItem: HeaderItemType, index: number) => {return <a className="hover:text-neutral-600" href={subItem.url}>
                        {subItem.label}
                    </a>})}
                  </div>
                </div>
              </div>
            </span>
          })}
        </span>
      </span>
      <span className="block lg:flex gap-4 items-center grow justify-end flex-1">
        <Button
          href="/contact/"
         
            size="sm"
            color="light"
          className="log-in hidden xl:block"
        >
         Get in touch
        </Button>
      
      </span>


    </Container>
  </header>

  )
};
export default HeaderDesktop;