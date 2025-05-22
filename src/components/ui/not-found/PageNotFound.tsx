import { titleFont } from "@/config/fonts";
import Link from "next/link";
import Image from "next/image";

export const PageNotFound = () => {
  return (
    <div className="flex justify-center items-center  w-full md:flex-row flex-col-reverse align-middle">
      <div className="text-center">
        <h2 className={`${titleFont.className} antialiased text-9xl`}>404</h2>
        <p className="font-semibold text-xl mt-2">Whoops! Lo sentimos mucho</p>
        <p className="font-light mt-1 flex flex-col">
          <span>Puedes regresar al </span>
          <Link href="/" className="font-normal hover:underline transition-all">
            Inicio
          </Link>
        </p>
      </div>
      <div className="px-5 mx-5">
        <Image
          src="/imgs/starman_750x750.png"
          alt="Starman"
          className="p-5 sm:p-0"
          width={550}
          height={550}
        />
      </div>
    </div>
  );
};
