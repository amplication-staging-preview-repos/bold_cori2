import { CommentUpdateManyWithoutPostsInput } from "./CommentUpdateManyWithoutPostsInput";

export type PostUpdateInput = {
  title?: string | null;
  content?: string | null;
  published?: boolean | null;
  author?: string | null;
  comments?: CommentUpdateManyWithoutPostsInput;
};
