import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Post.module.css'
import React, { useEffect, useRef } from "react";
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import { browserName, CustomView } from 'react-device-detect';
import { useState } from "react";
import { useRouter } from "next/router";
import AnalogClock from "analog-clock-react";
import 'animate.css';
import Link from 'next/link';
import profilePic from '../public/imageassets/me.png'


export default function Home({ posts }) {

  let options = {
    width: "100px",
    border: false,
    borderColor: "#143F6B00",
    baseColor: "#143F6B00",
    centerColor: "F5535300",
    centerBorderColor: "F5535300",
    handColors: {
      second: "#ab0200",
      minute: "#262626",
      hour: "#262626"
    }
  };

  

  const router = useRouter();
  const [mappedPosts, setMappedPosts] = useState([]);

  useEffect(() => {
    if (posts.length) {
      // const imgBuilder = imageUrlBuilder({
      //   projectId: '77a6df46',
      //   dataset: 'production',
      // });

      setMappedPosts(
        posts.map(p => {
          return {
            ...p,
            // mainImage: imgBuilder.image(p.mainImage).width(500).height(250),
          }
        })
      );
    } else {
      setMappedPosts([]);
    }
  }, [posts]);

  



  return (
    <div className={styles.container}>
      <Head>
        <title>Megan O’Rourke</title>
        <meta name="description" content="Megan O’Rourke" />
        <link rel="icon" href="/favicon.ico" />
        <script type="text/javascript" src="//code.jquery.com/jquery-1.10.2.min.js" defer></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js" defer></script>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
        <script src="../assets/app.js" defer></script>
      </Head>



  

    






                <main className={styles.main}>



     

{/* ------------ backgrn ------------- */}

                <div className={styles.blur}>
{/* <div className={styles.blackoverlay}></div> */}
<div className={styles.background}></div>
</div>


<div className={styles.logincontainer}>
<div className={styles.usericon}></div>
    <div className={styles.logininputcontainer}>
    </div>
</div>


{/* ------------------------- */}

                <div className={styles.maincontainer}>
  
  <div className={styles.container}>
  <div  className={styles.iconcontainer}> 
    <div  className={styles.Weather}>
      <div className={styles.sun} ></div>
      <div className={styles.dots} >
        <div className={styles.box} ></div>
      </div>
    </div>
  </div>
  </div>


  <div className={styles.container}>
  <div  className={styles.iconcontainer}> 
    <div className={styles.Photos}>
      <div className={styles.photosicon} >
        <div className={styles.petals} >
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  </div>
  </div>


  <div  className={styles.container}>
  <div className={styles.iconcontainer}>
    <div className={styles.Paypal}>
      <div className={styles.lettercircle} ></div>
      <div className={styles.letterrectangle}></div>
    </div>
  </div>
  </div>

  <div  className={styles.container}>
  <div className={styles.iconcontainer}>
    <div className={styles.Reminders}>
      <div className={styles.dotone} > </div>
      <div  className={styles.dottwo} ></div>
      <div className={styles.dotthree} ></div>
      <div className={styles.circleone} ></div>
      <div className={styles.circletwo} ></div>
      <div className={styles.circlethree}></div>
      <div className={styles.linesone} ></div>
      <div className={styles.linestwo} ></div>
      <div className={styles.linesthree} ></div>
    </div>
  </div>
</div>

  <div  className={styles.container}>
  <div className={styles.iconcontainer}>
    <div className={styles.Calendar}> 
      {/* <span id="calendardayweek"></span>
      <span id="calendarday"></span> */}
      <span className={styles.calendat} id="day2">day</span>
      <span className={styles.Calenum} id="daynum2">00</span>
    </div> 
  </div>
  </div>

  <div  className={styles.container}>
    <div className={styles.iconcontainer}>
    <div className={styles.find}>
      <div className={styles.greencircle} ></div>
      <div className={styles.blackcircle} ></div>
      <div className={styles.bluecircle} ></div>
      <div className={styles.bluetriangle} >
        <svg
             overflow="visible"
             height="60"
             width="60"
             viewBox="0 0 3 3"
             fill="url(#gradient-color)"
             >
          <defs>
            <linearGradient id="gradient-color" gradientTransform="rotate(90)">
              <stop offset="42%" stopColor="#0f83ff00" />
              <stop offset="70%" stopColor="#0f83ff" />
              <stop offset="100%" stopColor="#0f83ff" />
            </linearGradient>
          </defs>
          <path
                d="M 0 0 C -0.993 -1.9877 -1.986 -3.9753 -2.979 -5.963 C -0.9943 -5.9507 0.9903 -5.9383 2.975 -5.926 C 1.9797 -3.9477 0.9843 -1.9693 -0.011 0.009"
                />
        </svg>
      </div>
    </div>
  </div>
  </div>

  <div  className={styles.container}>
    <div className={styles.iconcontainer} >
    <div className={styles.Mail} >
      <div className={styles.envelope} >
        <div className={styles.top} ></div>
        <div className={styles.left} ></div>
        <div className={styles.right} ></div>
        <div className={styles.bottom} ></div>
      </div>
    </div>
  </div>
  </div>

  <div  className={styles.container}>
    <div className={styles.iconcontainer} >
    <div className={styles.Clock} >
      <div className={styles.hours} >
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>6</span>
        <span>7</span>
        <span>8</span>
        <span>9</span>
        <span>10</span>
        <span>11</span>
        <span>12</span>
      </div>
      <div className={styles.needle} >
      {/* <span className={styles.needlehour}></span>
      <span className={styles.needleminute} ></span>
      <span className={styles.needlesecond}></span> */}
      <div>

      <div className={styles.Clockneedle} >
      <AnalogClock {...options} />
      </div>

  </div>
    </div>
  </div>
  </div>
  </div>

  <div  className={styles.container}>
    <div className={styles.iconcontainer}>
    <div className={styles.Appstore}>
      <div className={styles.bar} ></div>
      <div className={styles.bar} ></div>
      <div className={styles.bar}></div>
    </div>
  </div>
  </div>

  <div  className={styles.container}>
  <div className={styles.iconcontainer} >
    <div className={styles.Instagram} >
      <div className={styles.instagramborderRectangle}>
        <div className={styles.instagramlens} ></div>
        <div className={styles.instagramflash} ></div>
      </div>
    </div>
  </div>
  </div>

  <div  className={styles.container}>
    <div className={styles.iconcontainer}>
    <div className={styles.Files}>
      <div className={styles.frontside} >
        <div className={styles.blackpaper} ></div>
      </div>
      <div className={styles.backside} ></div>
      <div className={styles.sidenotch} ></div>
    </div>
  </div>
  </div>

  <div  className={styles.container}>
  <span className={styles.iconbuttonbadge}>2</span>
    <div className={styles.iconcontainer}>
    <div className={styles.notes}>
      <div className={styles.headernotes} ></div>
      <div className={styles.dottedline} ></div>
      <div className={styles.line1notes} ></div>
      <div className={styles.line2notes} ></div>
      <div className={styles.line3notes} ></div>
    </div>
  </div>
  </div>

  {/* <div  className={styles.container}>
    <div className={styles.iconcontainer}>
    <div className={styles.Messenger}>
      <div className={styles.messengercircle} >
        <div className={styles.lightning} >
          <div className={styles.Messengerline1} ></div>
          <div className={styles.Messengerline2} ></div>
        </div>
      </div>
      <div className={styles.messengertriangle} ></div>
    </div>
  </div>
  </div> */}

  {/* <div  className={styles.container}>
    <div className={styles.iconcontainer}>
    <div className={styles.Videos}>
      <div className={styles.videosline} >
        <div className={styles.middleline} ></div>
        <div className={styles.square1} ></div>
        <div className={styles.square2} ></div>
        <div className={styles.triangle1} ></div>
        <div className={styles.triangle2} ></div>
      </div>
    </div>
  </div>
  </div> */}

  <div  className={styles.container}>
    <div className={styles.iconcontainer} >
    <div className={styles.Itunes} >
      <div className={styles.scoretop} ></div>
      <div className={styles.scoreleft} ></div>
      <div className={styles.scoreright} ></div>
    </div>
  </div>
  </div>

  <div  className={styles.container}>
    <div className={styles.iconcontainer}>
    <div className={styles.Messages}>
      <div className={styles.messagecircle} ></div>
      <div className={styles.messagetriangle} ></div>
    </div>
  </div>
  </div>

  <div className={styles.container}>
    <div className={styles.iconcontainer} >
    <div className={styles.Safari} >
      <div className={styles.safaricircle}>
        <div className={styles.arrowred} ></div>
        <div className={styles.arrowblack} ></div>
        <ul>
          <div className={styles.safariline}></div>
          <div className={styles.safariline}></div>
          <div className={styles.safariline}></div>
          <div className={styles.safariline}></div>
          <div className={styles.safariline}></div>
          <div className={styles.safariline}></div>
          <div className={styles.safariline}></div>
          <div className={styles.safariline}></div>

          <div className={styles.safariline}></div>
          <div className={styles.safariline}></div>
          <div className={styles.safariline}></div>
          <div className={styles.safariline}></div>
          <div className={styles.safariline}></div>
          <div className={styles.safariline}></div>
          <div className={styles.safariline}></div>
          <div className={styles.safariline}></div>

          <div className={styles.safariline}></div>
          <div className={styles.safariline}></div>
          <div className={styles.safariline}></div>
          <div className={styles.safariline}></div>
          <div className={styles.safariline}></div>
          <div className={styles.safariline}></div>
          <div className={styles.safariline}></div>
          <div className={styles.safariline}></div>

          <div className={styles.safariline}></div>
          <div className={styles.safariline}></div>
          <div className={styles.safariline}></div>
          <div className={styles.safariline}></div>
          <div className={styles.safariline}></div>
          <div className={styles.safariline}></div>
          <div className={styles.safariline}></div>
          <div className={styles.safariline}></div>

          <div className={styles.safariline}></div>
          <div className={styles.safariline}></div>
          <div className={styles.safariline}></div>
          <div className={styles.safariline}></div>
          <div className={styles.safariline}></div>
          <div className={styles.safariline}></div>
          <div className={styles.safariline}></div>
          <div className={styles.safariline}></div>

          <div className={styles.safariline}></div>
          <div className={styles.safariline}></div>
          <div className={styles.safariline}></div>
          <div className={styles.safariline}></div>
          <div className={styles.safariline}></div>
          <div className={styles.safariline}></div>
          <div className={styles.safariline}></div>
          <div className={styles.safariline}></div>

          <div className={styles.safariline}></div>
          <div className={styles.safariline}></div>
          <div className={styles.safariline}></div>
          <div className={styles.safariline}></div>
          <div className={styles.safariline}></div>
          <div className={styles.safariline}></div>
          <div className={styles.safariline}></div>
          <div className={styles.safariline}></div>

          <div className={styles.safariline}></div>
          <div className={styles.safariline}></div>
          <div className={styles.safariline}></div>
          <div className={styles.safariline}></div>
          <div className={styles.safariline}></div>
          <div className={styles.safariline}></div>
          <div className={styles.safariline}></div>
          <div className={styles.safariline}></div>

          <div className={styles.safariline}></div>
          <div className={styles.safariline}></div>
          <div className={styles.safariline}></div>
          <div className={styles.safariline}></div>
          <div className={styles.safariline}></div>
          <div className={styles.safariline}></div>
          <div className={styles.safariline}></div>
          <div className={styles.safariline}></div>

          <div className={styles.safariline}></div>
          <div className={styles.safariline}></div>
          <div className={styles.safariline}></div>
          <div className={styles.safariline}></div>
          <div className={styles.safariline}></div>
          <div className={styles.safariline}></div>
          <div className={styles.safariline}></div>
          <div className={styles.safariline}></div>

          <div className={styles.safariline}></div>
          <div className={styles.safariline}></div>
          <div className={styles.safariline}></div>
          <div className={styles.safariline}></div>

          <div className={styles.safariline}></div>
          <div className={styles.safariline}></div>
          <div className={styles.safariline}></div>
        </ul>
      </div>
    </div> 
  </div>
  </div>

  <div  className={styles.container}>
    <div className={styles.iconcontainer} >
    <div className={styles.Books} >
      <div className={styles.pagefirst} ></div>
      <div className={styles.pagesecond} ></div>
      <div className={styles.uppercirclefirst} ></div>
      <div className={styles.uppercirclesecond} ></div>
      <div className={styles.lowercirclefirst} ></div>
      <div className={styles.lowercirclesecond} ></div>
    </div>
  </div>
</div>

  <div  className={styles.container}>
    <div className={styles.iconcontainer}>
    <div className={styles.Camera}>
      <div className={styles.notch}>
        <svg
             height="100"
             width="100"
             viewBox="0 0 5 5"
             fill="#333"
             className={styles.notchcorrectionright}
             >
          <path
                d="M 0.021 0.092 C -0.0003 0.2043 -0.0007 0.4087 -0.001 0.613 C 0.4377 0.617 0.8763 0.621 1.315 0.625 C 0.947 0.602 0.482 0.517 0.406 0.461 C 0.229 0.344 0.165 0.293 0.021 0.092"
                />
        </svg>
        <svg
             height="100"
             width="100"
             viewBox="0 0 5 5"
             fill="#333"
             className={styles.notchcorrectionleft}
             >
          <path transform="translate(1) scale(-1, 1)"
                d="M 0.021 0.092 C -0.0003 0.2043 -0.0007 0.4087 -0.001 0.613 C 0.4377 0.617 0.8763 0.621 1.315 0.625 C 0.947 0.602 0.482 0.517 0.406 0.461 C 0.229 0.344 0.165 0.293 0.021 0.092"
                />
        </svg>
      </div>
      <div className={styles.cameraicon} >
        <div className={styles.cameraiconline1} ></div>
        <div className={styles.lens} ></div>
        <div className={styles.button} ></div>
        <div className={styles.cameraicondot} ></div>
        <div className={styles.cameraiconline2} ></div>
      </div>
    </div>
  </div>
  </div>


  {/* <div  className={styles.container}>
    <div className={styles.iconcontainer}>
    <div className={styles.Twitter}>
      <div className={styles.twittericon} ></div>
    </div>
  </div>
  </div> */}

  <div  className={styles.container}>
    <div className={styles.iconcontainer}>
    <div className={styles.Facetime}>
      <div className={styles.triangle} >
        <div className={styles.verticalline} ></div>
      </div>
      <div className={styles.square} ></div>
    </div>
  </div>
  </div>

 

  </div>

      
  {/* -------------------------------------------------------------------------notes app */}

<div className={styles.allnotes}>
<div className="animate__animated animate__rotateIn">
<div className={styles.notesarea}>



<header className={styles.header}>
                  <div className={styles.tlabel}>
                              {/* <div className={styles.headeredition}>
                                <a href="../" data-location="internal">
                                  2022 DOT_NET
                                </a>
                              </div> */}
                              {/* <div className={styles.headertime}>06:20:22</div> */}
                              {/* <div>__</div> */}
                {/* <div className={styles.headertime}> 06:20:22</div> */}
                {/* <div className=' w-screen '> */}
                <div className={styles.headertime}>
                  <div></div>
                        <div id="Date"></div>
                      <ul className={styles.ul}>
                          <li id="hours"></li>
                          <li id="point">:</li>
                          <li id="min"></li>
                          <li id="point">:</li>
                          <li id="sec"></li>
                              {/* <div className="display-date"> */}
                                <span className=' pl-2 text-black' id="day">day</span>
                                {/* <div></div> */}
                                <span className=' pl-1 text-black' id="daynum">00</span>
                                {/* <div></div> */}
                                <span className=' pl-1 text-black' id="month">month</span>
                                {/* <span id="year">0000</span> */}
                              {/* </div> */}
                      </ul> 
                    <div></div>
                </div>
                {/* </div> */}
                          <div className=' flex justify-end  mix-blend-screen '>
                            <div className={styles.test}><Image  src="/imageassets/wifiw.png" width='64px' height='45px' alt="Logo" /></div>
                                <div className=' pr-2 pl-2 text-black' data-location="internal" >100%</div>
                            <div className={styles.test2}>
                                <Image className={styles.imgcol} src="/imageassets/bat.png" width='64px' height='64px'  /></div>
                                {/* <button onClick="on()">Turn on overlay effect</button> */}
                          </div>
                  </div>
                </header>




                
            <div className={styles.wrapper}>

               

                <div className={styles.contentwrapperph}>
                    <div className={styles.contentwrapperinph}>

            
                        <div className={styles.sidenavph}>
                            <div className='flex justify-between font-base pt-5 pl-2 pr-2 z-50 w-8/12 text-[#6597da]'>
                            </div>
                            <div className='z-60 flex justify-between font-base pl-2 pr-2 text-[#6597da]'>
                                <button type="button" onClick={() => router.push('./')}>
                                    <a className='hover:text-[#d0d0d0] mix-blend-multiply cursor-pointer'><span className="material-icons text-sm md-18">arrow_back_ios</span> Home</a>
                                </button>
                                <div className='  pl-5 pr-2 text-xl text-center text-[#383838] font-base'>
                                    <div>Ygmegs</div>
                                    <div className='  pb-5 text-xs text-center text-[#383838]   '>
                                    <p>May 10, 2022 8:07PM</p>
                                </div>
                            </div>
                                <a type="button" target="_blank" rel="noopener noreferrer" onClick={() => router.push('https://www.instagram.com/ygmegs/') }>
                                    <div className='hover:text-[#d0d0d0]  pt-5 pl-2 pr-2 mix-blend-multiply cursor-pointer'>Me</div>
                                </a>
                        </div>
                    </div>
                    <div className={styles.mepic}>
                <Image  src={profilePic} alt="Picture of the author" />
                </div>
                </div>

                

                </div>
            </div>

</div>     
</div>
</div>







      
      </main>








      <BrowserView>

<CustomView condition={browserName === "Chrome"}>

</CustomView>

<CustomView condition={browserName === "Firefox"}>

</CustomView>

<CustomView condition={browserName === "Safari"}>

</CustomView>


    </BrowserView>












      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
         
        </a>
      </footer> */}
    </div>
  )
}



export const getServerSideProps = async pageContext => {
  const query = encodeURIComponent('*[ _type == "post" ]');
  const url = `https://77a6df46.api.sanity.io/v1/data/query/production?query=${query}`;
  const result = await fetch(url).then(res => res.json());

  if (!result.result || !result.result.length) {
    return {
      props: {
        posts: [],
      }
    }
  } else {
    return {
      props: {
        posts: result.result,
      }
    }
  }
};