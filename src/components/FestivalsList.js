import React from "react";
import {Festival} from "./Festival";
import { festivalsApi } from "../rest/FestivalsApi";

export class FestivalsList extends React.Component {
    state = {
        festivals: []
    };

    componentDidMount() {
        this.fetchFestivals();
    }

    fetchFestivals=async () => {
        const festivals=await festivalsApi.get();
        this.setState({festivals});
    };

    updateFestival=async (updatedFestival) => {
        await festivalsApi.put(updatedFestival);
        this.fetchFestivals();
    };

    render() {
        return (
            <div className="festival-list">
                {this.state.festivals.map((festival) => (
                    <Festival
                    festival={{...festival, _id:festival._id}}
                    key={festival._id}
                    updateFestival={this.updateFestival}
                    />
                ))}
            </div>
        )
    }
}