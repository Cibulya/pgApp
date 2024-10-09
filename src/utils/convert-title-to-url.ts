export const convertTitleToUrl = (title: string) => {
  return title.toLowerCase().replace(/\s+/g, '-');
};
