import { format } from "date-fns";
import { de } from "date-fns/locale";

export const useDateConversion = (stringDate: string) => {
    console.log(typeof stringDate)
    const date: Date = new Date(stringDate);

  return format(date, "MMM yyyy", { locale: de });
};
