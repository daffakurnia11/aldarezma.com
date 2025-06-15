import Navbar from "@/components/navbar";
import Typography from "@/components/typography";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="jumbotron">
        <div className="container mx-auto grid grid-cols-2 items-center px-5">
          <div className="">
            <Typography.Heading
              level={4}
              className="text-primary-600 text-end mb-4"
            >
              Ngiklan gak harus boncos.
            </Typography.Heading>
            <Typography.Heading
              level={1}
              className="text-primary-600 text-end ms-auto max-w-[630px]"
            >
              &ldquo;TikTok Ads & CPAS bisa jadi mesin cuan kalau tahu cara
              mainnya&ldquo;
            </Typography.Heading>
            <div className="w-fit ms-auto relative lg:block hidden">
              <div className="absolute -z-1 w-[650px] h-[150px] -left-[400px] -top-4 bg-linear-to-r from-primary-600 to-neutral-100 rounded-l-xl translate-x-[370px]"></div>
              <div className="relative z-10 mt-11">
                <Typography.Heading
                  level={3}
                  className="text-secondary-600 text-end mb-2"
                >
                  Alda Rezma D. C.
                </Typography.Heading>
                <Typography.Heading
                  level={5}
                  className="text-neutral-100 text-end"
                >
                  Digital Advertiser Expert
                  <br />
                  CEO Straight Up Digital
                </Typography.Heading>
              </div>
            </div>
          </div>
          <div className="">
            <Image
              src={"/img/jumbotron-img.png"}
              alt="Alda Rezma Photo"
              className=""
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </section>
    </>
  );
}
