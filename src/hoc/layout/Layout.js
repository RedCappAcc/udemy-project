import { Component } from 'react'
import classes from './layout.module.css'
import MenuToggle from "../../components/Navigation/MenuToggle/MenuToggle"
import Menu from '../../components/Navigation/MenuToggle/Menu/Menu'


class layout extends Component {
    state = {
        menu:false
    }
    toggleMenuHandler(){
        this.setState({menu:!this.state.menu})
    }
    render() {
        return ( 
            <div className = { classes.mainDiv } >
                <MenuToggle isOpen ={this.state.menu} onToggle = {this.toggleMenuHandler.bind(this)}/>
                <Menu isOpen ={this.state.menu} onClickBackDrop = {this.toggleMenuHandler.bind(this)}/>
                <main className = { classes.layout } > { this.props.children }</main> 
            </div>
        )
    }
}
export default layout;