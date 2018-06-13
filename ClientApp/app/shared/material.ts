export interface Material {
    // use http://www.json2ts.com/ to convert entities to TS interface
    id: number;
    name: string;
    description?: any;
    unit?: any;
    createdOn: Date;
    modifiedOn: Date;
    createdBy?: any;
    modifiedBy?: any;
}