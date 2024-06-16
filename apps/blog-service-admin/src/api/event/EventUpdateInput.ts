import { InputJsonValue } from "../../types";

export type EventUpdateInput = {
  eventType?: string | null;
  eventData?: InputJsonValue;
};
