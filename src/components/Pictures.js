import React, { Component } from 'react'

export default class Users extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            image: 'https://jsonplaceholder.typicode.com/photos/3',
            title: 'Shit',
            id: 6,
            width: '300px',
            heigth: '300px'
        }
    }
    
   
    fetchData(e) {
        const id = e.target.value
        let url = `https://jsonplaceholder.typicode.com/photos/` + id
        fetch(url).then(response => response.json())
        .then(json => this.setState({
            image: json.url,
            title: json.url,
            id: json.id,
            width: this.state.width
        }))
    }

    setWidth(e) {
        let imgWidth = e.target.value
        this.setState({
            width: imgWidth + 'px'
        }) 
    }

    setHeight(e) {
        let imgHeight = e.target.value
        this.setState({
            width: imgHeight + 'px'
        }) 
    }



    
    

    render() {
        const imgStyle = {
           width: this.state.width,
           heigth: this.state.heigth
        }
        console.log(imgStyle)
        return (
            <div>
                Type Picture ID
                <hr/>
                ID: 
                <input onChange={this.fetchData.bind(this)} type="number"/>
                Width:    
                <input onChange={this.setWidth.bind(this)} type="number"/>
                Height:
                <input onChange={this.setHeight.bind(this)} type="number"/>
                <br/>
                <br/>
                <h4>{this.state.title}</h4>
                <img style={imgStyle} src={this.state.image} alt="{this.state.image}"/>
            </div>
        )
    }
}
