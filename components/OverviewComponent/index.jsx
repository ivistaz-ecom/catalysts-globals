import React from 'react'
import OverviewMenu from './OverviewMenu'
import OverviewBanner from './OverviewBanner'
import CmsBlock from './CmsBlogs'
import SwastiBlock from "./SwastiBlogs"
import VruttiBlock from './VruttiBlogs'
import FuzhioBlock from './FuzhioBlogs'
import GreenFnBlock from './GreenFnBlogs'
import UpfrontBlock from './UpfrontBlogs'
import CatalystBlock from './CatalystBlogs'
import Ecosystem from './Ecosystem'
import CACollab from './CACollab'
const index = () => {
  return (
    <div className='bg-black'>
        <OverviewMenu />
        <OverviewBanner />
        <CmsBlock />
        <SwastiBlock/>
        <VruttiBlock />
        <FuzhioBlock />
        <GreenFnBlock />
        <UpfrontBlock />
        <CatalystBlock/>
        <Ecosystem />
        <CACollab />
        


        
    </div>
  )
}

export default index