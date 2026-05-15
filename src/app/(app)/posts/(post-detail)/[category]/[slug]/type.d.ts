interface BaseModel {
  created: string;
  id: string;
}
interface BaseCommentIndexModel extends BaseModel {
  commentsIndex?: number;
  allowComment: boolean;
}
interface TextBaseModel extends BaseCommentIndexModel {
  title: string;
  text: string;
  images?: Image[];
  modified: string | null;
}
type ModelWithLiked<T> = T & {
  liked: boolean;
};

export interface PostModel extends TextBaseModel {
  summary?: string | null;
  copyright: boolean;
  tags: string[];
  count: Count;
  text: string;
  title: string;
  slug: string;
  categoryId: string;
  images: Image[];
  category: CategoryModel;
  pin?: string | null;
  pinOrder?: number;
  related?: Pick<PostModel, 'id' | 'category' | 'categoryId' | 'created' | 'modified' | 'title' | 'slug' | 'summary'>[];
}
