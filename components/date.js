import { DateTime } from "luxon";

export default function Date({ dateString }) {
    const date = DateTime.fromISO(dateString);
    return <time dateTime={dateString}>{date.toFormat("LLLL d, yyyy")}</time>
}