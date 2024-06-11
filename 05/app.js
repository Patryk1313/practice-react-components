import React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.querySelector('#root'));


class WeatherApp extends React.Component {
    state = {
        data: null,
    };

    constructor(props) {
        super(props)
        this.APIkey = "fd23daa5434a4c1ba4f9954fa6cfc205";
    }

    async componentDidMount() {
        const { temp } = await this.fetchData();
        this.setState({
            data: {
                temp
            },
        });
    }

    async fetchData() {
        const { lat, lng } = this.props;
        const url = `https://api.weatherbit.io/v2.0/current?key=${this.APIkey}&lat=${lat}&lon=${lng}&lang=pl`;

        const response = await fetch(url);

        if (response.ok) {
            const resp = await response.json();
            const data = resp.data[0]
            const { temp} = data;
            return { temp };
        } else {
            throw new Error(`Server responded with: ${response.status} status`);
        }
    }

    render() {
        const { data } = this.state;
        if(data) {
            const { temp } = data;
            return (
                <h1>
                    Temperatura: {temp} °C
                </h1>
            );
        }
        return null;
    }
}

root.render(<WeatherApp lat={52.232222} lng={21.008333}/>)