import HeroImg from "@/assets/images/hero.png";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Developer, Creator, Innovator
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                Hello! I'm Hiroshi Tanaka, a seasoned blockchain engineer with a Bachelor's degree 
                in Software Engineering and over 7+ years of full-stack development experience,
                 transitioning fully into Web3 in 2019.{" "}
              </p>

              <p className="text-white">
                 With a strong foundation in software architecture and deep enthusiasm for decentralized technologies, 
                 I have built and delivered production-grade blockchain applications across Ethereum, Solana, and L2 ecosystems. 
              </p>

              <p className="text-white">
                My smart contract work spans a wide range of technologies, including Solidity, 
                Rust with Anchor, Foundry (Forge & Cast), Hardhat, OpenZeppelin Contracts. 
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    Known for being both a strategic thinker and team-oriented implementer, 
                    I consistently bridge the gap between complex blockchain logic
                    and scalable user-facing applications.
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
