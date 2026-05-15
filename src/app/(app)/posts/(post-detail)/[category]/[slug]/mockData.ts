import type { ModelWithLiked, PostModel } from "./type";

export const mockPostWithLiked: ModelWithLiked<PostModel> = {
  // BaseModel fields
  created: "2024-01-15T10:30:00Z",
  id: "post_123456",

  // BaseCommentIndexModel fields
  commentsIndex: 42,
  allowComment: true,

  // TextBaseModel fields
  title: "Getting Started with TypeScript",
  text: "TypeScript is a strongly typed programming language that builds on JavaScript...",
  modified: "2024-01-20T14:25:00Z",

  // PostModel specific fields
  summary: "Learn the basics of TypeScript and how it can improve your development workflow",
  copyright: true,
  tags: ["typescript", "javascript", "programming", "web-development"],
  slug: "getting-started-with-typescript",
  categoryId: "cat_001",
  images: [
    {
      url: "https://example.com/images/ts-hero.jpg",
      alt: "TypeScript Logo",
      width: 1200,
      height: 800
    },
    {
      url: "https://example.com/images/ts-code.jpg",
      alt: "TypeScript Code Example",
      width: 800,
      height: 600
    }
  ],
  count: {
    views: 15234,
    likes: 342,
    comments: 28,
    shares: 56
  },
  category: {
    id: "cat_001",
    name: "Programming",
    slug: "programming",
    description: "Programming tutorials and guides"
  },
  pin: "featured",
  pinOrder: 1,
  related: [
    {
      id: "post_123457",
      category: {
        id: "cat_001",
        name: "Programming",
        slug: "programming"
      },
      categoryId: "cat_001",
      created: "2024-01-10T09:15:00Z",
      modified: "2024-01-12T16:30:00Z",
      title: "JavaScript ES2024 Features",
      slug: "javascript-es2024-features",
      summary: "Explore the latest features coming to JavaScript in 2024"
    },
    {
      id: "post_123458",
      category: {
        id: "cat_002",
        name: "Web Development",
        slug: "web-dev"
      },
      categoryId: "cat_002",
      created: "2024-01-05T11:20:00Z",
      modified: null,
      title: "CSS Grid Mastery",
      slug: "css-grid-mastery",
      summary: "Complete guide to mastering CSS Grid layout"
    }
  ],

  // ModelWithLiked field
  liked: true
};
