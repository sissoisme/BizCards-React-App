import React from "react";
import PageHeader from "./common/pageHeader";
import Joi from "joi-browser";
import Form from "./common/form";
import cardService from "../services/cardService";
import { toast } from "react-toastify";

class CreateCard extends Form {
    state = {
        data: {
            creatorId: localStorage.getItem('user'),
            businessName: "",
            businessDescription: "",
            businessAddress: "",
            businessPhone: "",
            businessImage: ""
        },
        errors: {}
    };

    schema = {
        creatorId: Joi.string(),

        businessName: Joi.string()
            .min(2)
            .max(40)
            .required(),
        businessDescription: Joi.string()
            .min(20)
            .max(1024)
            .required(),
        businessAddress: Joi.string()
            .min(20)
            .max(40)
            .required(),
        businessPhone: Joi.string()
            .min(9)
            .max(10)
            .required()
            .regex(/^0[2-9]\d{7,8}$/),
        businessImage: Joi.string()
            .min(11)
            .max(1024)
            .uri()
            .allow("")
    };

    doSubmit = async () => {
        const { data } = this.state;
        if (!data.businessImage) delete data.businessImage;
        await cardService.createCard(this.state.data);
        toast("A new card is opened");
        this.props.history.replace("/my-cards");
    };

    render() {
        return (
            <div className="container">
                <PageHeader titleText="Business Registration Form" />
                <br />
                <div className="row">
                    <div className="col-12">
                        <h2>Open business card:</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <form onSubmit={this.handleSubmit} autoComplete="off" method="POST">

                            {this.renderInput("businessName", "Business Name")}
                            {this.renderInput("businessDescription", "Business Description")}
                            {this.renderInput("businessAddress", "Business Address")}
                            {this.renderInput("businessPhone", "Business Phone")}
                            {this.renderInput("businessImage", "Business Image")}
                            {this.renderButton("Create Card")}
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateCard;