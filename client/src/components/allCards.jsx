import React, { Component } from "react";
import PageHeader from "./common/pageHeader";
import cardService from "../services/cardService";
import Card from "./card";

class AllCards extends Component {
    state = {
        
        cards: []
    };

    async componentDidMount() {

        const { data } = await cardService.getCards();
        if (data.length > 0) this.setState({ cards: data });
    }

    render() {
        const { user } = this.props;
        const { cards } = this.state;

        return (
            <div className="container cardDisplayPage">
                <PageHeader titleText="All Cards " />
                <div className="row">
                    <div className="col-12">
                        <p>ALL cards in the list below...</p>
                    </div>
                </div>
                <div className=" row row-cols-1 row-cols-md-2 g-4 ">
                    {cards.length > 0 &&
                        cards.map(card => <Card key={card._id} card={card} user={user} shouldDisplayButtons={false} />)}
                </div>
            </div>
        );
    }
}

export default AllCards;