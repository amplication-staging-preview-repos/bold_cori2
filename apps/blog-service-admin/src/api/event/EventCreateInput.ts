import { InputJsonValue } from "../../types";

export type EventCreateInput = {
  eventType?: string | null;
  eventData?: InputJsonValue;
};
