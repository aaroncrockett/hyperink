export function getYearDateRange(year: number) {
  return {
    startDate: `${year}-01-01`,
    endDate: `${year + 1}-01-01`,
  };
}
