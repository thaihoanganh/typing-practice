declare module "*.css" {
    const styles: any;
    export = styles;
}
declare module "*.scss" {
    const styles: any;
    export = styles;
}

declare module "*.png" {
    const value: any;
    export = value;
}

interface IRoute {
    path: string;
    exact: boolean;
    component: any;
}
