'use client';

import Image from "next/image";
import { useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white dark:bg-gray-900 dark:text-white text-black transition-all duration-500 ease-in-out px-10 md:px-10 lg:px-40">

        <section>
          <nav className="py-5 mb-5 flex justify-between items-center flex-wrap">
            {/* <h1 className="text-2xl font-burtons text-teal-500 hover:text-teal-600 cursor-pointer transition-all duration-300"> */}
              <Image
              src="/images/k.jpg"
              alt="Logo"
              width={50}
              height={50}
              className="text-2xl rounded-full"
              layout="responive"
              />
           
            <ul className="flex items-center gap-5">
              
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl  transition duration-300"
                  // text-teal-500 hover:text-teal-600

                />
              </li>
              
              <li>
                <a
                  className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition duration-300 transform hover:scale-105"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
        </section>

       
        <section className="text-center py-1">
          <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-4xl">Karan Kacha</h2>
          <h3 className="text-2xl py-2">Developer and Designer</h3>
          <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-white">
            I am a software developer and designer with a passion for building innovative and user-friendly digital products.
          </p>
          <div className="flex justify-center gap-12 text-5xl py-3 text-gray-600 dark:text-gray-400">
            <a href="https://x.com/kacha_karan_"> <AiFillTwitterCircle 
              className="hover:text-teal-500 transition-all duration-300 transform hover:scale-125"
            /></a>
            <AiFillLinkedin
              className="hover:text-teal-500 transition-all duration-300 transform hover:scale-125"
            />
            <a href="https://www.instagram.com/kacha_karan_"><AiFillInstagram
              className="hover:text-teal-500 transition-all duration-300 transform hover:scale-125"
            /></a>
          </div>
          <div className="relative mx-auto w-80 h-80 md:h-96 md:w-96 rounded-full overflow-hidden mt-8">
            <Image
              src="/images/hoodie.jpg"
              layout="fill"
              objectFit="cover"
              alt="Karan Kacha Profile Picture"
            />
          </div>
        </section>

        {/* Services Section */}
        <section className="py-10">
          <h3 className="text-3xl py-1 text-center text-teal-600">Services I Offer</h3>
          <p className="text-md py-2 leading-8 text-gray-800 text-center dark:text-white">
            I offer a range of services including web development,{" "}
           mobile app development, and digital design.
          </p>
          <div className="lg:flex gap-10 justify-center">
            {/* Service 1 */}
            <div className="text-center shadow-xl p-10 rounded-xl my-10 dark:bg-white hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <Image
                src="/images/des.png"
                width={250}
                height={250}
                className="rounded-full"
                alt="Beautiful Design Service"
              />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-black">Beautiful Designs</h3>
              <p className="p-2 dark:text-black">
                I create visually appealing and user-friendly designs that meet your business needs.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I use</h4>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>

            {/* Service 2 */}
            <div className="text-center shadow-xl p-10 rounded-xl my-10 dark:bg-white hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <Image
                src="/images/app-dev.png"
                width={250}
                height={250}
                className="rounded-full"
                alt="Mobile App Development Service"
              />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-black">Mobile App Development</h3>
              <p className="p-2 dark:text-black">
                I create mobile applications that deliver high performance and smooth user experiences.
              </p>
              <h4 className="py-4 text-teal-600">Tech I use</h4>
              <p className="text-gray-800 py-1">React Native</p>
              <p className="text-gray-800 py-1">Flutter</p>
              <p className="text-gray-800 py-1">Swift</p>
            </div>

            {/* Service 3 */}
            <div className="text-center shadow-xl p-10 rounded-xl my-10 dark:bg-white hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <Image
                src="/images/web-dev.jpg"
                width={250}
                height={250}
                className="rounded-full"
                alt="Web Development Service"
              />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-black">Web Development</h3>
              <p className="p-2 dark:text-black">
                I build dynamic and responsive websites tailored to your business needs.
              </p>
              <h4 className="py-4 text-teal-600">Web Technologies I use</h4>
              <p className="text-gray-800 py-1">Next.js</p>
              <p className="text-gray-800 py-1">React.js</p>
              <p className="text-gray-800 py-1">Node.js</p>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-20">
          <h3 className="text-3xl py-1 text-center text-teal-600">Portfolio</h3>
          <p className="text-xl py-2 leading-8 text-gray-800 text-center dark:text-white">
            Explore my creative works that demonstrate my web development and design skills.
          </p>
          <div className="flex flex-col gap-10 lg:flex-row lg:flex-wrap justify-center py-5">
            {/* Portfolio Item 1 */}
            <div className="basis-1/4 flex-1 transition-transform duration-500 ease-in-out transform hover:scale-105">
              <Image
                src="/images/img1.png"
                height={100}
                width={100}
                layout="responsive"
                className="h-full w-full rounded-lg object-cover"
                alt="Portfolio Item 1"
              />
            </div>
            {/* Portfolio Item 2 */}
            <div className="basis-1/4 flex-1 transition-transform duration-500 ease-in-out transform hover:scale-105">
              <Image
                src="/images/image.png"
                height={100}
                width={100}
                layout="responsive"
                className="h-full w-full rounded-lg object-cover"
                alt="Portfolio Item 2"
              />
            </div>
            {/* Portfolio Item 3 */}
            <div className="basis-1/4 flex-1 transition-transform duration-500 ease-in-out transform hover:scale-105">
              <Image
                src="/images/img2.png"
                height={100}
                width={100}
                layout="responsive"
                className="h-full w-full rounded-lg object-cover"
                alt="Portfolio Item 3"
              />
            </div>
            {/* Portfolio Item 4 */}
            {/* <div className="basis-1/4 flex-1 transition-transform duration-500 ease-in-out transform hover:scale-105">
              <Image
                src="/images/4.jpg"
                height={100}
                width={100}
                layout="responsive"
                className="h-full w-full rounded-lg object-cover"
                alt="Portfolio Item 4"
              />
            </div> */}
            {/* Portfolio Item 5 */}
            {/* <div className="basis-1/4 flex-1 transition-transform duration-500 ease-in-out transform hover:scale-105">
              <Image
                src="/images/4.jpg"
                height={100}
                width={100}
                layout="responsive"
                className="h-full w-full rounded-lg object-cover"
                alt="Portfolio Item 5"
              />
            </div> */}
          </div>
        </section>
      </main>
    </div>
  );
}
