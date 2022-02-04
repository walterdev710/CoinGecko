import React from "react";


export const Tbody = ({ data }) => {
   
    return (
        <tbody className="fw-bold">
            {data.map((item, index) => (
                <tr key={index}>
                    <td>{index+1}</td>
                    <td>
                        <img src={item.image} alt={item.name} className="img-fluid" width="50" />
                    </td>
                    <td className="text-info">{item.name}</td>
                    <td>{item.current_price.toLocaleString('en-us')}$</td>
                    <td className={item.price_change_24h > 0 ? 'text-success' : 'text-danger' }>{item.price_change_24h.toLocaleString('en-us')}$
                    
                  
                    </td>
                     <td className={item.price_change_percentage_24h > 0 ? 'text-success' : 'text-danger'}>
                     {item.price_change_percentage_24h > 0 ?( <i className="fas fa-long-arrow-alt-up me-2"></i> 
                        ):(
                            <i className="fas fa-long-arrow-alt-down me-2"></i>
                        )}
                         {item.price_change_percentage_24h.toFixed(2)}%</td>
                    <td>{item.market_cap.toLocaleString('en-us')}$</td>
                    <td>{item.market_cap_change_24h.toLocaleString('en-us')}$</td>
                    <td className={item.market_cap_change_percentage_24h > 0 ? 'text-success' : 'text-danger'}>
                    {item.market_cap_change_percentage_24h > 0 ?( <i className="fas fa-long-arrow-alt-up me-2"></i> 
                        ):(
                            <i className="fas fa-long-arrow-alt-down me-2" ></i>
                        )}

                        {item.market_cap_change_percentage_24h.toFixed(2)}%
                        
                    </td>
                    <td>
                    <button type="button" class="btn btn-primary" data-mdb-toggle="modal" data-mdb-target={`#exampleModal${index}`}>
                    <i className="fas fa-eye"></i>
                    Detail
                    </button>
                    <div class="modal fade" id={`exampleModal${index}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-lg">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">{item.name}</h5>
                            <button type="button" class="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div className="container-fluid ">
                                <div className="row">
                                    <div className=" col-12 mb-5"  >
                                       <img src={item.image} alt={item.name} className="img-fluid"  width="150"/>
                                    </div>
                                    <div className=" col-12 mb-5"  >
                                        <h5><span className="fw-bold">Current Price:</span>{item.current_price} $</h5> 
                                        
                                        <h5><span className="fw-bold">Price Change 24h :          </span> <span className={item.price_change_24h > 0 ? 'text-success' : 'text-danger' }>   {item.price_change_24h.toFixed(2)}$</span>
                                        </h5> 
                                        
                                        <h5><span className="fw-bold">Price Changes Percentage: </span><span className={item.market_cap_change_percentage_24h > 0 ? 'text-success' : 'text-danger'} >{item.price_change_percentage_24h > 0 ?( <i className="fas fa-long-arrow-alt-up me-2"></i> 
                                        ):(
                                            <i className="fas fa-long-arrow-alt-down me-2" ></i>
                                        )}
                                            {item.price_change_percentage_24h.toFixed(2)}% 
                                        </span>
                                        </h5> 
                                        <h5><span className="fw-bold">Market Capital:</span>{item.market_cap.toLocaleString('en-us')}$</h5> 
                                        <h5><span className="fw-bold">Market Capital Change 24h:</span>{item.market_cap_change_24h.toLocaleString('en-us')}$</h5>
                                        <h5><span className="fw-bold">Market Capital Change Percentage 24h:</span> <span className={item.market_cap_change_percentage_24h > 0 ? 'text-success' : 'text-danger'}> {item.market_cap_change_percentage_24h > 0 ?( <i className="fas fa-long-arrow-alt-up me-2"></i> 
                                        ):(
                                            <i className="fas fa-long-arrow-alt-down me-2" ></i>
                                        )}
                                        {item.market_cap_change_percentage_24h.toFixed(2)}% </span>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-mdb-dismiss="modal">Close</button>
                            
                        </div>
                        </div>
                    </div>
                    </div>
                    
                    </td>
                    


                
                </tr>
            ))}
        </tbody>
                      
    )
                        }