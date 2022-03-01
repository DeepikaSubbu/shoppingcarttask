import React from "react";
import './App.css';
import image from './cards.png'

class Card extends React.Component{
    render(){
        return(
           <div className="container mt-5 mb-5">
               <div className="row row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    <div className="col mb-5">
                        <div class="card h-100" >
                         <img src={image} alt="..." className="img-thumbnail"/>
                          <div class="card-body text-center">
                            <h5 class="card-title">Fancy Product</h5>
                            <p>$40.00 - $80.00</p>

                            <a href="#" class="btn button1">View Options</a>
                            </div>
                           </div>
                   
                    </div>


                    <div className="col mb-5">
                        <div class="card" >
                        <div class="badge bg-dark text-white position-absolute pos" >Sale</div>
                         <img src={image} alt="..." className="img-thumbnail"/>
                          <div class="card-body text-center">
                            <h5 class="card-title">Special Item</h5>
                            <div className="star">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                            <p><strike>$20.00</strike> $18.00</p>

                            <a href="#" class="btn button1">Add to cart</a>
                            </div>
                           </div>
                   
                    </div>


                    <div className="col mb-5">
                        <div class="card" >
                        <div class="badge bg-dark text-white position-absolute pos" >Sale</div>
                         <img src={image} alt="..." className="img-thumbnail"/>
                          <div class="card-body text-center">
                            <h5 class="card-title">Sale Item</h5>
                            <p><strike>$50.00</strike> $25.00</p>

                            <a href="#" class="btn button1">Add to cart</a>
                            </div>
                           </div>
                   
                    </div>


                    {/* <div className="col mb-5">
                        <div class="card" > */}
                        {/* <div class="badge bg-dark text-white position-absolute pos" >Sale</div> */}
                         {/* <img src={image} alt="..." className="img-thumbnail"/>
                          <div class="card-body text-center">
                            <h5 class="card-title">Popular item</h5>
                            <div className="star">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                            <p>$40.00</p>

                            <a href="#" class="btn button1">Add to cart</a>
                            </div>
                           </div>
                   
                    </div> */}

                    {/* <div className="col mb-5">
                        <div class="card" >
                        <div class="badge bg-dark text-white position-absolute pos" >Sale</div>
                         <img src={image} alt="..." className="img-thumbnail"/>
                          <div class="card-body text-center">
                            <h5 class="card-title">Sale Item</h5>
                            <p><strike>$50.00</strike> $25.00</p>

                            <a href="#" class="btn button1">Add to cart</a>
                            </div>
                           </div>
                   
                    </div> */}


                    {/* <div className="col mb-5">
                        <div class="card h-100" > */}
                        {/* <div class="badge bg-dark text-white position-absolute pos" >Sale</div> */}
                         {/* <img src={image} alt="..." className="img-thumbnail"/>
                          <div class="card-body text-center">
                            <h5 class="card-title">Fancy Product</h5>
                            <p>$40.00 - $80.00</p>

                            <a href="#" class="btn button1">View Options</a>
                            </div>
                           </div>
                   
                    </div> */}

                    {/* <div className="col mb-5">
                        <div class="card" >
                        <div class="badge bg-dark text-white position-absolute pos" >Sale</div>
                         <img src={image} alt="..." className="img-thumbnail"/>
                          <div class="card-body text-center">
                            <h5 class="card-title">Special Item</h5>
                            <div className="star">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                            <p><strike>$20.00</strike> $18.00</p>

                            <a href="#" class="btn button1">Add to cart</a>
                            </div>
                           </div>
                   
                    </div> */}

                    {/* <div className="col mb-5">
                        <div class="card" > */}
                        {/* <div class="badge bg-dark text-white position-absolute pos" >Sale</div> */}
                         {/* <img src={image} alt="..." className="img-thumbnail"/>
                          <div class="card-body text-center">
                            <h5 class="card-title">Popular item</h5>
                            <div className="star">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                            <p>$40.00</p>

                            <a href="#" class="btn button1">Add to cart</a>
                            </div>
                           </div>
                   
                    </div> */}

                   



               </div>
                 
           </div> 
        )
    }
}
export default Card;