import React from 'react';

const Button = ({ text, onClick, styleType = 'primary' }) => {
  const baseStyle =
    'px-4 py-2 rounded font-semibold transition-all duration-300 focus:outline-none';
const styles = {
    primary: `${baseStyle} bg-primary text-onPrimary hover:bg-primaryHover`,
    secondary: `${baseStyle} bg-secondary text-onSecondary hover:bg-secondaryHover`,
    danger: `${baseStyle} bg-danger text-onDanger hover:bg-dangerHover`,
    };

  return (
    <button className={styles[styleType]} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;