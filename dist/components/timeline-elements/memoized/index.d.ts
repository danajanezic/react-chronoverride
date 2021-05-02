import React from 'react';
import { Theme } from '../../../models/Theme';
interface Title {
    title?: string | React.ReactElement | React.ReactElement[];
    theme?: Theme;
    color?: string;
    dir?: string;
    active?: boolean;
}
interface Content {
    content?: string | React.ReactElement | React.ReactElement[];
    color?: string;
    dir?: string;
    theme?: Theme;
}
declare const MemoTitle: React.MemoExoticComponent<({ title, theme, color, dir, active }: Title) => JSX.Element | null>;
declare const MemoSubTitle: React.NamedExoticComponent<Content>;
export { MemoTitle, MemoSubTitle };
