import { AlertsFilterTypesEnum } from './alerts-filter-types-enum';

export interface IAlertsFilterType {
    type: AlertsFilterTypesEnum;
    value: string[];
}
