import React from 'react'
import { Progress } from '@/components/ui/progress'
const Loader = () => {
    const [progress, setProgress] = React.useState(10)
 
    React.useEffect(() => {
        function handleProgress  () {
            if(progress <= 100){
                setProgress((val)=> val + 10)
            }
        }
        
          const timer = setTimeout(handleProgress, 100)
        
      console.log("running")
    //   return () => clearTimeout(timer) 
    }, [progress])
   
    return (
        <>
            <section className='w-full h-screen flex justify-center items-center' >
              <Progress value={progress} className="w-[20%] h-[10px] transition-all ease-in-out" />

            </section>
        </>
    )
  }

export default Loader