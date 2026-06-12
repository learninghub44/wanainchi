import { useEffect,useState }
from "react";

import {
getIssues
}
from "../api/issues";

export default function useIssues(){

const [issues,setIssues]
= useState([]);

const [loading,setLoading]
= useState(true);

useEffect(()=>{

(async()=>{

try{

const data =
await getIssues();

setIssues(data);

}
catch(err){

console.error(err);

}
finally{

setLoading(false);

}

})();

},[]);

return {
issues,
loading
};

}