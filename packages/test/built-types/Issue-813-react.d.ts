/// <reference types="react" />
import * as Stitches from '@implydata/stitches-react';
export declare const config: {
    prefix: "";
    media: {};
    theme: {
        colors: {
            primary: string;
        };
    };
    themeMap: import("@implydata/stitches-react/types/config").DefaultThemeMap;
    utils: {
        bg: (value: Stitches.PropertyValue<'backgroundColor'>) => {
            color: import("@implydata/stitches-react/types/css-util").WithPropertyValue<"backgroundColor">;
        };
        c: (value: Stitches.ScaleValue<'colors'>) => {
            color: import("@implydata/stitches-react/types/css-util").WithScaleValue<"colors">;
        };
    };
}, styled: <Type extends import("@implydata/stitches-react/types/util").Function | keyof JSX.IntrinsicElements | import("react").ComponentType<any>, Composers extends (string | import("@implydata/stitches-react/types/util").Function | import("react").ComponentType<any> | {
    [name: string]: unknown;
})[], CSS = import("@implydata/stitches-react/types/css-util").CSS<{}, {
    colors: {
        primary: string;
    };
}, import("@implydata/stitches-react/types/config").DefaultThemeMap, {
    bg: (value: Stitches.PropertyValue<'backgroundColor'>) => {
        color: import("@implydata/stitches-react/types/css-util").WithPropertyValue<"backgroundColor">;
    };
    c: (value: Stitches.ScaleValue<'colors'>) => {
        color: import("@implydata/stitches-react/types/css-util").WithScaleValue<"colors">;
    };
}>>(type: Type, ...composers: { [K in keyof Composers]: string extends Composers[K] ? Composers[K] : Composers[K] extends string | import("@implydata/stitches-react/types/util").Function | import("react").ComponentType<any> ? Composers[K] : import("@implydata/stitches-react/types/stitches").RemoveIndex<CSS> & {
    variants?: {
        [x: string]: {
            [x: string]: CSS;
            [x: number]: CSS;
        };
    } | undefined;
    compoundVariants?: (("variants" extends keyof Composers[K] ? Composers[K][keyof Composers[K] & "variants"] extends infer T ? { [Name in keyof T]?: import("@implydata/stitches-react/types/util").String | import("@implydata/stitches-react/types/util").Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name]> | undefined; } : never : import("@implydata/stitches-react/types/util").WideObject) & {
        css: CSS;
    })[] | undefined;
    defaultVariants?: ("variants" extends keyof Composers[K] ? Composers[K][keyof Composers[K] & "variants"] extends infer T_1 ? { [Name_1 in keyof T_1]?: import("@implydata/stitches-react/types/util").String | import("@implydata/stitches-react/types/util").Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name_1]> | undefined; } : never : import("@implydata/stitches-react/types/util").WideObject) | undefined;
} & CSS & (Composers[K] extends infer T_2 ? { [K2 in keyof T_2]: K2 extends "compoundVariants" | "defaultVariants" | "variants" ? unknown : K2 extends keyof CSS ? CSS[K2] : unknown; } : never); }) => import("@implydata/stitches-react/types/styled-component").StyledComponent<Type, import("@implydata/stitches-react/types/styled-component").StyledComponentProps<Composers>, {}, import("@implydata/stitches-react/types/css-util").CSS<{}, {
    colors: {
        primary: string;
    };
}, import("@implydata/stitches-react/types/config").DefaultThemeMap, {
    bg: (value: Stitches.PropertyValue<'backgroundColor'>) => {
        color: import("@implydata/stitches-react/types/css-util").WithPropertyValue<"backgroundColor">;
    };
    c: (value: Stitches.ScaleValue<'colors'>) => {
        color: import("@implydata/stitches-react/types/css-util").WithScaleValue<"colors">;
    };
}>>;
export declare const colorValue1: Stitches.PropertyValue<'backgroundColor', typeof config>;
export declare const colorValue2: Stitches.PropertyValue<'backgroundColor', typeof config>;
export declare const colorToken: Stitches.ScaleValue<'colors', typeof config>;
export declare const Box: import("@implydata/stitches-react/types/styled-component").StyledComponent<"div", {}, {}, import("@implydata/stitches-react/types/css-util").CSS<{}, {
    colors: {
        primary: string;
    };
}, import("@implydata/stitches-react/types/config").DefaultThemeMap, {
    bg: (value: Stitches.PropertyValue<'backgroundColor'>) => {
        color: import("@implydata/stitches-react/types/css-util").WithPropertyValue<"backgroundColor">;
    };
    c: (value: Stitches.ScaleValue<'colors'>) => {
        color: import("@implydata/stitches-react/types/css-util").WithScaleValue<"colors">;
    };
}>>;
