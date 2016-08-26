export interface PropsInterface {
    /**
     * 标题
     */
    name?: string
}

export class PropsGaea {
    gaeaName = '按钮'
    gaeaIcon = 'square-o'
    gaeaUniqueKey = 'gaea-button'
    gaeaEdit = [{
        field: 'name',
        label: '文字',
        editor: 'text',
        editable: true
    }]
}

export class Props extends PropsGaea implements PropsInterface {
    name = '按钮'
}

export interface StateInterface {

}

export class State implements StateInterface {

}