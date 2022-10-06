
export type HouseInfo = {
    name: string,
    blurb: string,
    imagePaths: string[],
    calendar_link?: string, // TODO: add a link type for validation
    application_link?: string,
}

type TBlurb = {
    house: HouseInfo,
    index: number,
};