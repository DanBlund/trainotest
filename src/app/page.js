import React from "react";
import  "bootstrap/dist/css/bootstrap.min.css"
import Image from 'next/image'

export default async function Home() {
    
    const response = await fetch(`https://traino.nu/php/testgetuser.php?id=175`, { cache: 'force-cache' });
    const data = await response.json(); // Omvandlar svaret till json

    return (
        <>
            <div className="card col-6 col-sm-5 col-md-4 col-lg-3 col-xl-2 m-3" >
                <Image src="https://picsum.photos/252/274" 
                    className="card-img-top" 
                    alt="Profile picture"
                    width={500}
                    height={500}
                />
                <div className="card-body">
                    <h5 className="card-title">{data.firstname} {data.lastname}</h5>
                    <p className="card-text"> Rating: {data.rating}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Tränar: {data["training"][0]["category_name"]}</li>
                    <li className="list-group-item">Stad:  {data.user_address}</li>
                    <li className="list-group-item">Pris: {data.hourly_price} kr/tim</li>
                </ul>
                <div className="card-body">
                    <a href={`/${data.id}`} className="card-link">Edit profile</a>
                </div>
            </div> 
        </>
    );
}

