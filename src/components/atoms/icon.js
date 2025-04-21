import Image from 'next/image';

// Icon component uses light-icons (black); CSS inverts for dark theme
export default function Icon({ name, alt = '', className = '', ...props }) {
  const src = `/light-icons/${name}.svg`;
  return <Image src={src} alt={alt} className={`${className} nav-icon`} {...props} />;
}