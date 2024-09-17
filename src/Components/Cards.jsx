import React from "react";
import BoxButton from "../Animations/BoxButton";
import Image from "../ImgSliders/Image";


import x1 from "../assets/5x5-1.png";
import x2 from "../assets//5x5-2.png"; 
import kidswear from "../assets//kidswear.webp";

export const Cards = () => {
    return (
        <>
<div className="row featurette centerectextimg">
      <div className="col-md-7 textcenter">
        <h2 className="featurette-heading  fw-normal lh-1">Where Fashion Journey Begins ...</h2>
        <p className="lead text-center">Why settle for ordinary when you can have extraordinary? Our everyday essentials are designed to bring style and comfort to your daily routine. Start your fashion adventure today and explore the endless possibilities. Transform your look and make a statement wherever you go.</p>
        <BoxButton buttonName="see collection" class />
      </div>
      <div className="col-md-5 " style={{paddingTop:"10px"}}>
      <Image
              imageSrc={x1}
                              heading="couture"
                    subheading="Discover the beauty"
                    buttonText="VIEW COLLECTION"
                    link="/couture"
                  />
      </div>
    </div>
    <div className="row featurette centerectextimg">

      <div className="col-md-5" style={{paddingBottom:"7px"}}>
      <Image
              imageSrc={x2}
                              heading="lUXURY PRET"
                    subheading="Discover the beauty"
                    buttonText="VIEW COLLECTION"
                    link="/luxury-pret"
                  />
      </div>
      <div className="col-md-7 textcenter">
        <h2 className="featurette-heading fw-normal lh-1 text-body-primary">Embrace the Latest Trends</h2>
        <p className="lead text-center">
        Create a wardrobe that truly reflects your personality with our versatile pieces. Mix and match to curate a style that’s uniquely yours. From bold patterns to classic silhouettes, our collections offer endless possibilities for self-expression.
       </p>
       <BoxButton buttonName="See Collection" />
      </div>
    </div>




        <div className="mariabslider" style={{ marginTop:"50px"}} >
            <div className="d-md-flex flex-md-equal" >
                    <div style={{ padding:"5px"}}>
                    <Image
                        imageSrc="https://www.mariab.pk/cdn/shop/files/Main_Tile_MPrints.jpg?height=2400&v=1716450647&width=1920"
                        heading="UNSTITCHED"
                        subheading="Unleash your creativity with unstitched pieces, ready for your design."
                        buttonText="FIND YOUR STYLE"
                      /> </div>
             <div style={{ padding:"5px"}}   > 
             <Image
                        imageSrc="https://www.mariab.pk/cdn/shop/files/Ready_to_wear_main_Tile_0518d89e-460c-411a-ab5b-a7886af33b3a.jpg?height=2400&v=1720682183&width=1920"
                        heading="READY TO WEAR"
                        subheading="No time to stitch? Our ready-to-wear has you covered in style."
                        buttonText="FASHION BEGINS HERE"
                      /> 
               </div>
               </div>
                </div>
                <Image
                style={{ padding:" 20px 35px 10px 35px" }} 
        imageSrc={kidswear}
        heading="KIDSWEAR"
        subheading="Dress the Cute & Comfy Outfits. Little Styles Awaits here."
        buttonText="VIEW COLLECTION"
      />
                <div className="mariabslider"  >
                <div className="d-md-flex " >
                        <div  style={{  padding:"5px"}}
                        > <Image
                        imageSrc="https://www.mariab.pk/cdn/shop/files/Couture_main_tile.jpg?height=2400&v=1715860943&width=1920"
                        heading="COUTURE"
                        subheading="Step into luxury with our exclusive couture designs, made with love"
                        buttonText="VIEW COLLECTION"
                      /> </div>
                   <div  style={{  padding:"5px"}}
                        >  <Image
                          imageSrc="https://www.mariab.pk/cdn/shop/files/MensWear_Main_Tile.jpg?height=2400&v=1715860943&width=1920"
                        heading="MENSWEAR"
                        subheading="Redefine your style with our premium menswear, crafted for you."
                        buttonText="VIEW COLLECTION"

/>
</div>
</div>
</div>
</>
    )}
