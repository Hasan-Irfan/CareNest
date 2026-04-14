/**
 * Blog index: first entry is the featured hero card; remaining entries render in the grid.
 * Article pages resolve by `slug` via getPostBySlug.
 */

export const BLOG_POSTS = [
  {
    slug: 'future-of-home-healthcare-pakistan',
    kicker: 'Featured insight',
    badge: 'Editorial',
    badgeVariant: 'blue',
    title: 'The Future of Home Healthcare in Pakistan: Quality Medicine at Your Doorstep',
    excerpt:
      'How digital coordination, PMDC-certified teams, and protocol-driven home visits are reshaping access to trusted care.',
    author: 'CareNest Editorial',
    date: 'May 24, 2024',
    readTime: '8 min read',
    image: '/images/blog.jpg',
    imageAlt: 'Physician with digital tools representing modern home healthcare',
    body: [
      'Home healthcare in Pakistan is no longer a niche convenience—it is becoming a core part of how families manage recovery, chronic illness, and aging in place.',
      'CareNest combines hospital-grade protocols with the comfort of familiar surroundings: structured assessments, transparent communication, and teams trained for the unique realities of Pakistani households.',
      'Looking ahead, tighter integration between bedside care, remote monitoring, and primary physicians will mean fewer gaps between discharge instructions and what actually happens at home.',
    ],
  },
  {
    slug: 'compassionate-nursing-elderly',
    badge: 'Nursing care',
    badgeVariant: 'green',
    title: 'Compassionate Care: Why Specialized Nursing Matters for the Elderly',
    excerpt:
      'Dedicated home nursing bridges the gap between hospital discharge and confident recovery for families across Pakistan.',
    author: 'Dr. Sarah Khan',
    date: 'Jun 2, 2024',
    readTime: '6 min read',
    image: '/images/about-team.png',
    imageAlt: 'Clinical team providing attentive home-based nursing care',
    body: [
      'Elderly patients often need more than medication reminders—they need observation, dignity, and continuity. Specialized nurses watch for subtle changes that families might miss.',
      'At home, routines can be preserved: sleep schedules, preferred meals, and cultural practices that support emotional well-being alongside clinical stability.',
      'When nursing is coordinated with the patient’s physician, readmissions drop and families gain peace of mind without constant trips to crowded facilities.',
    ],
  },
  {
    slug: 'understanding-lab-reports',
    badge: 'Diagnostics',
    badgeVariant: 'blue',
    title: 'Understanding Lab Reports: A Simple Guide for Every Home',
    excerpt:
      'Common panels and terminology explained so you can follow your care plan with clarity—without the jargon.',
    author: 'Pathology team',
    date: 'Jun 18, 2024',
    readTime: '7 min read',
    image: '/images/hero-healthcare.png',
    imageAlt: 'Healthcare professional preparing for in-home diagnostics',
    body: [
      'Lab reports summarize what your blood, urine, or other samples suggest about organ function, inflammation, and risk—but the abbreviations can feel overwhelming.',
      'Focus first on the reference ranges: values slightly outside the range may still be acceptable for you, depending on your history. Always interpret results with your clinician.',
      'If CareNest collects samples at home, your digital report links directly to the same standards used by partner laboratories—so your doctor sees one consistent timeline.',
    ],
  },
  {
    slug: 'nutritional-foundations',
    badge: 'Wellness',
    badgeVariant: 'orange',
    title: 'Nutritional Foundations: Eating for Longevity and Vitality',
    excerpt:
      'Practical dietary guidance rooted in local ingredients to support chronic conditions and everyday energy.',
    author: 'Nutrition dept',
    date: 'Jul 4, 2024',
    readTime: '5 min read',
    image: '/images/about-story.png',
    imageAlt: 'Wellness and balanced living for long-term health',
    body: [
      'Longevity is less about extreme diets than about consistent patterns: adequate protein, fiber from seasonal produce, and hydration suited to Pakistan’s climate.',
      'For diabetes and heart health, pairing roti or rice with vegetables and legumes slows glucose spikes and supports steadier energy through the day.',
      'Your CareNest care plan can include simple meal frameworks—so family caregivers know what to prioritize without needing to become nutritionists overnight.',
    ],
  },
];

export function getPostBySlug(slug) {
  return BLOG_POSTS.find((p) => p.slug === slug) ?? null;
}

export function getFeaturedPost() {
  return BLOG_POSTS[0];
}

export function getGridPosts() {
  return BLOG_POSTS.slice(1);
}
