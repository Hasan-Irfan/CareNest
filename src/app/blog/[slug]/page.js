import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import { BLOG_POSTS, getPostBySlug } from '@/data/blogPosts';
import styles from './post.module.css';

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    return { title: 'Article | CareNest Blog' };
  }
  return {
    title: `${post.title} | CareNest Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <article className={`${styles.article} container-wide`}>
          <Link href="/blog" className={styles.back}>
            ← Back to blog
          </Link>
          <p className={styles.kicker}>{post.kicker ?? post.badge}</p>
          <h1 className={styles.title}>{post.title}</h1>
          <div className={styles.meta}>
            <span>{post.author}</span>
            <span aria-hidden="true">·</span>
            <span>{post.date}</span>
            <span aria-hidden="true">·</span>
            <span>{post.readTime}</span>
          </div>
          <div className={styles.hero}>
            <Image
              src={post.image}
              alt={post.imageAlt}
              width={1120}
              height={560}
              className={styles.heroImg}
              sizes="(max-width: 768px) 100vw, min(1120px, 96vw)"
              priority
            />
          </div>
          <div className={styles.prose}>
            {post.body.map((paragraph, i) => (
              <p key={i} className={styles.p}>
                {paragraph}
              </p>
            ))}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
