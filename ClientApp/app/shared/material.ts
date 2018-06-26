export class Material {
    // use http://www.json2ts.com/ to convert entities to TS interface
    id: number;
    partNumber: string;
    partName: string;
    revision: number;
    description?: any;
    category: any;
    unit?: any;
    manufacturer: any;
    manufacturerPartNumber: string;
    procurementType: any;
    notes: string;
    createdOn: Date;
    modifiedOn: Date;
    createdBy?: any;
    modifiedBy?: any;
}