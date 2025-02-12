
export const formateDate = (formatedDate: string) => {
  const date = new Date(formatedDate);

  return date.toLocaleDateString("ru-RU");
}