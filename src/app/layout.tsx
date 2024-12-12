import '../styles/globals.css'; // Seu arquivo de estilos globais
import Header from '../app/components/Header';
import Footer from '../app/components/Footer';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Sua Aplicação',
  description: 'Descrição da sua aplicação',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
