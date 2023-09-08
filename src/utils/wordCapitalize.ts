export const CapitalizeWord = (value: any) => {
  return value
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export const Capitalize = (value: any) => {
    return value
      .toUpperCase()

  };