import React, { Component } from "react";
import Avatar from "./Avatar";
import { updateUser } from "../network/User";

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: this.props.authUser.gender,
      bio: this.props.authUser.bio,
      avatar_url: this.props.authUser.avatar_url,
      avatar_exist: this.props.authUser.avatar_exist,
      avatar: "",
    };
  }

  handleAddPhoto = (photo) => {
    this.setState({
      avatar: photo,
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData();
    if (this.state.avatar) {
      formData.append("user[avatar]", this.state.avatar);
    }
    formData.append("user[bio]", this.state.bio);
    formData.append("user[gender]", this.state.gender);
    updateUser(this.props.authUser.id, formData).then((user) => {
      this.props.setAuthUser(user);
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
        <Avatar
          handleAddPhoto={this.handleAddPhoto}
          avatarExist={this.state.avatar_exist}
          avatarUrl={this.state.avatar_url}
        />
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
