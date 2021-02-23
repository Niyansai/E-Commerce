import React from "react";
import "./Home.css";
import Product from "./Product";
import Footer from "./Footer";


function Home() {
    
  return(

<div className="home_complete">
<div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
            <div className="carousel-inner" id="first_carousel">
              <div className="carousel-item active">
              <a target="_blank" href="https://www.youtube.com/channel/UC7HUAlkMwfif648ySsi08Cw"><img src="https://1.bp.blogspot.com/-nRZ8Qr43oXc/X7YUIlSM27I/AAAAAAAAAKw/xs4mxV75qfYPQ0wvy_2hOkD3B-3zq0anwCLcBGAsYHQ/s1500/HomeImgEdited.png" className="d-block w-100" alt="..."/> </a>
              </div>
              <div className="carousel-item">
                <img src="https://1.bp.blogspot.com/-cV9x0tked3E/X7Yd31USPNI/AAAAAAAAALE/U-9NXR2RY6UdXRUU0RUZOPRt_n5VdcaxgCLcBGAsYHQ/s320/couple.jpg" className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src="https://1.bp.blogspot.com/-CjVoEtTIk2I/X7Yd7J9hcQI/AAAAAAAAALI/0h7HPanqx3Q2cRE2aEAItRkPbNwy8v9IgCLcBGAsYHQ/s2048/sale.jpg" className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src="https://images-na.ssl-images-amazon.com/images/I/8192nYgiH-L._SL1500_.jpg" alt="..." className="d-block w-100"/>
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
  </div>

 
  <div className="container-fluid mt-2">
  
  <div className="row mt-2" id="card_size">
            <div className="col-sm  col-xs-4">
              <Product
            id="90829332"
            title="Redmi 9A (Midnight Black, 2GB RAM, 32GB Storage)"
            price={6999}
            rating={4}
            image="https://m.media-amazon.com/images/I/712Ex7xDndL._AC_UY218_.jpg" 
              />
            </div>
            <div className="col-sm col-xs-4">
              <Product 
              id="90829332"
              title="Samsung Galaxy M21 (Raven Black, 4GB RAM, 64GB Storage)"
              price={13999}
              rating={4}
              image="https://m.media-amazon.com/images/I/71QLvGIAq5L._AC_UY218_.jpg"                
              />
            </div>
            <div className="col-sm col-xs-4">
              <Product 
              id="90829332"
              title="OnePlus Nord 5G (Gray Onyx, 8GB RAM, 128GB Storage)"
              price={27999}
              rating={4}
              image="https://m.media-amazon.com/images/I/71gag816F7L._AC_UY218_.jpg" 
              />
    </div>
  </div>
  <div className="row mt-2">
              <div className="col-sm">
              <Product 
                  id="90829332"
                  title="Vogueorgy
                  Women's Crop Top"
                  price={799}
                  rating={4}
                  image="https://m.media-amazon.com/images/I/510XSZ0V69L._AC_UL320_.jpg" 
                  />
              </div>
              <div className="col-sm">
              <Product 
                  id="90829332"
                  title="Men's & Women's Cotton Hooded Hoodie"
                  price={799}
                  rating={5}
                  image="https://m.media-amazon.com/images/I/71iujS0LI2L._AC_UL320_.jpg" 
                  />
              </div>
              <div className="col-sm">
              <Product 
                id="90829332"
                title="Men's Regular Fit Cotton Hoodie"
                price={699}
                rating={3}
                image="https://m.media-amazon.com/images/I/716nmUNDRoL._AC_UL320_.jpg"  
                  />
              </div>
              <div className="col-sm">
              <Product 
                  id="90829332"
                  title="The Banyan Tee Ride The Lightning Metallica Full Sleeves Tshirt - Band Tshirts"
                  price={299}
                  rating={5}
                  image="https://images-na.ssl-images-amazon.com/images/I/61Ns0qofo0L._UL1024_.jpg" 
                  />
              </div>

 </div>

 <div className="row mt-2">
                <div className="col-sm"> 
                <Product 
                  id="90829332"
                  title="JBL GO Portable Wireless Bluetooth Speaker with Mic (Black)"
                  price={1699}
                  rating={4}
                  image="https://m.media-amazon.com/images/I/81BIN5YLb4L._AC_UY218_.jpg"  
                    />
              </div>
              <div className="col-sm"> 
              <Product 
                  id="90829332"
                  title="iBall Sound Wave2 – Multimedia 2.0 Stereo Speakers, Black"
                  price={549}
                  rating={4}
                  image="https://m.media-amazon.com/images/I/512syhuJD7L._AC_UY218_.jpg"   
                    />
              </div>
              <div className="col-sm"> 
              <Product 
                id="90829332"
                title="Novateur R11 On Ear(Over Head) Headphones with Microphone, Over the ear Lightweight Folding Stereo Bass Headphones"
                price={699}
                rating={4}
                image="https://m.media-amazon.com/images/I/61hFbISaFxL._AC_UY218_.jpg"    
                    />
              </div>
              <div className="col-sm"> 
              <Product 
                  id="90829332"
                  title="Kore PVC 16-30 Kg Home Gym Set with One 3 Ft Curl and One Pair Dumbbell Rods with Gym Accessories"
                  price={1860}
                  rating={4}
                  image="https://m.media-amazon.com/images/I/81XNzjmXi+L._AC_UL320_.jpg"   
                    />
              </div>
              <div className="col-sm"> 
              <Product 
                id="90829332"
                title="Aurion Set of 2 PVC Dumbbells Weights Fitness Home Gym Exercise Barbell"
                price={325}
                rating={4}
                image="https://m.media-amazon.com/images/I/41Cvl+GKsyL._AC_UL320_.jpg"    
                    />
              </div>
 </div>

 <div className="row mt-2">
 
                <div className="col-sm"> 
                <Product 
                id="90829332"
                title="Nova NHT-1071 Titanium Coated USB Trimmer for Men (Black/Blue)"
                price={599}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/51kFeoBk3PL._SL1100_.jpg"    
                    />
              </div>
              <div className="col-sm"> 
              <Product 
                id="90829332"
                title="Philips BT3203/15 cordless rechargeable Beard Trimmer - 10 length settings; 45 min run time"
                price={1389}
                rating={4}
                image="https://m.media-amazon.com/images/I/71S4fmaVk5L._AC_UL320_.jpg"     
                    />
              </div>
              <div className="col-sm"> 
              <Product 
                id="90829332"
                title="Philips BT3221/15 corded & cordless Titanium blade Beard Trimmer - 20 length settings; 90 min run time"
                price={1949}
                rating={5}
                image="https://m.media-amazon.com/images/I/617WV3K81EL._AC_UL320_.jpg"    
                    />
              </div>
 </div>
 <div id="carouselExampleIndicators" class="carousel slide mt-2" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              </ol>
              <div className="carousel-inner" >
                <div className="carousel-item active">
                  <img id="second_carousel" src="https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                  <img id="second_carousel" src="https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                  <img id="second_carousel" src="https://images.pexels.com/photos/2769274/pexels-photo-2769274.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                  <img id="second_carousel" src="https://images.pexels.com/photos/2093322/pexels-photo-2093322.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                  <img id="second_carousel" src="https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                  <img id="second_carousel" src="https://images.pexels.com/photos/1251844/pexels-photo-1251844.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="d-block w-100" alt="..."/>
                </div>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
</div>

 <div className="row mt-2">
              <div className="col-sm">  
              <Product 
                            id="90829332"
                            title="Lenovo 82C7A006IH V15 ADA Laptop (AMD Athlon Silver 3050U/4GB Ram/ 1TB HDD/ 15.6 inch HD AG/ Windows-10/Integrated AMD Radeon Graphics/ Iron Grey)"
                            price={28500}
                            rating={3}
                            image="https://m.media-amazon.com/images/I/51RSK3t7tsL._AC_UY218_.jpg" 
              

                  />
            </div>
            <div className="col-sm"> 
            <Product 
                    id="90829332"
                    title="HP 14s cf3006tu 14-inch Laptop (Core i3-1005G1/4GB/1TB HDD/Windows 10 Home/Intel UHD Graphics), Natural Silver"
                    price={40499}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/71t9reLNFrL._AC_UY218_.jpg" 
                  />
            </div>
            <div className="col-sm"> 
            <Product 
                id="90829332"
                title="Acer One 14 Z2-485 14-inch Laptop (Intel Pentium Gold Processor) 4415U/4GB/1TB HDD/Windows 10 Home Single Language 64 Bit"
                price={25900}
                rating={3}
                image="https://m.media-amazon.com/images/I/61W8JPJNNML._AC_UY218_.jpg"  
                  />
            </div>
            <div className="col-sm"> 
            <Product 
                id="90829332"
                title="Lenovo V145-AMD-A6 15.6 inch HD Thin and Light Laptop (4GB RAM/ 1TB HDD/ DOS/ with DVD Writer/ Black/ 2.1 kg), 81MT0034IH"
                price={25990}
                rating={3}
                image="https://m.media-amazon.com/images/I/51kZcZbvdpL._AC_UY218_.jpg"  
                  />
            </div>
 </div>
 <div className="row mt-2">
              <div className="col-sm">  
              <Product 
                id="90829332"
                title="Men's Wonder-13 Mesh Sports Running Shoes"
                price={475}
                rating={4}
                image="https://m.media-amazon.com/images/I/61utX8kBDlL._AC_UL320_.jpg"   
                  />
            </div>
            <div className="col-sm"> 
            <Product 
                id="90829332"
                title="Men Casual Sneakers Running Sports Shoes"
                price={549}
                rating={4}
                image="https://m.media-amazon.com/images/I/71faQ24YLrL._AC_UL320_.jpg"   
                  />
            </div>
            <div className="col-sm"> 
            <Product 
                id="90829332"
                title="Men's Running Sports Shoes for Man"
                price={398}
                rating={3}
                image="https://m.media-amazon.com/images/I/81ETiYhIO-L._AC_UL320_.jpg"   
                  />
            </div>
            <div className="col-sm"> 
            <Product 
            id="90829332"
            title="Women's D.Grey/Pink Running Shoes"
            price={649}
            rating={5}
            image="https://m.media-amazon.com/images/I/81Uau7K3QnL._AC_UL320_.jpg" 
            />
            </div>
 </div>

</div>
<footer>

            <Footer/>

</footer>
</div>



    );
 }
 
 export default Home;