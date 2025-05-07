export const metadata = {
  title: 'HK Mastercam Solutions',
  description: 'Professional Mastercam Programming Services',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex items-center justify-center min-h-screen bg-gray-100">
        {children}
      </body>
    </html>
  );
}
