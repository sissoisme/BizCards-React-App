import React from "react";
import { Link } from "react-router-dom";
import cardService from "../services/cardService";
import { toast } from "react-toastify";

const Card = ({ card, shouldDisplayButtons }) => {
    async function deleteCard() {
        await cardService.deleteCard(card._id);
        toast("Card is deleted");

        setTimeout(() => {
            window.location.reload();
        }, 2000);
    }
    return (
        <div>
            <div className="card">
                <img className="p-2" src={card.businessImage} alt={card.businessName} />
                <div className="card-body">
                    <div>
                        <h4 className="card-title">
                           <span>{card.businessName}</span>
                            <br />
                        </h4>
                        <p className="card-text">
                          
                            {card.businessDescription}
                        </p>
                    </div>
                    <div>
                        <p className="card-text border-top pt-2">
                            <b>Tel: </b>
                            {card.businessPhone}
                            <br />
                            <b>Address: </b>
                            {card.businessAddress}
                        </p>
                    </div>

                    {shouldDisplayButtons && (
                        <div>
                            <Link to={`/editCard/${card._id}`} card={card}>
                                Edit
                            </Link>{" "}
                            |<button  id="delBTN" onClick={deleteCard}>Delete</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Card;
