import { Button } from "@/components/ui/button";
import { Camera } from "lucide-react"
import logo from "@/assets/logo.svg"
import landingImg from "@/assets/main.svg"
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
        <Image src={logo} alt="logo" />
      </header>
      <section className="max-w-6xl mx-auto px-4 sm:px-8 h-screen -mt-20 grid lg:grid-cols-[1fr,400px] items-center">
        <div>
          <h1 className="capitalize text-4xl md:text-7xl font-bold">
            job <span className="text-primary">tracking</span>
          </h1>
          <p className="leading-loose max-w-md mt-4"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio iure fugit expedita, ipsa voluptatum laudantium nulla qui quos voluptate dolore?</p>
          <Button asChild className="mt-4">
            <Link href={'/add-job'}>
              Get Started
            </Link>
          </Button>
        </div>
        <div>
          <Image src={landingImg} className="hidden lg:block" alt="landing img" />
        </div>
      </section>
    </main>
  );
}
