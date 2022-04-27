import * as React from 'react';

export interface IComponent1 {
    prop1: string;
    prop2: number;
    prop3: boolean;
}

export default class Component1 extends React.Component<IComponent1> {
    public render() {
        return (
            <div>
                {this.props.prop1} {this.props.prop2} {new String(this.props.prop3)}
            </div>
        );
    }
}
