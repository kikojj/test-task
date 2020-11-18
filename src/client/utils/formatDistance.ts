export function getEnd(num: number) {
  if (+((num % 100) / 10).toFixed(0) === 1) {
    return "ов";
  }
  return num % 10 === 1 ? "" : num % 10 === 2 || num % 10 === 3 ? "а" : "ов";
}

export function formatDistance(distance: number) {
  const km = Math.trunc(distance / 1000);
  const m = distance % 1000;
  return distance >= 1000 ? `${km} километр${getEnd(+km)} ${m > 0 ? ` ${m} метр${getEnd(m)}` : ""}` : distance + " метр" + getEnd(distance);
}
