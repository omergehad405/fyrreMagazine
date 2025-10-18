import Link from "next/link";
import Image from "next/image";

function LatestMagazene() {
    return (
        <section className="lg:my-15 flex lg:flex-col flex-col-reverse ">
            <div className="flex justify-between flex-wrap">
                <Link href={`./magazene`} className="uppercase font-bold lg:text-[6rem] text-[3rem] lg:mt-0 mt-5 lg:w-[650px] leading-[1]">
                    Don’t close your eyes
                </Link>

                <div className="relative lg:w-[45%] lg:mt-0 mt-5">
                    <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.</p>
                    <div className="lg:absolute relative lg:bottom-0 flex lg:flex-row flex-col lg:items-center gap-5 mt-10">
                        <div className="flex items-center gap-3">
                            <span className="font-bold ">Text</span>
                            <Link href="" className="underline">Cristofer Vaccaro</Link>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="font-bold ">Date</span>
                            <p>September 22, 2022</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="font-bold ">Text</span>
                            <p>50 Min</p>
                        </div>
                    </div>
                </div>
            </div>

            <Link href="/" className="block w-full lg:h-[700px] h-[250px] relative mt-8">
                <Image
                    src="/latestMagazene.jpg"
                    alt="Logo"
                    fill
                    style={{ objectFit: "cover" }}
                    className="w-full h-full"
                    sizes="100vw"
                    priority
                />
            </Link>
        </section>
    )
}

export default LatestMagazene;