import React from 'react'
import notFound from '../notFound.png'
const PageNotFound = () => {
    return (
        

    < div className="flex flex-col items-center justify-center space-y-8">


<h1 className="text-center text-8xl font-bold">404</h1>


<img src={notFound} alt="Not Found" className="w-3/4 h-auto mb-8" />






    </div>
  );
};



export default PageNotFound