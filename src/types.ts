
export interface HouseInfo {
    title: string,
    blurb: string,
    imagePaths: string[],
    calendar?: string, // TODO: add a link type for validation
    contactLink?:string,
    housingApplication?: string,
}

export interface IBlurb extends HouseInfo {
    name: string;
    blurbWidth: number;
}