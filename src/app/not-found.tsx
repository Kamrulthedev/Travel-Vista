import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center font-serif">
      <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-6 text-black">Oops! Page Not Found</h2>
      <p className="text-lg mb-6 text-black">It seems like the page you&apos;re looking for doesn&apos;t exist.</p>
      <Link href="/" className="text-blue-500 underline hover:text-blue-700 text-lg">
        Go Back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
