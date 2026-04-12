import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import BlogPage from '@/components/blog/BlogPage';

export const metadata = {
  title: 'Blog & Health Tips | CareNest Pakistan',
  description:
    'Insights, expert medical advice, and caregiving stories from CareNest—home healthcare news and wellness tips for families in Pakistan.',
};

export default function Blog() {
  return (
    <>
      <Navbar />
      <main>
        <BlogPage />
      </main>
      <Footer />
    </>
  );
}
