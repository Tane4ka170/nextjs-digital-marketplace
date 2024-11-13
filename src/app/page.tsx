import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
        <h1>
          Your marketplace for premium{" "}
          <span className="text-amber-600"> digital assets</span>
        </h1>
      </div>
    </MaxWidthWrapper>
  );
}
