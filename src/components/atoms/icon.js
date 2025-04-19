import useTheme from '@/hooks/useTheme';
import Image from 'next/image';

export default function Icon({ name, alt = '', ...props }) {
  const [theme] = useTheme();
  const folder = theme === 'dark' ? 'dark-icons' : 'light-icons';
  const src = `/${folder}/${name}.svg`;

  return <Image src={src} alt={alt} {...props} />;
}