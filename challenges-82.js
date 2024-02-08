// #Question - Convert 12hrs to 24 hrs

const convert12To24 = (time12h) => {
  const [time, modifer] = time12h.split(" ");
  let [hours, minutes] = time.split(":");
  if (hours === "12") hours = "00";
  if (modifer === "PM") hours = parseInt(hours) + 12;
  return `${hours}:${minutes}`;
};

console.log(convert12To24("02:02 PM")); //14:02
console.log(convert12To24("04:06 PM")); // 16:06
console.log(convert12To24("12:00 PM")); // 12:00
console.log(convert12To24("12:00 AM")); // 00:00
