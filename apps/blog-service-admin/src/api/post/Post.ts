import { Comment } from "../comment/Comment";

export type Post = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  content: string | null;
  published: boolean | null;
  author: string | null;
  comments?: Array<Comment>;
};
