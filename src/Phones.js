import React from "react";

const Phones = ({ phone }) => {
    return (
        <main>
            {
                phone.map((item) => {
                    return (
                        <div key={item.id} className="itemContainer">
                            <div className="left">
                                <img src={item.img} alt={item.title} />
                            </div>
                            <div className="right">
                                <div>
                                    <h3>{item.title}</h3>
                                    <p className="price">${item.price}</p>
                                </div>
                                <p className="info">{item.desc}</p>
                            </div>
                        </div>
                    )
                })
            }

        </main>
    )
}

export default Phones;