import React, {Component} from "react";
import './tour.scss'

export default class Tour extends Component {
    state = {
        showInfo:false
    };

    handleInfo = () => {
        this.setState({
                showInfo: !this.state.showInfo
            }
        );
    };


    render() {
        const {id, city, img, name, info} = this.props.tour;
        const {removeTour} = this.props;

        let tourInfo = '';

        if (this.state.showInfo){
            tourInfo = <p>{info}</p>
        }

        return (
            <article className="tour">
                <div className="img-container">
                    <img src={img} alt="tour"/>
                    <span className="close-btn" onClick={() => removeTour(id)}>
                        <i className="fa fa-trash"></i>
                    </span>
                </div>
                <div className="tour-info">
                    <h3>{name}</h3>
                    <h4>{city}</h4>
                    <h5>
                        info{" "}
                        <span onClick={this.handleInfo}>
                            <i className="fa fa-caret-square-o-down"></i>
                        </span>
                    </h5>
                    {tourInfo}
                </div>
            </article>
        );
    }
}
