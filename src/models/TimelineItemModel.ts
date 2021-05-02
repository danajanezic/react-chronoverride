import React from 'react';
import { Theme } from './Theme';
import { Scroll } from './TimelineHorizontalModel';
import { Media } from './TimelineMediaModel';
import { TimelineMode } from './TimelineModel';

export type title = string | React.ReactElement | React.ReactElement[];
export type detailedText = string | string[] | React.ReactElement | React.ReactElement[];

/**
 *
 *
 * @export
 * @interface TimelineItemModel
 */
export interface TimelineItemModel {
  active?: boolean;
  cardDetailedText?: detailedText;
  cardSubtitle?: title;
  cardTitle?: title;
  id?: string;
  media?: Media;
  position?: string;
  title?: title;
  visible?: boolean;
}

export interface TimelineCardModel extends TimelineItemModel {
  autoScroll: ({
    pointOffset,
    pointWidth,
    timelinePointHeight,
    contentHeight,
  }: Partial<Scroll>) => void;
  mode: TimelineMode;
  onClick: (id?: string) => void;
  slideShowRunning?: boolean;
  theme?: Theme;
  wrapperId: string;
  cardHeight?: number;
  slideItemDuration?: number;
  onElapsed?: (id?: string) => void;
  customContent?: React.ReactNode | React.ReactNode[];
  hasFocus?: boolean;
  iconChild?: React.ReactNode;
}
