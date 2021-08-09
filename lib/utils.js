export const socialLinks = {
  facebook: 'https://www.facebook.com/faouzi.mohamed.97',
  github: 'https://github.com/faouziMohamed',
  linkedin: 'https://www.linkedin.com/in/mohamed-faouzi',
};

export function Capitalize({ children }) {
  return children.replace(/^\w/, (c) => c.toUpperCase());
}

export function CapitalizeAll({ children }) {
  return children.replace(/\w\S*/g, (word) =>
    Capitalize({ children: `${word}` }),
  );
}
