import React, { Component } from 'react'
import item6 from '../../img/item-6.jpg'
import item7 from '../../img/item-7.jpg'
import item8 from '../../img/item-9.jpg'
import {Button} from 'react-bootstrap'
import CartProduct from './CartProduct' 

export default class Cart extends Component {
    constructor(props){
        super(props)
        this.state = {
            btnValue : 1,
        }
        this.updateBtnValuePlus = this.updateBtnValuePlus.bind(this);
        this.updateBtnValueMinus = this.updateBtnValueMinus.bind(this);
    }

    updateBtnValuePlus = () => {
        this.setState(prevState => ({
             btnValue : prevState.btnValue + 1 
            }));
    }

    updateBtnValueMinus = () => {
        if (this.state.btnValue !== 1) {
            this.setState(prevState => ({
                btnValue : prevState.btnValue - 1 
               }));
        }
    }

    render() {
        return (
            <div className='parentFlex'>
                <div className='childFlex1'>
                    <h5 style={{padding:'20px 30px 20px 30px'}}>My Cart (2)</h5>
                    <div style={{borderBottom: "1px solid #dadada", marginBottom:'10px'}}></div>
                    <CartProduct imgSrc={'../../img/item-6.jpg'} btnValue={this.state.btnValue} updateBtnValueMinus={this.updateBtnValueMinus} updateBtnValuePlus={this.updateBtnValuePlus} />
                    <CartProduct imgSrc={'../../img/item-6.jpg'} btnValue={this.state.btnValue} updateBtnValueMinus={this.updateBtnValueMinus} updateBtnValuePlus={this.updateBtnValuePlus} />
                    <CartProduct imgSrc={'../../img/item-6.jpg'} btnValue={this.state.btnValue} updateBtnValueMinus={this.updateBtnValueMinus} updateBtnValuePlus={this.updateBtnValuePlus} />
                    <div style={{textAlign:'right', padding:'15px 25px 15px 0px', marginTop:'0px',boxShadow:'0 -5px 5px -5px rgba(83, 83, 83, 0.75)',position:'sticky', bottom:'0px', backgroundColor:'rgb(245, 244, 244)'}}>
                        <button className='buttonClass' style={{height:'40px', width:'150px', padding:'5px' }}>PLACE ORDER</button>
                    </div>
                </div>
                <div className='childFlex2'>
                    <h5 style={{padding:'20px 30px 20px 25px', color:'#595959'}}>PRICE DETAILS</h5>
                    <div style={{borderBottom: "1px solid #dadada", marginBottom:'10px'}}></div>
                    <div style={{display:'flex', padding:'15px 30px 15px 25px', justifyContent:'space-between'}}>
                        <h6 style={{}}>Price (3 items)</h6>
                        <h6>$1,500</h6>
                    </div>
                    <div style={{display:'flex', padding:'15px 30px 15px 25px',justifyContent:'space-between'}}>
                        <h6 style={{}}>Delivery Fee</h6>
                        <h6 style={{color:'green'}}>FREE</h6>
                    </div>
                    <div style={{borderBottom:'1px dotted #dadada', margin:'10px 27px 10px 22px'}}></div>
                    <div style={{display:'flex', padding:'10px 30px 10px 25px',justifyContent:'space-between'}}>
                        <h5 style={{}}>Total Amount</h5>
                        <h5 style={{}}>$1500</h5>
                    </div>
                    <div style={{borderBottom:'1px dotted #dadada', margin:'10px 27px 10px 22px'}}></div>
                </div>
    		</div>

        )
    }
}