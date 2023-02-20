import React, { Component } from "react";
import PageHeader from "./common/pageHeader";
import cardService from "../services/cardService";
import Card from "./card";

class MyCards extends Component {
    state = {
        cards: []
    };

    async componentDidMount() {

        const { data } = await cardService.getMyCards(localStorage.getItem('user'));
        
        if (data.length > 0) this.setState({ cards: data });
    }
 
    render() { 
        const { cards } = this.state;
       function creatNewCard(){
            window.location = "/create-card";
         }
        return (
            <div className="container cardDisplayPage">
                <PageHeader titleText="My Cards " />
                <div className="row">
                    <div className="col-12">
                        <p>Your cards in the list below...</p>
                        <button class="btn btn-success" onClick={creatNewCard}>הוסף כרטיס חדש</button>
                    </div>
                </div>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    {cards.length > 0 &&
                        cards.map(card => <Card key={card._id} card={card} shouldDisplayButtons={true} />)}
                </div>
            </div>
        );
    }
}

export default MyCards;