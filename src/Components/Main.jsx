import React,{useState} from 'react'
import SearchContainer from './SearchContainer'
import Profile from './Profile';

function Main() {
    const [uiData, setUIData] = useState("");

  return (
    <main className="my-5 border-4 p-4">
            <SearchContainer setUIData={setUIData}/>

           {uiData ? <Profile uiData={uiData}/> : <div className='w-full flex flex-col items-center justify-center p-10 gap-10'> 
           
           <h1 className="md:text-4xl">Welcome To Github Profile Finder</h1>
           <img src="https://th.bing.com/th/id/R.2b9be502d8d5c8f5a31d7ef807b18e69?rik=PQt%2bCJbkrlOB3g&riu=http%3a%2f%2fpngimg.com%2fuploads%2fgithub%2fgithub_PNG18.png&ehk=esBiTfarWOrFtlsGNgZw34XIxNL0O6PFUAwdRwMZL7U%3d&risl=&pid=ImgRaw&r=0" className="w-1/3" alt="github image" /></div> }
    </main>
  )
}

export default Main