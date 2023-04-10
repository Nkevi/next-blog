import { cx } from 'classix';
import Image, { type ImageProps } from 'next/image';

import type { FC } from '@/types';

type BaseImageProps = Omit<ImageProps, 'width' | 'height'>;
type SizeProps = BaseImageProps & { size?: number | string };
type WidthHeightProps = BaseImageProps & {
  width?: number | string;
  height?: number | string;
};

export type ImgProps = SizeProps | WidthHeightProps;

export const Img: FC<ImgProps> = (props) => {
  const { size = 0, ...otherProps } = props as SizeProps;
  const {
    width = size,
    height = size,
    ...rest
  } = otherProps as WidthHeightProps;
  return (
    <Image
      {...rest}
      alt={rest.alt}
      width={Number(width)}
      height={Number(height)}
      loading={rest.priority ? undefined : rest.loading || 'lazy'}
      decoding={'async'}
      className={cx('object-cover object-center', rest.className)}
    />
  );
};
