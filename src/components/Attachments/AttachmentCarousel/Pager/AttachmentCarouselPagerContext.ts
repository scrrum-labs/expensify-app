import type {ForwardedRef} from 'react';
import {createContext} from 'react';
import type PagerView from 'react-native-pager-view';
import type {SharedValue} from 'react-native-reanimated';

type AttachmentCarouselItemMeta = {
    source: string;
    index: number;
    isActive: boolean;
};

type AttachmentCarouselPagerContextValue = {
    pagerItems: AttachmentCarouselItemMeta[];
    activePage: number;
    pagerRef: ForwardedRef<PagerView>;
    isPagerScrolling: SharedValue<boolean>;
    isScrollEnabled: SharedValue<boolean>;
    onTap: () => void;
    onScaleChanged: (scale: number) => void;
};

const AttachmentCarouselPagerContext = createContext<AttachmentCarouselPagerContextValue | null>(null);

export default AttachmentCarouselPagerContext;
export type {AttachmentCarouselPagerContextValue};
