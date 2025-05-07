import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center text-center p-6 bg-white rounded-2xl shadow-lg max-w-xl w-full">
      <Image
        src="/logo.png"
        alt="HK Mastercam Solutions Logo"
        width={250}
        height={250}
        className="mx-auto mb-6"
      />
      <h1 className="text-4xl font-bold mb-4">HK Mastercam Solutions</h1>
      <p className="text-xl text-gray-700 mb-6">
        Professional Mastercam Programming Services for CNC Machining
      </p>
      <div className="text-gray-600 text-lg">
        <p>Email: 2627.bk@gmail.com</p>
        <p>Phone: +91-8190033945</p>
      </div>
    </main>
  );
}
