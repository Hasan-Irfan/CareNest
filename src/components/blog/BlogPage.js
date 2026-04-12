import { getFeaturedPost, getGridPosts } from '@/data/blogPosts';
import BlogHero from './BlogHero';
import BlogFeatured from './BlogFeatured';
import BlogGrid from './BlogGrid';
import BlogNewsletter from './BlogNewsletter';
import styles from './BlogShell.module.css';

export default function BlogPage() {
  const featuredPost = getFeaturedPost();
  const gridPosts = getGridPosts();

  return (
    <div className={styles.shell}>
      <BlogHero />
      <BlogFeatured post={featuredPost} />
      <BlogGrid posts={gridPosts} />
      <BlogNewsletter />
    </div>
  );
}
