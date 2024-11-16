import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";
import Link from "next/link";

const perks = [
  {
    name: "Immediate Delivery",
    icon: ArrowDownToLine,
    description:
      "Receive your assets instantly via email and download them immediately",
  },
  {
    name: "Quality Assurance",
    icon: CheckCircle,
    description:
      "Every asset on our platform is verified ny our team to ensure our highest quality standards. Not happy? We offer a 30-day refund guarantee",
  },
  {
    name: "In Support of the Planet",
    icon: Leaf,
    description:
      "We commit 1% of our sales to preserving and restoring the natural environment",
  },
];

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
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perk) => (
              <div
                key={perk.name}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
              >
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-amber-100 text-amber-900">
                    {<perk.icon className="w-1/3 h-1/3" />}
                  </div>
                </div>

                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-base font-medium text-yellow-900">
                    {perk.name}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
