export const slugify = (str: string) => {
  return (
    str
      .toLowerCase()
      // don't remove /
      .replace(/[^\w ]+/g, "") // remove non-word characters
      .replace(/ +/g, "-")
  ); // replace spaces with dashes
};
