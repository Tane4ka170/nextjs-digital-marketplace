import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-yellow-900 sm:text-6xl">
            Your marketplace for premium{" "}
            <span className="text-amber-600"> digital assets</span>
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Welcome to DigitalBazaar. Each asset on our platform is reviewed by
            our team to guarantee the highest quality standards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="/products" className={buttonVariants()}>
              Explore what's trending
            </Link>
            <Button variant="ghost">Our commitment to quality &rarr;</Button>
          </div>
        </div>
      </MaxWidthWrapper>

      <section className="border-t border-yellow-200 bg-yellow-50">
        <MaxWidthWrapper className=""></MaxWidthWrapper>
      </section>
    </>
  );
}
