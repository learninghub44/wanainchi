import { useState }
from "react";

export default function usePagination(
items=[],
perPage=9
){

const [page,setPage]
= useState(1);

const start =
(page-1)*perPage;

const end =
start+perPage;

const paginated =
items.slice(start,end);

const totalPages =
Math.ceil(
items.length/perPage
);

return {

page,

setPage,

paginated,

totalPages

};

}