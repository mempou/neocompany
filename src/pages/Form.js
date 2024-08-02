import { useState } from "react";
import { Button } from "../ui/button";


const Form = () => {
    const [selection, setSelection] = useState('');
    

    const handleChange = () => {
      setSelection(event.target.value);
    };
  
    return (
  <div className="w-full border bg-white pb-16 px-4">
    <h1 className="text-2xl text-primary3 text-center pt-4 font-bold">
      VOTRE DEMANDE
    </h1>
    <form className='pt-24 flex flex-col gap-6'>
    <div className='mt-2'>
        <label className="mb-1 text-gray-600">Nom</label>
        <input type='text' placeholder='Entrez votre Nom'  className="w-full py-3 pl-4 text-lg font-medium border border-gray-300 "/>
    </div>
    <div className='mt-2'>
    <label className="mb-1">Email</label>
        <input type='text' placeholder="Entrer votre Email"  className="w-full py-3 pl-4 text-lg font-medium border border-gray-300 "/>
    </div>
    <div className='mt-2'>  
    <label className="mb-1 text-gray-600">Selectionner le service voulu</label>
    <select
        id="selection"
        name="selection"
        value={selection}
        onChange={handleChange}
        className="border rounded text-lg font-medium px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 block w-full"
      >
        <option className="py-1 border border-gray-400 text-lg font-medium"  >Choisir un service</option>
        <option  className="py-1 border border-gray-900" value="service">Voyage d'études</option>
        <option  className="py-1 border border-gray-900" value="service1">Voyage d'affaires</option>
        <option  className="py-1 border border-gray-900" value="service2">Formations professionnelles</option>
        <option  className="py-1 border border-gray-900" value="service3">Co-working</option>
        <option  className="py-1 border border-gray-900" value="service4">Vente de billets d'avion</option>
      </select></div> 
      <div className='mt-2'>
    <label className="mb-1">Votre message</label>
        <textarea  placeholder="Entrer votre Email"  className="w-full h-44 py-3 pl-4 text-lg font-medium border border-gray-300 "/>
    </div>
      <div className="mt-8 relative border">
      <div className="mt-4 absolute right-8 bottom-1">
         <button>Envoyer</button>
      </div>
       
      </div>
    </form>
    
  </div>
      
       
    );
  };
  
  export default Form;
  