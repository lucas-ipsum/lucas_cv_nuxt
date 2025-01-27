import { format } from "date-fns";

export const useDateConversion = (stringDate: string) => {
  const date: Date = new Date(stringDate);

  return format(date, "MM/YY");
};
