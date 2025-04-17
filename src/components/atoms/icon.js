import usePrefersDark from '@/hooks/userPrefersDark';
import Image from 'next/image';

export default function Icon({ name, alt = '', ...props }) {
  const isDark = usePrefersDark();
  const folder = isDark ? 'dark-icons' : 'light-icons';
  const src = `/${folder}/${name}.svg`;

  return <Image src={src} alt={alt} {...props} />;
}