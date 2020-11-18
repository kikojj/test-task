export const weekDay = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
export function getWeekDayName(date: Date | number) {
  return weekDay[(typeof date === "number" ? new Date(date) : date).getDay()];
}
