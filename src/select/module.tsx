export interface PropsInterface {
    label?: string
    defaultValue?: string
    options?: any
}

export class PropsGaea {
    gaeaName = '选择框'
    gaeaIcon = 'list'
    gaeaUniqueKey = 'gaea-select'
    gaeaEdit = [{
        field: 'label',
        label: '标题',
        editor: 'text',
        editable: true
    }, {
        field: 'defaultValue',
        label: '默认值',
        editor: 'text',
        editable: true
    }, {
        field: 'options',
        label: '配置',
        editor: 'array',
        editable: false,
        array: [{
            key: 'key',
            label: 'KEY',
            editor: 'text',
            editable: true
        }, {
            key: 'value',
            label: 'VALUE',
            editor: 'text',
            editable: true
        }]
    }]
}

export class Props extends PropsGaea implements PropsInterface {
    label = '标题'
    defaultValue = '默认值'
    options = [] as any
}

export interface StateInterface {

}

export class State implements StateInterface {

}