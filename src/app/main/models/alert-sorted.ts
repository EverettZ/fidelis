import { IAlertSortedField } from './alert-sorted-field';

export interface IAlertSorted {
    Severity: IAlertSortedField[];
    ClientIP: IAlertSortedField[];
    Protocol: IAlertSortedField[];
    ClientCountry: IAlertSortedField[];
}
