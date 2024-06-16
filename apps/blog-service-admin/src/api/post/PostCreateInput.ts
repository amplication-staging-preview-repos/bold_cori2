import { CommentCreateNestedManyWithoutPostsInput } from "./CommentCreateNestedManyWithoutPostsInput";

export type PostCreateInput = {
  title?: string | null;
  content?: string | null;
  published?: boolean | null;
  author?: string | null;
  comments?: CommentCreateNestedManyWithoutPostsInput;
};
