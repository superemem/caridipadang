// Mengurutkan berdasarkan tanggal
export const sortByDate = (array: any[]) => {
  const sortedArray = array.sort((a: any, b: any) => {
    const dateA = new Date(a.data.date).getTime();
    const dateB = new Date(b.data.date).getTime();
    return dateB - dateA;
  });
  return sortedArray;
};

// Mengurutkan produk berdasarkan berat
export const sortByWeight = (
  array: { data: { weight: number | null | undefined } }[],
) => {
  const withWeight = array.filter(
    (item) => typeof item.data.weight === "number",
  );
  const withoutWeight = array.filter((item) => item.data.weight == null);

  const sortedWeightedArray = withWeight.sort((a, b) => {
    return a.data.weight! - b.data.weight!;
  });

  const sortedArray = [...sortedWeightedArray, ...withoutWeight];
  return sortedArray;
};
