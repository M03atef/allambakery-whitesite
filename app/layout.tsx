export const metadata = {
  title: 'Allam Bakery',
  description: 'Fresh Bakery and Desserts',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body className="bg-stone-50">{children}</body>
    </html>
  );
}
