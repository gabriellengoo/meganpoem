import imageUrlBuilder from '@sanity/image-url';
import { useState, useEffect } from 'react';
import styles from '../../styles/Post.module.css';
import BlockContent from '@sanity/block-content-to-react';
import Image from 'next/image';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import { browserName, CustomView } from 'react-device-detect';
import { useRouter } from "next/router";
import AnalogClock from "analog-clock-react";
import 'animate.css';
import Head from 'next/head'
import Link from 'next/link'


export const Post = ({ title, body , summary, url}) => {
//   const [imageUrl, setImageUrl] = useState('');

//   useEffect(() => {
//     const imgBuilder = imageUrlBuilder({
//       projectId: '77a6df46',
//       dataset: 'production',
//     });

//     setImageUrl(imgBuilder.image(image));
//   }, [image]);

const router = useRouter()







  return (
    <div>
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

      <div className={styles.main}>
     

      
  {/* -------------------------------------------------------------------------notes app */}

  <div className={styles.allnotes}>
<div >
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

                <div className={styles.sidenav}>

{/* ----------------------------------------------------------------poems */}
                    <div className='z-60 flex justify-between font-base pt-5 pl-2 pr-2 text-[#e5af08]'>
                    <button type="button" onClick={() => router.push('../poems')}>
                        <a className='hover:text-[#d0d0d0] mix-blend-multiply'><span className="material-icons text-sm md-18">arrow_back_ios</span> Back to all</a></button>
                        <div className='hover:text-[#d0d0d0] mix-blend-multiply cursor-pointer'><span className="material-symbols-outlined" onClick={() => router.push('../poems')}>help</span></div>
                    </div>

                    <div className='pt-2 pl-2 pr-2 text-xl font-semibold'>
                        <div>Poems</div>
                    </div>

                 
 {/* ----------------------------------------------------------------seach */}
                    <div className="flex p-2 pt-2 justify-center">
                    <div className="mb-2 xl:w-96">
                        <div className="input-group relative flex flex-wrap items-stretch w-full mb-4 rounded">
                            
                        <input type="search" className="form-control relative flex-auto min-w-0 block w-full px-2 py-1.5 text-base font-normal text-[#8b8b90] bg-[#e3e3e8] bg-clip-padding border border-solid border-[#e3e3e8] rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[white] focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2"/>
                        {/* <span className="input-group-text flex items-center px-3 py-1.5 text-base font-normal text-gray-700 text-center whitespace-nowrap rounded" id="basic-addon2">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                            </svg>
                        </span> */}
                        
                        </div>
                    </div>
                    </div>

                    <div className=' flex justify-between pl-5 pr-5 text-base font-semibold'>
                        <div>Recent</div>
                        <div className='text-[#e5af08]'><span className="material-icons text-xl md-18">expand_more</span></div>
                    </div>
                    <div className=" p-2 flex justify-center">
                        <div className="bg-white rounded-lg border border-gray-200 w-96 text-gray-900">
                            <a
                            href="#!"
                            aria-current="true"
                            className="
                                block
                                px-6
                                py-2
                                border-b border-[#e5af08]
                                w-full
                                rounded-t-lg
                                bg-[#e5af08]
                                text-white
                                cursor-pointer
                            "
                            >
                            <div>{title}</div>
                            <div className=" font-light text-xs " >{summary}</div>
                            </a>
                           
                        </div>
                        </div>


                    <div className=' pt-5 pl-5 pr-1 text-base font-semibold'>
                        <div>All</div>
                    </div>
                    <div className=" p-2 flex justify-center">
                        <div className="bg-white rounded-lg border border-gray-200 w-96 text-gray-900">
                           
                        </div>
                        </div>


                    <footer className={styles.footer}>
                        <a
                        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        Website built by The Internet Arcitect Bitch!!
                        
                        </a>
                    </footer>
                </div>




    


                <div className={styles.contentwrapper}>
                <div className={styles.contentwrapperin}>
                <div className='flex justify-between font-base pt-5 pl-2 pr-2 w-8/12 z-50 text-[#e5af08]'>
                        {/* <div className='hover:text-[#d0d0d0] mix-blend-multiply cursor-pointer'><span className="material-symbols-outlined">expand</span></div> */}
                        <Link href={url} className='hover:text-[#d0d0d0] mix-blend-multiply cursor-pointer' >
                        <span className="material-symbols-outlined">download</span></Link>
                        <a href='mailto:my@email.com'className='hover:text-[#d0d0d0] mix-blend-multiply cursor-pointer'> <span className="material-symbols-outlined">alternate_email</span></a>
                    </div>
                    <div className=' pt-5 pl-5 pr-2 text-3xl text-[#383838]  font-semibold'>
                        <div>{title}</div>
                    </div>
                    <div className=' pt-5 pl-5 pr-2 pb-10 text-[#383838] w-6/12 '>
                    <p><BlockContent blocks={body} /></p>
                    </div>
                    <Link href={url} className=' w-8/12 pt-5 pl-5 pr-2 border-t border-t-gray-200 text-[#383838] hover:text-[#c1c1c1]'><a className=' pt-5 pl-5 pr-2  text-[#383838] w-2/12 hover:text-[#c1c1c1]'>Download Poem</a></Link>
                    {/* <div><span className="material-symbols-outlined">download</span></div> */}
                </div>
                </div>
            </div>

</div>     
</div>
</div>





        





      </div>
    </div>
  );
};












export const getServerSideProps = async pageContext => {
  const pageSlug = pageContext.query.slug;
  
  if (!pageSlug) {
    return {
      notFound: true
    }
  }

  const query = encodeURIComponent(`*[ _type == "post" && slug.current == "${pageSlug}" ]`);
  const url = `https://77a6df46.api.sanity.io/v1/data/query/production?query=${query}`;

  const result = await fetch(url).then(res => res.json());
  const post = result.result[0];

  if (!post) {
    return {
      notFound: true
    }
  } else {
    return {
      props: {
        body: post.body,
        title: post.title,
        summary: post.summary,
        url: post.url,
        // image: post.mainImage,
      }
    }
  }
};

export default Post;