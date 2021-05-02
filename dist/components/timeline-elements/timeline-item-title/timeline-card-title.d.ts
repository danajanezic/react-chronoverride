import React from 'react';
import { Theme } from '../../../models/Theme';
interface TitleModel {
    title?: string | React.ReactElement | React.ReactElement[];
    active?: boolean;
    theme?: Theme;
    align?: 'left' | 'right';
}
declare const TimelineItemTitle: React.FunctionComponent<TitleModel>;
export default TimelineItemTitle;
