import { Theme } from './Theme';
import React from 'react';
export declare type MediaType = 'VIDEO' | 'IMAGE';
export interface MediaSource {
    url: string;
    type?: string;
}
export interface Media {
    name?: string;
    type: MediaType;
    source: MediaSource;
}
export interface MediaState {
    id?: string;
    paused?: boolean;
    playing?: boolean;
}
export interface CardMediaModel {
    active?: boolean;
    cardHeight?: number;
    content?: string | React.ReactElement | React.ReactElement[];
    hideMedia: boolean;
    id?: string;
    media: Media;
    onMediaStateChange: (state: MediaState) => void;
    slideshowActive?: boolean;
    theme?: Theme;
    title?: string | React.ReactElement | React.ReactElement[];
}
