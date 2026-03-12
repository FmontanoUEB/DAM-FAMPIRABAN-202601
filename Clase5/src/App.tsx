import React from 'react';
import { View, Text } from 'react-native';
import { CountScreen } from './components';
import { appStyles } from './themes/App.style';

type AppProps = { atributo: String; }
type AppState = { display: string; prev: number; operacion: string; }

export class App extends React.Component<AppProps, AppState> {
    state: AppState = { display: '0', prev: 0, operacion: '' };

    handleNumber = (num: string) => {
        const { display } = this.state;
        this.setState({ display: display === '0' ? num : display + num });
    };

    handleOperator = (op: string) => {
        this.setState({ 
            prev: parseFloat(this.state.display), 
            operacion: op, 
            display: '0' 
        });
    };

    handleEqual = () => {
        const { prev, display, operacion } = this.state;
        const b = parseFloat(display);
        let result = 0;
        if (operacion === '+') result = prev + b;
        if (operacion === '-') result = prev - b;
        this.setState({ display: String(result), prev: 0, operacion: '' });
    };

    handleClear = () => {
        this.setState({ display: '0', prev: 0, operacion: '' });
    };

    render() {
        const { display } = this.state;
        return (
            <View style={appStyles.container}>

                <Text style={{ fontSize: 48, marginBottom: 20 }}>{display}</Text>

                <View style={{ flexDirection: 'row' }}>
                    <CountScreen label="7" OnPress={() => this.handleNumber('7')} />
                    <CountScreen label="8" OnPress={() => this.handleNumber('8')} />
                    <CountScreen label="9" OnPress={() => this.handleNumber('9')} />
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <CountScreen label="4" OnPress={() => this.handleNumber('4')} />
                    <CountScreen label="5" OnPress={() => this.handleNumber('5')} />
                    <CountScreen label="6" OnPress={() => this.handleNumber('6')} />
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <CountScreen label="1" OnPress={() => this.handleNumber('1')} />
                    <CountScreen label="2" OnPress={() => this.handleNumber('2')} />
                    <CountScreen label="3" OnPress={() => this.handleNumber('3')} />
                    
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <CountScreen label="-" OnPress={() => this.handleOperator('-')} />
                    <CountScreen label="+" OnPress={() => this.handleOperator('+')} />
                    <CountScreen label="C" OnPress={this.handleClear} />
                    <CountScreen label="=" OnPress={this.handleEqual} />
                    
                </View>

            </View>
        );
    }
}