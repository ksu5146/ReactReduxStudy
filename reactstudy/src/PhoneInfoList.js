import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component {
    render() {
        const {data, onRemove} = this.props;
        const list = data.map ( 
            info => (<PhoneInfo info={info} key={info.id} onRemove={onRemove}></PhoneInfo>)
        )
        return (
            <div>
                {list}
            </div>
        );
    }
}

export default PhoneInfoList;