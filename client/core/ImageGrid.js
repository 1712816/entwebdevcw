import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import myImg from '/./ghibli.png'
import {Link} from 'react-router-dom'


class ImageGrid extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            images: [
                {name:'Black ICON Trench',src:'/client/src/black-trench.jpeg',desc:'This describes this image..'},
                {name:'Black Athletic Tee',src:'/client/src/black-tshirt.jpeg',desc:'This describes this image 2..'},
                {name:'White Cardigan',src:'/client/src/cardigan.jpeg',desc:'This describes this image 3 ..'},
                {name:'Orange Roll-Up Tee',src:'/client/src/orange-shirt.jpeg',desc:'This describes this image 4..'},
                {name:'Cream Turtleneck',src:'/client/src/white-jumper.jpeg',desc:'This describes this image 5..'},
                {name:'Striped Shirt with Grandad Collar',src:'/client/src/striped-shirt/jpeg',desc:'This describes this image 6..'},
            ],
            currentSelection: {},
        };
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        // set first image selected
        this.setState({ currentSelection: this.state.images[0] });
    }

    handleClick(val) {
        //console.log(val)
        this.setState({ currentSelection: val });
    }

    render(){
        var { images, currentSelection } = this.state;
        return(
        <div>
            <div className="row">
                <div className="col-md">
                    <div className="row no-gutters">
                    {images.map((val, k) => {
                        return (
                        <div className="col-sm-4" key={k}>
                            <img src={val.src} className={'img-fluid ' + (val.src===currentSelection.src?'p-1':'')} onClick={() => this.handleClick(val)} />
                        </div>)
                        })
                    }
                     </div>
                </div>
                <div className="col-md">
                    <h3 className="font-weight-light">{ currentSelection.name }</h3>
                    <p>{ currentSelection.desc }</p>
                </div>
            </div>
        </div>
        )
    }
};
