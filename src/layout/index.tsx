import * as React from 'react'
import * as module from './module'
import {others} from '../../../../common/transmit-transparently/src'

export default class LayoutComponent extends React.Component <module.PropsInterface, module.StateInterface> {
    static defaultProps: module.PropsInterface = new module.Props()
    public state: module.StateInterface = new module.State()

    render() {
        let style: any = {
            width: this.props.width,
            minWidth: this.props.minWidth,
            height: this.props.height,
            minHeight: this.props.minHeight,
            background: this.props.background,
            display: this.props.display,
            flexDirection: this.props.flexDirection,
            flexGrow: this.props.flexGrow,
            flexWrap: this.props.flexWrap,
            justifyContent: this.props.justifyContent,
            alignItems: this.props.alignItems,
            overflow: this.props.overflow
        }

        const otherProps = others(new module.Props(), this.props)

        return (
            <div {...otherProps} style={style}>{this.props.children}</div>
        )
    }
}