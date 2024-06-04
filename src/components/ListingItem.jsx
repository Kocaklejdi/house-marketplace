import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as DeleteIcon } from "../assets/svg/deleteIcon.svg";
import bedIcon from "../assets/svg/bedIcon.svg";
import bathroomIcon from "../assets/svg/bathtubIcon.svg";

function ListingItem({ listing, id, onDelete }) {
  useEffect(() => {
    console.log(listing);
  });
  return (
    <li className="categoryListing">
      <Link
        to={`/category/${listing.type}/${id}`}
        className="categoryListingLink"
      >
        <img
          src={listing.imageUrls[0]}
          alt={listing.name}
          className="categoryListingImg"
        ></img>
        <div className="categoryListingDetails">
          <p className="categoryListingLocation">{listing.location}</p>
          <p className="categoryListingName">{listing.name}</p>
          <p className="categoryListingPrice">
            ${listing.offer ? listing.discountedPrice : listing.regularPrice}
            {listing.type == "rent" && " / Month"}
          </p>
          <div className="categoryListingInfoDiv">
            <img src={bedIcon} alt="bed"></img>
            <p className="categoryListingInfoText">
              {listing.bedrooms > 1
                ? listing.bedrooms + " Bedrooms"
                : listing.bedrooms + " Bedroom"}
            </p>
            <img src={bathroomIcon} alt="bathroom"></img>
            <p className="categoryListingInfoText">
              {listing.bathrooms > 1
                ? listing.bathrooms + " Bathrooms"
                : listing.bathrooms + " Bathroom"}
            </p>
          </div>
        </div>
      </Link>
      {onDelete && (
        <DeleteIcon
          className="removeIcon"
          fill="rgb(231, 76, 60)"
          onClick={() => {
            onDelete(listing.id, listing.name);
          }}
        ></DeleteIcon>
      )}
    </li>
  );
}

export default ListingItem;
