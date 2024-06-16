import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type EventWhereInput = {
  id?: StringFilter;
  eventType?: StringNullableFilter;
  eventData?: JsonFilter;
};
