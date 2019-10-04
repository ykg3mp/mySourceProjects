import React, { Component } from 'react'
import '../App.css';
import { fontSize } from '@material-ui/system';

export default class Profile extends Component {
    constructor(props){
        super(props)
        this.state = {
            images: ['https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Eastern_Grey_Squirrel.jpg/1024px-Eastern_Grey_Squirrel.jpg',
            'https://upload.wikimedia.org/wikipedia/commons/b/bb/WesternGraySquirrel1.jpg',
            'https://nhpbs.org/wild/images/arizonagraysquirrelwiki.jpg',
            'https://upload.wikimedia.org/wikipedia/commons/f/fe/Sciurus_niger_%28on_fence%29.jpg',
            'https://upload.wikimedia.org/wikipedia/commons/9/9e/Aberts_squirrel.jpg'
        ],
            caption:['Eastern Grey Squirrel',
            'Western Gray Squirrel',
            'Arizona Gray Squirrel',
            'Fox Squirrel',
            'Aberts Squirrel (tassel-eared squirrel)'
            ],
            curImage: 0
        }
    }

    nextPic = () => {
        let arrLen = this.state.images.length;
        let curPic = this.state.curImage;
        let nextPic = (curPic + 1) % arrLen;
        this.setState({
            curImage: nextPic
        })
    }

    render(){
        let arrLen = this.state.images.length;
        let rawIndex = this.props.curImageIndex;
        let fixedIndex = rawIndex % arrLen;
        return(
            <div>

            <p> <font size="5">Explore Squirrels of the World! </font> </p>
            <p> <font size="5" color = "dark pink"> {this.state.caption[fixedIndex]} </font> </p>
            <img src={this.state.images[fixedIndex]}/>
            </div>
        )
    }
}