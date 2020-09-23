import React, {Component} from 'react';
import './myProfile.less';

class MyProfile extends Component {
  constructor(props) {
    super(props);
    this.state={
      name: 'Your name',
      gender: 'Male',
      desc: 'Description about yourself',
      read: false
    }
  }

  handleSumit=event=>{
    event.preventDefault();
    //api调用
    console.log(this.state.name,this.state.gender,this.state.desc);
  }

  handleName=event=>{
    this.setState({
      name:event.target.value
    })
  }

  handleGender=event=>{
    this.setState(
        {
          gener: event.target.value
        }
    )
  }

  handleDesc = event=>{
    this.setState({
          desc:event.target.value
    })
  }

  handeleCheck = event=>{
    this.setState({
      read:event.target.checked
    })
  }


  render() {
    return (
      <form onSubmit={this.handleSumit}>
        <h1>My Profile</h1>
        <div className='name'>
          <label className='label'>Name:</label>
          <input type='text'
                 value={this.state.name}
                 onChange={this.handleName}>
            </input>
        </div>
        <div className='gender'>
          <label className='label'>Gender：</label>
          <select value={this.state.gender}
                  onChange={this.handleGender}>
            <option value='Male'>Male</option>
            <option value='Female'>Female</option>
          </select>
        </div>
        <div className='desc'>
          <label className='label'>Description：</label>
          <textarea value={this.state.desc}
                    onChange={this.handleDesc}>
          </textarea>
        </div>
        <div className='check'>
          <input type='checkbox'
                 onChange={this.handeleCheck}/>
                 <p>I have read the terms of conduct</p>
        </div>
        <button
          type='submit'
          disabled={!this.state.name||!this.state.desc || !this.state.read}>
        </button>
      </form>
    );
  }
}

export default MyProfile;


