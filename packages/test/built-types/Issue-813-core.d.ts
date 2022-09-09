import * as Stitches from '@implydata/stitches-core';
export declare const config: {
    prefix: "";
    media: {};
    theme: {
        colors: {
            primary: string;
        };
    };
    themeMap: import("@implydata/stitches-core/types/config").DefaultThemeMap;
    utils: {
        bg: (value: Stitches.PropertyValue<'backgroundColor'>) => {
            color: import("@implydata/stitches-core/types/css-util").WithPropertyValue<"backgroundColor">;
        };
        c: (value: Stitches.ScaleValue<'colors'>) => {
            color: import("@implydata/stitches-core/types/css-util").WithScaleValue<"colors">;
        };
    };
}, css: <Composers extends (string | import("@implydata/stitches-core/types/util").Function | {
    [name: string]: unknown;
})[], CSS = import("@implydata/stitches-core/types/css-util").CSS<{}, {
    colors: {
        primary: string;
    };
}, import("@implydata/stitches-core/types/config").DefaultThemeMap, {
    bg: (value: Stitches.PropertyValue<'backgroundColor'>) => {
        color: import("@implydata/stitches-core/types/css-util").WithPropertyValue<"backgroundColor">;
    };
    c: (value: Stitches.ScaleValue<'colors'>) => {
        color: import("@implydata/stitches-core/types/css-util").WithScaleValue<"colors">;
    };
}>>(...composers: { [K in keyof Composers]: string extends Composers[K] ? Composers[K] : Composers[K] extends string | import("@implydata/stitches-core/types/util").Function ? Composers[K] : import("@implydata/stitches-core/types/stitches").RemoveIndex<CSS> & {
    variants?: {
        [x: string]: {
            [x: string]: CSS;
            [x: number]: CSS;
        };
    } | undefined;
    compoundVariants?: (("variants" extends keyof Composers[K] ? Composers[K][keyof Composers[K] & "variants"] extends infer T ? { [Name in keyof T]?: import("@implydata/stitches-core/types/util").String | import("@implydata/stitches-core/types/util").Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name]> | undefined; } : never : import("@implydata/stitches-core/types/util").WideObject) & {
        css: CSS;
    })[] | undefined;
    defaultVariants?: ("variants" extends keyof Composers[K] ? Composers[K][keyof Composers[K] & "variants"] extends infer T_1 ? { [Name_1 in keyof T_1]?: import("@implydata/stitches-core/types/util").String | import("@implydata/stitches-core/types/util").Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name_1]> | undefined; } : never : import("@implydata/stitches-core/types/util").WideObject) | undefined;
} & CSS & (Composers[K] extends infer T_2 ? { [K2 in keyof T_2]: K2 extends "compoundVariants" | "defaultVariants" | "variants" ? unknown : K2 extends keyof CSS ? CSS[K2] : unknown; } : never); }) => import("@implydata/stitches-core/types/styled-component").CssComponent<import("@implydata/stitches-core/types/styled-component").StyledComponentType<Composers>, import("@implydata/stitches-core/types/styled-component").StyledComponentProps<Composers>, {}, CSS>;
export declare const colorValue1: Stitches.PropertyValue<'backgroundColor', typeof config>;
export declare const colorValue2: Stitches.PropertyValue<'backgroundColor', typeof config>;
export declare const colorToken: Stitches.ScaleValue<'colors', typeof config>;
export declare const box: import("@implydata/stitches-core/types/styled-component").CssComponent<never, {}, {}, import("@implydata/stitches-core/types/css-util").CSS<{}, {
    colors: {
        primary: string;
    };
}, import("@implydata/stitches-core/types/config").DefaultThemeMap, {
    bg: (value: Stitches.PropertyValue<'backgroundColor'>) => {
        color: import("@implydata/stitches-core/types/css-util").WithPropertyValue<"backgroundColor">;
    };
    c: (value: Stitches.ScaleValue<'colors'>) => {
        color: import("@implydata/stitches-core/types/css-util").WithScaleValue<"colors">;
    };
}>>;
