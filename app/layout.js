import './globals.css';

export const metadata = {
  title: 'HK Mastercam Solutions',
  description: 'Professional Mastercam Programming Services',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex items-center justify-center min-h-screen bg-gray-100 text-gray-900">
        {children}
      </body>
    </html>
  );
}
