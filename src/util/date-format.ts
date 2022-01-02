import { format, parse } from 'date-fns';

// Date attributes should use this format
const INPUT_DATE_FORMAT = 'yyyy-MM-dd';

export function formatDate(dateString: string, formatString = 'MMMM d, yyyy') {
  const date = parse(dateString, INPUT_DATE_FORMAT, new Date());
  const result = format(date, formatString);

  return result;
}
