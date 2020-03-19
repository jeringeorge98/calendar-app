import React, {Component} from 'react';
import {View, Text,ScrollView} from 'react-native';
//import axios from 'axios';
import {Albumdetail} from './Albumdetail';
export class AlbumList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      albunmdata: [{}],
    };
  }

  async componentDidMount() {
    let result = await axios
      .get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(async resp => {
        await this.setState({
          albunmdata: resp.data,
        });
      })
      .catch(err => {
        alert(err);
      });
  }
  renderAlbums() {
    const {albunmdata} = this.state;
    return this.state.albunmdata.map((album, index) => (
      <Albumdetail key={index} album={album} />
    ));
  }
  render() {
    //alert(JSON.stringify(this.state.albunmdata));
    return <ScrollView style={{flex: 1}}>{this.renderAlbums()}</ScrollView>;
  }
}

export default AlbumList;
