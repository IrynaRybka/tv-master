import { FC, SVGProps } from 'react';
import sprite from '../icons/icon.svg';

interface IconProps extends SVGProps<SVGSVGElement> {
  id: string;
  anyProp?: string;
}

const Icon: FC<IconProps> = ({ id, ...props }) => {
  return (
    <svg {...props}>
      <use href={`${sprite}#${id}`} />
    </svg>
  );
};

export default Icon;