import { cn } from "@/src/functions/cn";
import Typography from "./Typography";
import Button from "./Button";




export type CardProps = {
    background?: string;
    title: string;
    description: string;
    link: string;
}

const Card: React.FC<CardProps> = (props:CardProps) => {
    return (
        <div className="bg-white shadow-md overflow-clip rounded-lg ">
            <div className={cn('aspect-video relative', props.background)}>
                {/* <div className="absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%]">
                    I
                </div> */}
            </div>
            <div className="p-4">
            <Typography variant="h5" wrapper="h4" className="">{props.title}</Typography>
            <Typography variant="p" className="mt-2 mb-4">{props.description}</Typography>                
            <a className=" text-zinc-600 hover:text-zinc-900 font-medium" href={props.link}>
                Learn more
            </a>
            </div>
        </div>
    );
}

export default Card;