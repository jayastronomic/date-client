import React, { Component } from "react";
import PhotoGrid from "./PhotoGrid";
import { updateUser, fetchUser } from "../network/User";

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: "",
      bio: "",
      images: [],
    };
  }

  componentDidMount() {
    fetchUser(this.props.authUser.id).then((user) => console.log(user));
  }

  handleAddPhoto = (photo) => {
    this.setState({
      images: photo,
    });
    console.log(photo);
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("user[images]", this.state.images);
    formData.append("user[bio]", this.state.bio);
    updateUser(this.props.authUser.id, formData).then((user) => {
      console.log(user);
    });
  };

  render() {
    return (
      <form
        onSubmit={this.handSubmit}
        className={
          this.props.active
            ? "fixed flex flex-col p-2 h-full w-full z-10  bg-white animate-slide-up"
            : `fixed flex flex-col p-2 h-full w-full z-10  bg-white ${this.props.initial}`
        }
      >
        <div className="flex justify-around">
          <div></div>
          <p>EditProfile</p>
          <button type="submit" onClick={() => this.props.unMount()}>
            Done
          </button>
        </div>
        <PhotoGrid handleAddPhoto={this.handleAddPhoto} />
        <div className="flex flex-col border-b py-4">
          <div className="font-semibold ">My Birthday</div>
          <p className="text-sm pl-10">Jan 29, 1994</p>
        </div>
        <div className="flex flex-col border-b py-4">
          <h1 className="font-semibold">My Gender</h1>
          <div className="flex flex-col">
            <input
              style={{ accentColor: "#ff64c4" }}
              className="outline-none shadow-amber"
              type="radio"
            />
            <input className="" type="radio" />
            <input className="" type="radio" />
          </div>
        </div>
        <div className="flex flex-col border-b py-4">
          <div className="font-semibold">About Me</div>
          <p className="text-sm pl-10 break-all">
            {" "}
            aehdhdhdalhjedlhadlaeldhljehljahljafehljaefhljlhejalhjdlahljddfdfdfvfvdvfdvfvfdvfd
          </p>
        </div>
      </form>
    );
  }
}

export default EditProfile;
