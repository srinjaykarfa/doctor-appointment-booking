import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React from "react";
 function CategorySearch() {
   return (

   <div className='mb-10 items flex flex-col gap-4 text-center justify-center'>
    <h2 className='font-bold text-2xl tracking-wider'>
        Search<span className='text-purple-600'> Doctors</span>
    </h2>
    <h2 className='text-gray-600 text-xl'> Search Your Doctor and Book Appoinment in One Click</h2>

    <div className="flex w-full mt-3 max-w-sm items-center gap-2 mx-auto">
      <Input type="text" placeholder="Search..." />
      <Button type="submit">
        <Search className='h-4 w-4 mr-2' />
        Search
      </Button>
    </div>
   </div>
 );
}

export default CategorySearch;