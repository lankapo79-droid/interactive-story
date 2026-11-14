export const metadata = {
  title: 'Interactive Story',
  description: 'Choose your adventure',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'Georgia, serif', background: '#f4efe6', color: '#14110e' }}>{children}</body>
    </html>
  );
}