
const Quote = ({type}: {type: 'signin' | 'signup'}) => {
  return (
    <div className=" bg-slate-200 h-full w-full">
        <video
            className="object-cover h-full w-full"
            src={type=='signin' ? "/signin.mp4" : "/signup.mp4"}
            autoPlay
            loop
            muted
         />
        {/* <div className="max-w-lg mx-auto">
            <div className=" font-bold text-lg leading-6">"The customer service i received was exceptional. The support team went above and beyond to address my concerns."</div>
            <div className="max-w-md font-semibold text-md flex pt-2">
                James Winnfield
            </div>
            <div className="max-w-md text-sm opacity-80">
                CEO, Acme inc
            </div>
        </div> */}
    </div>
  )
} 

export default Quote
