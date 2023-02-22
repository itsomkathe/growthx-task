import React from 'react'
import classes from "./UserCard.module.css";
import Image from 'next/image';
import sampleImage from "@public/Images/sample.jpg";

export default function UserCard({ about, }) {
  return (
    <div className={classes.container}>
        <div className={classes.imgWrapper}>
            <Image
                src={sampleImage}
                width={"15rem"}
            />
        </div>
        <h4 className={classes.name}>
            Rodrigo Soares
        </h4>
        <p className={classes.location}>
            Bay Area, USA
        </p>
        <p className={classes.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        </p>
        <div className={classes.skills}>
            <span>Visual Designer</span>
            <span>Illustrator</span>
            <span>Visual Designer</span>
        </div>
        <button className={classes.moreButton}>
            More
        </button>
    </div>
  )
}
