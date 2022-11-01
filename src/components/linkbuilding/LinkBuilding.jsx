import React from 'react'
import './linkbuild.css'
import dataCenter from '../../assets/images/data-center.png'

function LinkBuilding() {
  return (
    <div className='container'>
      <div className='linkHead'>
<div className='linkbuildContainer'>
    <div className='linkbuildh2'>
    <h2>
    Link building is the process of acquiring hyperlinks from other websites to your own
    </h2>
    </div>
    <div className='linkbuildp1'>
    <p>
    A hyperlink (usually just called a link) is a way for users to navigate between pages on the Internet. Search engines use links to crawl the web. They will crawl the links between the individual pages on your website, and they will crawl the links between entire websites. 

    </p>
    </div>

    <div className='linkbuildp2'>
    <p>
Once search engines have crawled pages on the web, they can extract the content of those pages and add it to their indexes. In this way, they can decide if they feel a page is of sufficient quality to be ranked well for relevant keywords.

    </p>
    </div>
    <div className='linkbuildBut'>
    <button>Learn More</button>
    </div>

</div>
    <div className='linkImg'>
      <img src={dataCenter}/>
    </div>
</div>
    </div>
  )
}

export default LinkBuilding