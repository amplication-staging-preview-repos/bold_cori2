import { JsonValue } from "type-fest";

export type Event = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  eventType: string | null;
  eventData: JsonValue;
};
