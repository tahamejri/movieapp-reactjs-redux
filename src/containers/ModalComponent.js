import StarRatings from "react-star-ratings";

import React, { Component } from "react";
import { connect } from "react-redux";
import { titlehandler,
  editMovie,
  descriptionHandler,
  imageHandler,
  ratingHandler} from "../actions/actionCreators";

import { SHOW_ALL } from "../actions/actionTypes";
import { bindActionCreators } from "redux";
import { Redirect } from "react-router";
import { NavLink } from "react-router-dom";

class ModalComponent extends React.Component {
  componentWillReceiveProps(nextprops) {

    this.setState({
     id: nextprops.id,
      title: nextprops.title,
      description: nextprops.description,
      rating: nextprops.rating,
      image: nextprops.image,
      movies: nextprops.movies,
      item:nextprops.item,
    });
  }
  constructor(props){
    super(props)
    this.state={
       title:this.props.item.title,
       image:this.props.item.image,
       ratting:this.props.item.ratting,
       description:this.props.item.description

    }
  }

//   titleHandler(e) {
//     this.setState({ title: e.target.value });
// }
// descriptionHandler(e) {
//     this.setState({ description: e.target.value });
// }
// imageHandler(e) {
//     this.setState({ image: e.target.value });
// }
// ratingHandler(e) {
//     this.setState({ rating: e.target.value });
// }


  render() {
    return (
      <div className="card-body">
        <div
          className="modal fade"
          id="exampleModal1"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel1"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel1">
                  Edit movie
                </h5>

                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"

                  //  this.props.editMovie(this.props.id);
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="recipient-name" className="col-form-label">
                      Name:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                      value={this.props.item.title}
                      onChange={(e) => this.props.titlehandler(e.target.value)}
                    ></input>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message-text" className="col-form-label">
                      Description:
                    </label>
                    <textarea
                      className="form-control"
                      id="message-text"
                      value={this.props.item.description}
                      onChange={(e) => this.props.descriptionHandler(e)}
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <label htmlFor="recipient-name" className="col-form-label">
                      Image:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                      value={this.props.item.image}
                      onChange={(e) => this.props.imageHandler(e)}
                    ></input>
                  </div>

                  <div className="form-group">
                    <label htmlFor="recipient-name" className="col-form-label">
                      Rating:
                    </label>
                    <StarRatings
                      rating={this.props.item.rating}
                      changeRating={this.props.changeRating}
                      starDimension="30px"
                      starSpacing="1px"
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
                <NavLink to = '/home'>
                <button
                  type="button"
                  className="btn btn-primary"
                 onClick={()=>this.props.editMovie(this.props.item.id,this.props.item.title,this.props.item.description,this.props.item.image, this.props.item.rating)
                   }
                 //data-dismiss="modal"
                >
                  Edit movie
                </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => {
    return { movies: state.movies,
              item: state.selectedred };
   
  };
  const mapDispatchToProps = dispatch => {
    return bindActionCreators(
      {
        titlehandler,
        editMovie,
        descriptionHandler,
        imageHandler,
        ratingHandler
        
      },
      dispatch
    );
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(ModalComponent);
  

