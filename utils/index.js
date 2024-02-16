export const checkImageUrl = (url) => {
  if (!url) {
    return false;
  } else {
    const pattern = new RegExp(
      '^https?:\\/\\/.+\\/images|(\\.(png|jpg|jpeg|webp|gif)$)',
      'i'
    );
    return pattern.test(url);
  }
};
