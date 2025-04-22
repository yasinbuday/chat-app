"use client"
import { Toaster } from 'react-hot-toast'
 
import { FC } from 'react'

interface ProvidersProps {
  
}

const Providers: FC<ProvidersProps> = ({}) => {
  return <>
     <Toaster position='top-center' reverseOrder={false} />
  </>
}

export default Providers