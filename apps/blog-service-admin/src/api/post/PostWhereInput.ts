import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";

export type PostWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
  content?: StringNullableFilter;
  published?: BooleanNullableFilter;
  author?: StringNullableFilter;
  comments?: CommentListRelationFilter;
};
