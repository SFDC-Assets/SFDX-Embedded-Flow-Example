declare module "@salesforce/apex/LightningSelfRegisterController.selfRegister" {
  export default function selfRegister(param: {firstname: any, lastname: any, email: any, password: any, confirmPassword: any, accountId: any, regConfirmUrl: any, extraFields: any, startUrl: any, includePassword: any}): Promise<any>;
}
declare module "@salesforce/apex/LightningSelfRegisterController.getExtraFields" {
  export default function getExtraFields(param: {extraFieldsFieldSet: any}): Promise<any>;
}
declare module "@salesforce/apex/LightningSelfRegisterController.setExperienceId" {
  export default function setExperienceId(param: {expId: any}): Promise<any>;
}
