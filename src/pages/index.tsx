import Image from "next/image";

import Layout from "@/src/components/Layout";
import Typography from "@/src/components/Typography";
import Container from "@/src/components/Container";
import Button from "@/src/components/Button";
import Card, { CardProps } from "@/src/components/Card";
import HeadWithMetas from "@/src/components/HeadWithMetas";


const features: CardProps[] = [
  {
    title: "Data Management",
    description: "Bring more workloads, users and use cases directly to your data, and connect with the most relevant content all within the Data Cloud.",
    background: "bg-blue-300",
    link: "/data-management"
  },
  {
    title: "Data Science",
    description: "Bring more workloads, users and use cases directly to your data, and connect with the most relevant content all within the Data Cloud.",
    background: "bg-orange-300",
    link: "/data-science"
  },
  {
    title: "Machine Learning",
    description: "Bring more workloads, users and use cases directly to your data, and connect with the most relevant content all within the Data Cloud.",
    background: "bg-amber-300",
    link: "/machine-learning"
  }
]

export default function Home() {

  return (
    <Layout className="bg-zinc-50">
      <HeadWithMetas 
        title="Boodh AI - The future of AI is here"
        description="We are a team of AI experts who are passionate about making AI accessible to everyone."
        
      />
      {/* Hero section */}
      <Container className="py-12 md:py-24">

        <div className="grid grid-cols-12 gap-6 ">
          <div className="col-span-12 md:col-span-6 lg:col-span-5">

            <Typography variant="h1" wrapper="h3" className="!leading-tighter mb-4 text-center md:text-left">The future of AI is here</Typography>
            <Typography variant="p" className="text-center md:text-left">We are a team of AI experts who are passionate about making AI accessible to everyone.</Typography>
            <div className="flex justify-center md:justify-start gap-x-4 mt-8">
              <Button>Get Started</Button>
              <Button variant="outlined">Contact us</Button>
            </div>
          </div>
          <div className="col-span-12  md:col-span-6">
            <img src="/images/hero.svg"
              alt="Boodh AI"
              className="mx-auto"
            />
          </div>
        </div>
      </Container>

      {/* Platform section */}
      <Container className="py-12 md:py-24">
        <div className=" text-center">
          <Typography variant="h3" fontWeight="extrabold" wrapper="h2" className="max-w-md mb-6 mx-auto ">BRING WORKLOADS
            TO THE DATA
          </Typography>
          <Typography variant="p"
            className="max-w-xl mx-auto "
          >Bring more workloads, users and use cases directly to your data, and
           connect with the most relevant content all within the Data Cloud.</Typography>
        </div>
        <div className="grid grid-cols-12 gap-6 mt-12">
          {features.map((feature, index) => {
            return (
              <div className="col-span-12 md:col-span-4" key={index}>
                <Card {...feature} />
              </div>
            )
          })}
        </div>
      </Container>
    </Layout>
  );
}
