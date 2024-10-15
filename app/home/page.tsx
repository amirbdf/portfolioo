import Image from "next/image";
import * as Typewriter from "react-effect-typewriter";
import Link from "next/link"; // Import Link from Next.js

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[var(--font-geist-sans)] bg-gradient-to-r from-blue-500 to-purple-600">
      <h1 className="text-3xl font-bold text-white mb-4">Welcome to My Portfolio!</h1>
      <Typewriter.Paragraph className="text-xl text-white text-center bg-opacity-80 bg-gray-800 p-4 rounded-lg shadow-lg">
        Hello World! This is Mohamed Amir Ben Dhief, you can call me Amir!
      </Typewriter.Paragraph>
      <div className="text-sm text-gray-300">
        <p>Explore my projects and learn more about me!</p>
      </div>
      <Link href="/Aboutme" passHref>
        <button className="mt-4 px-6 py-2 text-lg font-semibold text-blue-600 bg-white rounded-lg shadow-md hover:bg-blue-100 transition duration-300">
          Get to Know Me
        </button>
      </Link>
    </div>
  );
}
