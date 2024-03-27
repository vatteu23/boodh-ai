import Image from "next/image";

import Layout from "@/src/components/Layout";
import Typography from "@/src/components/Typography";
import Container from "@/src/components/Container";
import Button from "@/src/components/Button";
import Card, { CardProps } from "@/src/components/Card";
import HeadWithMetas from "@/src/components/HeadWithMetas";
import LogosSection from "../components/LogosSection";

import { motion } from "framer-motion";

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
  const title = "The future of AI is here".split(" ");
  return (
    <Layout className="bg-zinc-50">
      <HeadWithMetas
        title="Boodh AI - The future of AI is here"
        description="We are a team of AI experts who are passionate about making AI accessible to everyone."

      />
      {/* Hero section */}
      <div className="bg-zinc-900">
        <Container className="py-32 lg:pb-48">

          <div className="max-w-2xl mx-auto text-center">

            <Typography color="light"
              fontWeight="normal"
              variant="h1" wrapper="h3"
              className="!leading-tighter mb-4 text-center">
              {title.map((el, i) => (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 1,
                    delay: i / 10,
                  }}
                  key={i}
                >
                  {el}{" "}
                </motion.span>
              ))}
            </Typography>
            <Typography color="light" variant="p" className="text-center">We are a team of AI experts who are passionate about making AI accessible to everyone.</Typography>
            <div className="flex justify-center  gap-x-4 mt-8">
              <Button color="light">GET STARTED</Button>
              <Button color="light" variant="outlined">CONTACT US</Button>
            </div>
          </div>

        </Container>
      </div>

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

      <LogosSection />
    </Layout>
  );
}
