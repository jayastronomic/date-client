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
      charCount: 0,
      avatar: "",
    };
    this.textbox = React.createRef();
    this.charCount = React.createRef();
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

  componentDidMount() {
    this.setBio();
  }

  setBio = () => {
    const bio = this.textbox.current;
    bio.innerText = this.state.bio;
    this.setState({
      charCount: bio.innerText.length,
    });
  };

  handleBio = (e) => {
    if (e.target.innerText.length <= 500) {
      this.setState({
        bio: e.target.innerText,
        charCount: e.target.innerText.length,
      });
      this.charCount.current.classList.remove("text-red-600");
    } else {
      e.target.innerText = this.state.bio;
      this.charCount.current.classList.add("text-red-600");
    }
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
          <p className="font-semibold text-gray-700">Edit Profile</p>
          <button
            className="text-pink-600"
            type="submit"
            onClick={() => this.props.unMount()}
          >
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
          <p className="text-sm pl-10 text-gray-600">Jan 29, 1994</p>
        </div>
        <div className="flex flex-col border-b py-4">
          <h1 className="font-semibold">My Gender</h1>
          <div className="flex flex-col pl-10 py-4 space-y-4">
            <div className="space-x-2 text-gray-700">
              {this.state.gender === "man" ? (
                <input
                  onChange={this.handleChange}
                  className="cursor-pointer"
                  type="radio"
                  value="man"
                  name="gender"
                  defaultChecked
                />
              ) : (
                <input
                  onChange={this.handleChange}
                  className="cursor-pointer"
                  type="radio"
                  value="man"
                  name="gender"
                />
              )}
              <label>Man</label>
            </div>
            <div className="space-x-2 text-gray-700">
              {this.state.gender === "woman" ? (
                <input
                  onChange={this.handleChange}
                  className="cursor-pointer"
                  type="radio"
                  value="woman"
                  name="gender"
                  defaultChecked
                />
              ) : (
                <input
                  onChange={this.handleChange}
                  className="cursor-pointer"
                  type="radio"
                  value="woman"
                  name="gender"
                />
              )}
              <label>Woman</label>
            </div>
          </div>
        </div>
        <div className="flex flex-col border-b py-4">
          <div className="flex justify-between">
            <div className="font-semibold">About Me</div>
            <p ref={this.charCount}>{this.state.charCount} / 500</p>
          </div>
          <div
            role="textbox"
            contentEditable
            className={
              "text-sm break- break-words px-10 focus:outline-none " +
              "before:empty:content-['Let_them_know_what_you\\'re_about.'] before:text-gray-300 max-h-56"
            }
            name="bio"
            ref={this.textbox}
            onInput={this.handleBio}
          ></div>
        </div>
      </form>
    );
  }
}

export default EditProfile;
