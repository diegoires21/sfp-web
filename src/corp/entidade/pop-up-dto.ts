import { Message } from './message';
import { MessagePopUp } from './message-pop-up';

export class PopUpDto {

    public msg: MessagePopUp;

    public obj: any;

    public popUpType: PopUpType;

    public title: string;

    public actionOk: Function;

    public actionCancel: Function;

    public maxlength: number;

    public value: string;

    public id: number;

    public fieldLabel: string;
}

interface ListnerPopUp {
    action(): void;
}
export enum PopUpType {
    QUESTION,
    INFO
}

