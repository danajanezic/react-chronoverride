import { Theme } from './Theme';
import { Media } from './TimelineMediaModel';
import {title, detailedText} from './TimelineItemModel';
import React from 'react';

export interface TimelineContentModel {
  active?: boolean;
  content?: title;
  detailedText?: detailedText;
  id?: string;
  media?: Media;
  onClick?: (id: string) => void;
  onShowMore: () => void;
  onElapsed?: (id?: string) => void;
  slideShowActive?: boolean;
  theme?: Theme;
  title?: title;
  branchDir?: string;
  customContent?: React.ReactNode;
  hasFocus?: boolean;
}

