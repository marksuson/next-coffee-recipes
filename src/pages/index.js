/* eslint-disable @next/next/no-img-element */
import Layout from "@/components/Layout";
import Image from "next/image";

export default function Home() {
  return (
    <Layout>
      <main className="text-white flex h-screen">
        <section className="pt-10 pl-10 flex-1 h-screen">
          <h1 className="text-3xl mb-10">Welcome to Coffee International</h1>
          <p className="mb-4">
            This page is intended to allow users to enter their favorite coffee
            recipes. It is a work in progress and when completed will allow
            users to enter the recipe, a photo or video, and a link where you
            can purchase the coffee and ingredients.
          </p>
          <p>
            It will require users to be logged in before they can post recipes.
          </p>
        </section>
        <section className="pt-10 pr-10 flex-1 h-screen relative">
          <Image
            src="/cappuccino-coffee.webp"
            alt="Cappuccino"
            width={550}
            height={550}
            className="absolute bottom-10 right-10"
          />
        </section>
      </main>
    </Layout>
  );
}
