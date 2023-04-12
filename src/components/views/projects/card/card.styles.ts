/* eslint-disable max-len */
import tw from 'tailwind-styled-components';

import { Img } from '@/components/core/img';
import { Link } from '@/components/core/link';
import { Chip } from '@/components/core/chip';

export const StyledProjectCard = tw(Link)`
  relative
  flex
  items-center
  p-12
  -ml-12
  gap-14
  rounded-10
  w-[calc(100%+1.5rem)]
  text-secondary-txt
  transition-all
  group/project
  no-underline
  hocus:no-underline
  hocus:text-primary-txt
  hocus:bg-[rgba(var(--project-color)_/_0.056)]
  hocus:dark:bg-[rgba(var(--project-color)_/_0.072)]
`;

export const ProjectIcon = tw(Img)`
  transition-all
  bg-none
  filter
  saturate-[.95]
  opacity-[.85]
  p-6
  rounded-10
  bg-[rgba(var(--project-color)_/_0.056)]
  dark:bg-[rgba(var(--project-color)_/_0.072)]
  drop-shadow-[0_1px_2px_rgba(var(--project-color)/0.5)]
  group-hocus/project:p-4
  group-hocus/project:saturate-125
  group-hocus/project:opacity-100
  group-hocus/project:bg-transparent
  group-hocus/project:dark:bg-transparent
`;

export const TitleContainer = tw.div`
  flex
  flex-col
  flex-1
  gap-4
  text-xs
  text-primary-txt
  transition-all
`;

export const StarsCounter = tw(Chip)`
  py-0
  px-4
  gap-4
  !rounded-6
  text-[0.75rem]
  font-manrope
  font-semibold
  transition-all
  border-transparent
  bg-[rgba(var(--project-color)/0.032)]
  dark:bg-[rgba(var(--project-color)/0.072)]
  group-hocus/project:text-primary-txt
  group-hocus/project:border
  group-hocus/project:border-[rgba(var(--project-color)/0.24)]
  group-hocus/project:dark:border-[rgba(var(--project-color)/0.48)]
  group-hocus/project:bg-transparent
  group-hocus/project:dark:bg-transparent
`;
