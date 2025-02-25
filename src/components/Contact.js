const Contact = () => {
    return (<div>
       <div>
       <h1 className="text-emerald-500 mb-3 text-2xl font-extrabold">This is a contact component</h1>
        <form className="flex  gap-3 p-2 m-3" >
            <input type="text" className="p-[2px] text-center rounded-md border-1 border-black-600 outline-none w-30" placeholder="name" />
            <input type="text" className="p-[2px] text-center  rounded-md border-1 border-black-600 outline-none w-30" placeholder="message" />
            <button className="mr-2 rounded-md text-center px-2 bg-green-200 w-30">Submit</button>
        </form>
       </div>
   
    </div>)
}

export default Contact;