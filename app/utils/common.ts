export const generateRandomPost = (length: number) => {
  const post = Array.from({ length }).map((item, index) => {
    const random = Math.floor(Math.random() * 900) + 100;
    return {
      Id: `${index}`,
      Account: `user${random}`,
      Photo: Array.from({ length: 3 }).map(
        () =>
          `https://picsum.photos/400/400?random=${Math.floor(Math.random() * 900) + 100}`,
      ),
      Content: '',
      Like: random,
      Created: '',
    };
  });
  return post;
};
