import React from 'react'
import Avatar from 'react-avatar-edit'

class ImageEditor extends React.Component {

  constructor(props) {
    super(props)
    const src = this.props.sourceImage
    this.state = {
      preview: null,
      src
    }
    this.onCrop = this.onCrop.bind(this)
    this.onClose = this.onClose.bind(this)
    this.onBeforeFileLoad = this.onBeforeFileLoad.bind(this)
  }
  
  onClose() {
    this.setState({preview: null})
  }
  
  onCrop(preview) {
    this.setState({preview})
    this.props.updateImage(this.state.preview)
  }

  onBeforeFileLoad(elem) {
    if(elem.target.files[0].size > 1000000){
      alert("File is too big!");
      elem.target.value = "";
    };
  }
  
  render () {
    return (
      <div className="flex flex-row w-full justify-center">
        <div className="w-1/4 mx-auto block">
          <Avatar
            width={390}
            height={295}
            onCrop={this.onCrop}
            onClose={this.onClose}
            onBeforeFileLoad={this.onBeforeFileLoad}
            src={this.state.src}
            onFileLoad={ this.onFileLoad }
          />
        </div>
        <img className="w-1/4 mx-auto" src={this.state.preview} alt="Preview" />
      </div>
    )
  }
}

export default ImageEditor