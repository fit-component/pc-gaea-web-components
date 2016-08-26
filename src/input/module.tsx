export interface PropsInterface {
    text?: string
}

export class PropsGaea {
    gaeaName = '输入框'
    gaeaIcon = 'font'
    gaeaUniqueKey = 'gaea-input'
    gaeaEdit = [{
        field: 'text',
        label: '标题',
        editor: 'text',
        editable: true
    }]
}

export class Props extends PropsGaea implements PropsInterface {
    text = '请输入'
}

export interface StateInterface {

}

export class State implements StateInterface {

}