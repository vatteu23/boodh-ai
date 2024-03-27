import Container from "./Container"
import Typography from "./Typography";

const LogosSection: React.FC = () => {
    return (
        <Container className="py-12 md:py-24">
            <Typography variant="h3" wrapper="h2" className="text-center mb-8">Trusted by the world's best companies</Typography>
            <div className="flex flex-wrap justify-center items-center gap-y-6 gap-x-16">
                <img src="/images/logos/1.svg" alt="Logo 1" className="w-10 h-10" />
                <img src="/images/logos/2.svg" alt="Logo 2" className="w-10 h-10" />
                <img src="/images/logos/3.svg" alt="Logo 3" className="w-10 h-10" />
                <img src="/images/logos/1.svg" alt="Logo 1" className="w-10 h-10" />
                <img src="/images/logos/2.svg" alt="Logo 2" className="w-10 h-10" />
                <img src="/images/logos/3.svg" alt="Logo 3" className="w-10 h-10" />
            </div>
        </Container>
    )
}


export default LogosSection;